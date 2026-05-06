const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

// GET /api/tests/details/:slug
router.get('/details/:slug', async (req, res) => {
  const { slug } = req.params;

  try {
    const testPage = await prisma.testPage.findUnique({
      where: { slug: slug },
      include: {
        papers: {
          take: 1, // Grab the first paper associated with this category
          select: { id: true, title: true, durationMinutes: true }
        }
      }
    });

    

    if (!testPage) {
      return res.status(404).json({ message: "Test or Paper not found" });
    }

    // Extract the first paper into its own field
    const paper = testPage.papers[0]; // Get the first item

    // Return the test info and the specific paper ID for the quiz
    res.json({
      title: testPage.title,
      description: testPage.description,
      testPaperId: paper ? paper.id : null,
      questionsCount: paper ? paper._count?.questions || 40 : 40,
      duration: paper ? paper.durationMinutes : 45
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// 2. ADD THIS: To create the shuffled sequence when the Start button is clicked
// Express Route
router.get('/setup/:testPaperId', async (req, res) => {
  const { testPaperId } = req.params;

  try {
    // 1. Fetch all question IDs for this paper
    const allQuestions = await prisma.question.findMany({
      where: { testPaperId: testPaperId },
      select: { id: true },
    });

    // 2. Shuffle and slice to 40
    const shuffledIds = allQuestions
      .sort(() => Math.random() - 0.5)
      .slice(0, 40)
      .map(q => q.id);

    // 3. CREATE the TestSet record in your DB
    const newTestSet = await prisma.testSet.create({
      data: {
        testPaperId: testPaperId,
        questions: shuffledIds, // Saves the exact order
      }
    });

    // 4. Return the database ID and the sequence to the frontend
    res.json({
      testSetId: newTestSet.id, // THE GENERATED DB ID
      shuffledIds: shuffledIds
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// 3. ADD THIS: To fetch the actual question text/options one by one
router.get('/get-one/:questionId', async (req, res) => {
  const question = await prisma.question.findUnique({
    where: { id: req.params.questionId },
    include: { options: { select: { id: true, text: true } } }
  });
  res.json(question);
});

module.exports = router;
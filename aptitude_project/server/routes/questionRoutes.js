const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

// GET /api/questions/next?testPaperId=some-id&page=0
router.get('/next', async (req, res) => {
  const { testPaperId, page } = req.query;

  // Convert the page string to a number. Default to 0 if not provided.
  const skipIndex = parseInt(page) || 0;

  try {
    const question = await prisma.question.findFirst({
      where: { 
        testPaperId: testPaperId 
      },
      skip: skipIndex, 
      take: 1,
      include: {
        options: {
          select: {
            id: true,
            text: true,
            // We omit isCorrect so users can't cheat via the Network tab
          }
        }
      }
    });

    if (!question) {
      return res.status(404).json({ 
        success: false,
        message: "No more questions available." 
      });
    }

    res.json(question);
  } catch (error) {
    console.error("Error fetching question:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /api/questions/submit-answer
router.post('/submit-answer', async (req, res) => {
  const { optionId } = req.body;

  try {
    const option = await prisma.option.findUnique({
      where: { id: optionId },
      include: { question: true }
    });

    if (!option) {
      return res.status(404).json({ message: "Option not found" });
    }

    res.json({
      isCorrect: option.isCorrect,
      explanation: option.question.explanation
    });
  } catch (error) {
    res.status(500).json({ error: "Validation failed" });
  }
});

module.exports = router;

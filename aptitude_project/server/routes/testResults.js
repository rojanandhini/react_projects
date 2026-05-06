const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

router.post('/submit-test', async (req, res) => {
  // 1. Match frontend keys: Use testSetId instead of testId
  const { userId, testSetId, userAnswers } = req.body; 

  try {
    const testSet = await prisma.testSet.findUnique({
      where: { id: parseInt(testSetId) }, // Use testSetId here
    });

    if (!testSet) {
      return res.status(404).json({ error: "Test set not found" });
    }
    
    const questions = await prisma.question.findMany({
      where: { id: { in: testSet.questions } },
      include: { options: true }
    });

    let correct = 0;
    let wrong = 0;
    questions.forEach(q => {
      const selected = userAnswers[q.id];
      if (selected) {
        const isRight = q.options.find(o => o.id === selected)?.isCorrect;
        if (isRight) correct++; else wrong++;
      }
    });

    const unanswered = testSet.questions.length - (correct + wrong);

    const result = await prisma.$transaction([
      prisma.userTest.create({
        data: {
          // Connect to relations properly
          users: { connect: { userId: userId } },
          testSet: { connect: { id: parseInt(testSetId) } },
          answers: userAnswers,
          score: correct,
          correctAnsCount: correct,
          wrongAnsCount: wrong,
          unansweredCount: unanswered
        }
      }),
      prisma.userMetrics.upsert({
        where: { userId: userId },
        update: {
          totalCorrect: { increment: correct },
          totalIncorrect: { increment: wrong },
          totalUnanswered: { increment: unanswered },
          // Ensure testSetId is a string if your schema uses String[]
          setsAttempted: { push: testSetId.toString() }
        },
        create: {
          userId: userId,
          totalCorrect: correct,
          totalIncorrect: wrong,
          totalUnanswered: unanswered,
          setsAttempted: [testSetId.toString()],
          review: 0
        }
      })
    ]);

   res.json({
  ...result[0],         // The UserTest record (score, counts)
  answers: userAnswers,  // The {qid: optid} object
  questions: questions   // The full list of questions with options and explanations
});
  } catch (err) {
    console.error(err); // Log full error to terminal
    res.status(500).json({ error: err.message });
  }
});
router.get("/stats",async (req,res)=>{
try {
    const { userId } = req.query;
    { if (!userId) {
      return res.status(400).json({ message: "UserId is required" });
    }

    const stats = await prisma.userMetrics.findUnique({
      where: { userId: userId }
    });

    // Also fetch the individual test history
    const history = await prisma.userTest.findMany({
      where: { userId: userId },
      include: {
        testSet:  {
      include: {
        // This is a special trick: we need to find questions that match the IDs in the testSet.questions array
        testPaper: {
          include: {
            questions: {
              include: { options: true }
            }
          }
        }
      }
    }
      },
      orderBy: { submittedAt: 'desc' } // Newest first
    });

  const formattedHistory = history.map(attempt => {
  const allQns = attempt.testSet.testPaper.questions;
  
  // Find questions and filter out any undefined results (safety check)
  const orderedQns = attempt.testSet.questions
    .map(id => allQns.find(q => q.id === id))
    .filter(q => q !== undefined); 
  
  return {
    ...attempt,
    questions: orderedQns // Simplified key to match the Quiz page response
  };
});

    res.status(200).json({ 
      data: { stats, history: formattedHistory } 
    });
     }
} catch (error) {
    res.status(500).json({message:"user stats couldn't be retrieved", error: error})     ;
}
})
 module.exports=router;
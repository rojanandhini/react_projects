const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/* ---------------- QUESTION GENERATORS ---------------- */

// Numerical Ability
function numericalQuestion(i) {
  const a = Math.floor(Math.random() * 50) + 10;
  const b = Math.floor(Math.random() * 50) + 10;
  const operations = [
    {
      q: `What is ${a} + ${b}?`,
      ans: a + b
    },
    {
      q: `What is ${a} × ${b}?`,
      ans: a * b
    },
    {
      q: `What is ${a * b} ÷ ${a}?`,
      ans: b
    },
    {
      q: `Find ${a}% of ${b * 10}`,
      ans: (a / 100) * (b * 10)
    }
  ];

  const picked = operations[i % operations.length];

  return createMCQ(picked.q, picked.ans);
}

// Verbal Reasoning
function verbalQuestion(i) {
  const patterns = [
    `Complete series: A, C, E, ?`,
    `Find odd word: Apple, Banana, Carrot, Mango`,
    `Dog : Bark :: Cat : ?`,
    `1, 4, 9, 16, ?`
  ];

  return createMCQ(patterns[i % patterns.length], "Answer");
}

// English
function englishQuestion(i) {
  const patterns = [
    `Choose synonym of 'Happy'`,
    `Find error: She go to school daily`,
    `Fill blank: She ___ going`,
    `Choose correct spelling`
  ];

  return createMCQ(patterns[i % patterns.length], "Correct");
}

// Technical
function technicalQuestion(i) {
  const patterns = [
    `What is SDLC?`,
    `What is unit testing?`,
    `What is API?`,
    `What is database normalization?`
  ];

  return createMCQ(patterns[i % patterns.length], "Correct");
}

// Programming
function programmingQuestion(i) {
  const patterns = [
    `What is closure in JavaScript?`,
    `Difference between let and var`,
    `What is Promise?`,
    `What is event loop?`
  ];

  return createMCQ(patterns[i % patterns.length], "Correct");
}

// Interview
function interviewQuestion(i) {
  const patterns = [
    `Tell me about yourself`,
    `Why should we hire you?`,
    `What are your strengths?`,
    `Where do you see yourself in 5 years?`
  ];

  return createMCQ(patterns[i % patterns.length], "Best Answer");
}

/* ---------------- COMMON MCQ BUILDER ---------------- */

function createMCQ(question, correctAnswer) {
  const options = shuffle([
    { text: correctAnswer.toString(), isCorrect: true },
    { text: "Option A", isCorrect: false },
    { text: "Option B", isCorrect: false },
    { text: "Option C", isCorrect: false }
  ]);

  return {
    questionText: question,
    explanation: `Explanation for: ${question}`,
    marks: 1,
    options: {
      create: options
    }
  };
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

/* ---------------- TEST CONFIG ---------------- */

const testPages = [
  { title: "Numerical Ability", slug: "numerical-ability", gen: numericalQuestion },
  { title: "Verbal Reasoning", slug: "verbal-reasoning", gen: verbalQuestion },
  { title: "English Proficiency", slug: "english-proficiency", gen: englishQuestion },
  { title: "Technical Questions", slug: "technical-questions", gen: technicalQuestion },
  { title: "Programming", slug: "programming", gen: programmingQuestion },
  { title: "Interview", slug: "interview", gen: interviewQuestion }
];

/* ---------------- MAIN SEED ---------------- */

async function main() {
  for (const page of testPages) {
    const questions = Array.from({ length: 100 }).map((_, i) =>
      page.gen(i)
    );

    const created = await prisma.testPage.create({
      data: {
        slug: page.slug,
        title: page.title,
        img: `/images/${page.slug}.png`,
        description: `${page.title} practice test`,
        topics: "mixed",
        papers: {
          create: [
            {
              title: `${page.title} Full Test`,
              durationMinutes: 60,
              difficulty: "Medium",
              questions: {
                create: questions
              }
            }
          ]
        }
      }
    });

    console.log(`✅ Created ${page.title} with 100 questions`);
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
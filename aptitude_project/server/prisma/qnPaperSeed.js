const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();

async function main() {
  // Load and parse the JSON file
  const rawData = fs.readFileSync('./data1.json');
  const topicsData = JSON.parse(rawData);

  // Iterate through each topic slug in your JSON (e.g., 'numerical-ability')
  for (const [slug, questions] of Object.entries(topicsData)) {
    const page = await prisma.testPage.findUnique({ where: { slug } });

    if (!page) {
      console.warn(`Skipping: testPage with slug "${slug}" not found.`);
      continue;
    }

    console.log(`Seeding ${questions.length} questions for ${slug}...`);

    // Create one main paper for this topic
    await prisma.testPaper.create({
      data: {
        title: `${page.title} - Full Practice Set`,
        durationMinutes: 120, // Adjust as needed
        difficulty: 'Medium',
        testPageId: page.testId,
        questions: {
          create: questions.map((q) => ({
            questionText: q.question,
            explanation: q.explanation,
            marks: 1,
            options: {
              create: q.options // Ensure your JSON options have 'text' and 'isCorrect'
            }
          }))
        }
      }
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("Database seeded successfully!");
  });

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const testPages = [
    {
      slug: "numerical-ability",
      title: "Numerical Ability",
      img: "/images/numerical.png",
      description: "Master the art of rapid calculation and mathematical reasoning with our comprehensive Numerical Ability module. This section is designed to sharpen your quantitative skills by covering essential concepts from basic arithmetic to complex probability. You will find detailed practice sets on time-distance problems, financial math like profit and loss, and logical puzzles such as calendars and clocks. Whether you are preparing for competitive exams or technical screenings, these tests provide a simulated environment to improve both your accuracy and speed. Each topic is curated to reflect current industry standards, ensuring you are well-equipped to handle any numerical challenge that comes your way.",
      topics: "problem on trains, calendar, profit/loss, boats & streams, lcm & hcf, odd man out, alligation or mixture, pipes & cisterns, average, Probability"
    },
    {
      slug: "verbal-reasoning",
      title: "Verbal Reasoning",
      img: "/images/verbal.png",
      description: "Our Verbal Reasoning suite focuses on enhancing your cognitive ability to understand, analyze, and interpret complex information. This module challenges your logical thinking through a variety of exercises including blood relations, seating arrangements, and direction sensing. By practicing these tests, you will develop a structured approach to solving problems that require high-level pattern recognition and deductive reasoning. The curriculum is built to help you identify hidden connections between pieces of information and arrive at logical conclusions quickly. It is an essential resource for anyone looking to excel in aptitude assessments that prioritize mental agility and logical consistency.",
      topics: "logical sequence of words, blood relation, seating arrangement, data sufficiency, direction sense, analogy"
    },
    {
      slug: "english-proficiency",
      title: "English Proficiency",
      img: "/images/english.png",
      description: "Effective communication is a cornerstone of professional success, and our English Proficiency module is designed to refine your linguistic skills. This section covers a wide spectrum of grammar, vocabulary, and reading comprehension to ensure you can express ideas clearly and correctly. You will engage with exercises focused on error spotting, sentence formation, and synonyms to build a robust command over the language. Our tests also include comprehension passages that simulate real-world reading scenarios, helping you improve your speed and retention. Whether it's perfecting your spelling or mastering complex sentence structures, this module provides the tools necessary to communicate with confidence in any corporate or academic setting.",
      topics: "error spotting, synonyms & antonyms, completing sentences, comprehension, spellings, sentence formation"
    },
    {
      slug: "technical-questions",
      title: "Technical Questions",
      img: "/images/technical.png",
      description: "Dive deep into the core concepts of Computer Science with our Technical Questions module, tailored for aspiring engineers and developers. This section provides a thorough review of fundamental subjects including Database Management Systems, Operating Systems, and Networking. You will encounter questions that test your understanding of Software Development Life Cycles (SDLC) and data structures, which are critical for technical interviews. Our content is updated regularly to reflect the evolving landscape of technology and cybersecurity, ensuring you stay ahead of the curve. This resource serves as a bridge between theoretical academic knowledge and the practical technical proficiency required by top-tier tech companies during their hiring process.",
      topics: "software testing, sdlc, data structure, networking, dbms, security"
    },
    {
      slug: "programming",
      title: "Programming",
      img: "/images/programming.png",
      description: "Build a strong foundation in modern coding with our Programming module, covering the most in-demand languages and frameworks in the industry today. From the basics of HTML and CSS to advanced concepts in React and Node.js, this section offers a comprehensive path for full-stack development. You can test your logic in Python and Java or dive into the intricacies of JavaScript and Express. Each sub-topic is designed to challenge your syntax knowledge and problem-solving capabilities through varied coding scenarios. Whether you are a beginner looking to write your first script or an experienced coder refining your skills, these tests provide the rigorous practice needed to excel in technical assessments and real-world projects.",
      topics: "html, css, js, python, java, react, next js/node js, express"
    },
    {
      slug: "interview",
      title: "Interview",
      img: "/images/interview.png",
      description: "Navigating an interview can be daunting, but our Interview Preparation module is here to guide you through every step of the journey. We provide specialized resources tailored for both fresh graduates entering the workforce and experienced professionals looking for their next big career move. This section focuses on a mix of behavioral questions, HR strategies, and technical discussion tips to help you present your best self. You will learn how to articulate your experiences, handle high-pressure questions, and demonstrate your value to potential employers. By reviewing our curated guides, you can transform your anxiety into confidence and approach your next interview with a clear, strategic mindset for success.",
      topics: "for beginners, for experienced"
    }
  ];

  for (const page of testPages) {
    await prisma.testPage.upsert({
      where: { slug: page.slug },
      update: { description: page.description },
      create: page,
    });
  }

  console.log("Database seeded with long descriptions successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

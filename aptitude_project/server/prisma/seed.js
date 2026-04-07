const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const recruitmentNews = [
    {
      postDate: new Date('2026-04-07T10:00:00Z'),
      title: "Digital India Corporation State Coordinator Recruitment",
      desc: "Digital India Corporation (DIC) is hiring for the Poshan Tracker project to support national nutrition monitoring. This contract-based role involves coordinating state-level digital health initiatives and ensuring project security. Ideal for candidates with a mix of administrative and technical backgrounds looking to contribute to social welfare.",
      eligibility: "Graduate or IT background with relevant experience.",
      salary: "Competitive Project-Based Remuneration",
      impDates: "Apply online; Notification released April 2026.",
      howToApply: "Visit the official Digital India Corporation website to apply online."
    },
    {
      postDate: new Date('2026-04-06T14:30:00Z'),
      title: "MPKV Rahuri Agricultural Research Vacancies",
      desc: "Mahatma Phule Krishi Vidyapeeth (MPKV) is recruiting for multiple roles like Research Associates and Young Professionals. These positions are part of a major Maharashtra government project focused on irrigation, soil science, and remote sensing. Selected candidates will work on cutting-edge agricultural technology and water management systems.",
      eligibility: "Doctorate or Masters in Agriculture / Agri-Engineering.",
      salary: "₹18,000 – ₹67,000 + HRA (depending on post)",
      impDates: "Last Date: 15 April 2026",
      howToApply: "Submit applications to the Mahatma Phule Krishi Vidyapeeth, Rahuri office."
    },
    {
      postDate: new Date('2026-04-06T09:00:00Z'),
      title: "National Academy of Defence Production Consultant",
      desc: "The National Academy of Defence Production under the Ministry of Defence is seeking consultants for digital content creation. This contractual role is critical for developing modern training materials for defense personnel. Candidates should have a strong portfolio in digital media and content strategy to support national security training.",
      eligibility: "Degree in Digital Media / Communications + relevant experience.",
      salary: "Consolidated monthly remuneration as per MoD norms.",
      impDates: "Application Deadline: 25 April 2026",
      howToApply: "Apply through the official NADP Ministry of Defence recruitment link."
    },
    {
      postDate: new Date('2026-04-05T11:15:00Z'),
      title: "Patna High Court District Judge Recruitment",
      desc: "The High Court of Judicature at Patna has opened applications for the position of District Judge (Entry Level). This prestigious judicial role requires extensive legal experience and a clean professional record in the Indian legal system. Selection will be through a multi-stage competitive examination followed by an interview.",
      eligibility: "Law Graduate with minimum 7 years of practice as an Advocate.",
      salary: "₹1.44 Lakh – ₹1.94 Lakh per month",
      impDates: "Apply by 04 May 2026",
      howToApply: "Visit the official Patna High Court website to submit your application."
    },
    {
      postDate: new Date('2026-04-04T16:45:00Z'),
      title: "AIIMS Jammu Senior Resident Recruitment",
      desc: "AIIMS Jammu is inviting applications for 78 Senior Resident positions across various medical specialties. This recruitment is part of the institute's rapid expansion to provide tertiary healthcare services in the region. Candidates will be selected based on their academic merit and performance in a walk-in interview session.",
      eligibility: "Postgraduate medical degree (MD/MS/DNB) in concerned specialty.",
      salary: "Pay Level 11 (Approx. ₹67,700 + Allowances)",
      impDates: "Interview Dates: Check official schedule for April 2026.",
      howToApply: "Register online and attend the walk-in interview at AIIMS Jammu."
    },
    {
      postDate: new Date('2026-04-03T08:20:00Z'),
      title: "HNBGU Agniveer Diploma Programme Notification",
      desc: "Hemvati Nandan Bahuguna Garhwal University has issued a notification for the Agniveer Diploma Programme (Batch AV-08). This initiative integrates academic learning with military training for young recruits entering the defense services. It is a unique opportunity to gain professional qualifications while serving in the Indian Army.",
      eligibility: "Enrolled Agniveers of the Indian Army (Batch AV-08).",
      salary: "Standard Agniveer Stipend + Educational Benefits",
      impDates: "Registration Open: 03 April 2026",
      howToApply: "Candidates can register through the HNBGU student portal or DSW office."
    },
    {
      postDate: new Date('2026-04-02T13:10:00Z'),
      title: "SCB Medical College VRDL Recruitment",
      desc: "SCB Medical College is conducting walk-in interviews for Scientists and Lab Technicians under the VRDL project. These contractual roles are vital for ongoing viral research and diagnostic operations in Odisha. The project offers a professional environment for medical researchers to gain experience in high-impact virology work.",
      eligibility: "PhD / MSc / Diploma in Medical Lab Technology (DMLT).",
      salary: "Up to ₹67,000 per month (plus HRA for Scientists)",
      impDates: "Walk-in Interview: April 2026 (Check dates)",
      howToApply: "Appear for the walk-in interview with required documents at SCB Medical College."
    },
    {
      postDate: new Date('2026-04-01T10:00:00Z'),
      title: "SIDBI Specialist Officer Recruitment 2026",
      desc: "The Small Industries Development Bank of India (SIDBI) is hiring Specialist Officers for various technical and financial advisory roles. This recruitment aims to onboard experts to manage large-scale credit and infrastructure projects for MSMEs. It is a high-level banking role offering significant industry exposure and a premium salary package.",
      eligibility: "Postgraduate / Professional degree with relevant domain experience.",
      salary: "CTC Up to ₹55 Lakh per annum",
      impDates: "Ongoing registration in April 2026.",
      howToApply: "Submit online application through the SIDBI official careers portal."
    },
    {
      postDate: new Date('2026-03-31T09:30:00Z'),
      title: "INMAS DRDO Apprentice Engagement",
      desc: "The Institute of Nuclear Medicine and Allied Sciences (INMAS), under DRDO, is engaging 41 Graduate and Technician Apprentices. This program provides hands-on training in advanced defense research and medical science laboratory environments. No written exam is required as selection is based on academic merit scores.",
      eligibility: "B.E / B.Tech / Diploma in relevant engineering or science branches.",
      salary: "₹12,300 monthly stipend",
      impDates: "Apply by 30 April 2026",
      howToApply: "Register on the NATS portal and apply via the DRDO website."
    },
    {
      postDate: new Date('2026-03-30T15:00:00Z'),
      title: "Ordnance Factory Chanda DBW Recruitment",
      desc: "Ordnance Factory Chanda is seeking 400 Danger Building Workers (DBW) on a fixed tenure of four years. This role involves the high-stakes manufacturing and handling of military ammunition and explosives. It is a critical support position for India's defense production and offers a merit-based entry path without an exam.",
      eligibility: "ITI / NAC in relevant trade (AOCP apprentices preferred).",
      salary: "₹19,000 + DA (Approx. ₹22,000 in-hand)",
      impDates: "Last Date: 17 April 2026",
      howToApply: "Submit the offline application form to the General Manager, OF Chanda."
    }
  ];

  for (const news of recruitmentNews) {
    await prisma.news.create({ data: news });
  }
  console.log("Successfully seeded 10 news items with varied post dates.");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });

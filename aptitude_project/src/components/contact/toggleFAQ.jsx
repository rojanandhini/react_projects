import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are these tests timed?",
      answer: "Yes, most tests are timed to simulate real assessment conditions. However, 'Practice Mode' allows for untimed sessions."
    },
    {
      question: "What happens if I disconnect during a test?",
      answer: "Our system auto-saves your progress. You can resume exactly where you left off once your connection is restored."
    },
    {
      question: "Can I retake a test I’ve already finished?",
      answer: "Absolutely! You can retake any test as many times as you like to track your improvement over time."
    },
    {
        question: "What exactly does an 'Aptitude Test' measure?",
        answer: "Unlike a knowledge-based exam, these tests evaluate your natural cognitive abilities, such as logical thinking, pattern recognition, and numerical agility."
    },
    {
        question: "What is the difference between Numerical and Verbal reasoning?",
        answer: "Numerical tests focus on data interpretation, ratios, and percentages, while Verbal tests assess your ability to comprehend written passages and draw logical conclusions from text."
    },
    {
        question:" Why are these tests so difficult? ",
        answer:"They are designed to be challenging to help differentiate candidates. Many people don't finish all the questions; the goal is to balance speed with high accuracy."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto py-10 space-y-4">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      
      {faqs.map((faq, index) => (
        <div key={index} className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
          >
            <span className="font-semibold text-slate-800">{faq.question}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={36}
                height={36}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide lucide-chevron-down-icon lucide-chevron-down w-5 h-5 text-slate-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                >
                <path d="m6 9 6 6 6-6" />
                </svg>
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
          >
            <div className="p-5 pt-0 text-slate-600 border-t border-slate-100">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

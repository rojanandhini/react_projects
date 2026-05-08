import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const PrepTipsPage = () => {
  const tips = [
    {
      title: "Know Your Test Provider",
      content: "Identify if your test is from providers like SHL, Korn Ferry, or Kenexa, as each has a unique style and question bank."
    },
    {
      title: "Practice Under Time Pressure",
      content: "Aptitude tests are as much about speed as accuracy. Use a timer during practice to simulate the real exam environment."
    },
    {
      title: "Focus on Weak Areas",
      content: "Don't just practice what you're good at. If numerical reasoning is tough, spend 70% of your time there."
    },
    {
      title: "Read Every Word",
      content: "Many candidates fail by skimming. Verbal and logical reasoning often hinge on single words like 'always,' 'never,' or 'sometimes.'"
    },
    {
      title: "Master the Fundamentals",
      content: "Brush up on basic math (percentages, ratios, fractions) and logical patterns (number series, coding-decoding)."
    }
  ];
 const [activeCategory, setActiveCategory] = useState('Numerical');

  const testTypes = {
    Numerical: 
      {slug:"numerical-ability",
        content:["Master the 'percentage change' formula—it appears in almost every data interpretation question.",
      "Get comfortable with graphs and tables; always read the axis labels and units before looking at the numbers.",
      "Practice mental math for simple additions and divisions to save your calculator time for complex steps.",
      "Check if the test has negative marking. If not, never leave a numerical question blank."]
      }
      
    ,
    Verbal:      { slug:"verbal-reasoning",
        content:["Base your answers *only* on the text provided. Do not use your outside knowledge of the topic.",
      "Pay attention to 'absolute' words like 'always,' 'never,' or 'all' vs. 'sometimes' or 'some.'",
      "Read the question first, then skim the passage for the specific keywords mentioned.",
      "For 'True/False/Cannot Tell' questions, 'Cannot Tell' is often the answer if a statement is plausible but not explicitly proven by the text."]}
    ,
    English: 
      {slug:"english-proficiency",
        content:["Separate complex diagrams into individual elements (e.g., just watch the 'arrow' first, then just the 'shading').",
      "Look for patterns in rotation (90°, 45°), movement (clockwise/anti-clockwise), and frequency of shapes.",
      "Try to identify the 'rule' for the sequence and test it against the middle shapes before choosing an answer.",
      "Use the process of elimination. Crossing out obviously wrong patterns is faster than finding the right one from scratch."]}
    ,
    Technical: 
      {slug:"technical-questions",
        content:["Look for symmetry and 'mirroring' patterns across the horizontal or vertical axes.",
      "Count the number of sides, lines, or dots. Often the pattern is a simple mathematical progression (e.g., +1 side each time).",
      "Notice changes in color or shading that alternate between odd and even positions in the sequence.",
      "Mental rotation is key—try to 'flip' the image in your mind to see if it matches the next step."]}
    
  };const [slug,setSlug]=useState(testTypes['Numerical'].slug);
  return (
    <div>
    <div className='w-[800px] mx-auto px-10 py-5' >
      <header className='text-center mb-10' >
        <h1 className='text-[#2c3e50]'>Master Your Aptitude Test</h1>
        <p className='text-xl text-[#7f8c8d]'>Essential strategies to boost your score and confidence.</p>
      </header>

      <section>
        {tips.map((tip, index) => (
          <div key={index} className='bg-[#f9f9f9] my-3 p-5 rounded-lg border-l-[5px] border-solid border-l-[#3498db] ' >
            <h3 className='text-[#2980b9]' >{index + 1}. {tip.title}</h3>
            <p className='text-[#34495e] leading-6' >{tip.content}</p>
          </div>
        ))}
      </section>

      <footer className='mt-12 text-center p-5 border-t-2 border-solid border-t-[#eee]' >
        <button className='px-6 py-3 text-base bg-[#3498db] text-white border-none rounded-[5px] cursor-pointer'>
          Start Practice Test
        </button>
      </footer>
    </div>
     <div className='max-w-[900px] mx-auto px-5 py-10 font-sans'>
      <header className='text-center mb-7'>
        <h1 className='text-[#2c3e50] text-4xl' >Pro Preparation Tips</h1>
        <p className='text-[#7f8c8d]'>Select a test category below to see expert strategies.</p>
      </header>

      {/* Category Navigation */}
      <div className='flex justify-center gap-3 mb-8' >
        {Object.keys(testTypes).map((type) => (
          <button
            key={type}
            onClick={() => {setActiveCategory(type);
              setSlug(testTypes[type].slug);
            }}
            className={`
    px-5 py-[10px] rounded-[25px] border-none font-semibold cursor-pointer transition-all duration-300
    ${activeCategory === type 
      ? 'bg-[#3498db] text-white' 
      : 'bg-[#ecf0f1] text-[#2c3e50]'}
  `}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Tip Content Area */}
      <div className='bg-white border border-[#e1e8ed] rounded-[12px] p-[30px] shadow-[0_4px_6px_rgba(0,0,0,0.05)]'>
        <h2  className='text-[#3498db] border-b-2 border-b-[#f1f1f1] pb-[10px] mb-5'>
          {activeCategory} Tips
        </h2>
        <ul >
          {testTypes[activeCategory].content.map((tip, i) => (
            <li key={i} className='mb-4 flex items-start'>
              <span className='text-[#27ae60] mr-3 font-bold' >✓</span>
              <span className='text-[#34495e] leading-6' >{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Generic CTA Section */}
      <div className='text-center mt-10'>
        <p className='italic text-[#95a5a6]' >"The best preparation is consistent practice under timed conditions."</p>
        <button className='mt-5 px-[30px] py-[15px] bg-[#2ecc71] text-white border-none rounded-[5px] text-[1.1rem] cursor-pointer'>
          <Link to={`/quiz/entry/${slug}`}>Try a Free {activeCategory} Mock Test</Link>
        </button>
      </div>
    </div>
    </div>
  );
};

export default PrepTipsPage;

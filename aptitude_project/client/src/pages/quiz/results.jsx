import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const Results = () => {
  const location = useLocation();
  const { report } = location.state || {};
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState('all'); // 'all', 'correct', 'incorrect', 'unanswered'
  
  const userName = localStorage.getItem("userName") || "Guest";

  if (!report || !report.questions) return <div className="text-center mt-10 text-xl font-bold">No report found.</div>;

  // Filter Logic
  const filteredQuestions = report.questions.filter((q) => {
    const userAnswerId = report.answers[q.id];
    const correctOptionId = q.options.find(o => o.isCorrect)?.id;
    
    if (filter === 'correct') return userAnswerId === correctOptionId;
    if (filter === 'incorrect') return userAnswerId && userAnswerId !== correctOptionId;
    if (filter === 'unanswered') return !userAnswerId;
    return true; // 'all'
  });

  return (
    <div className='w-[90%] mx-auto my-10 font-sans'>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className='text-3xl font-bold text-gray-800'>Results for {userName}</h2>
        <Link 
          to="/userLogin/api/results/stats" 
          className="text-blue-600 hover:text-blue-800 font-semibold flex items-center transition"
        >
          ← Back to Dashboard
        </Link>
      </div>
      
      {/* Summary Score Card */}
      <div className="bg-blue-50 p-6 rounded-2xl mb-8 shadow-sm border border-blue-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <p className='text-2xl text-blue-900'>
            Final Score: <span className='font-black'>{report.correctAnsCount} / 40</span>
          </p>
          <button 
            onClick={() => setVisible(!visible)} 
            className='mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition'
          >
            {visible ? 'Hide' : 'Show'} Detailed Analytics
          </button>
        </div>
        
        {visible && (
          <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-6 rounded-xl border border-blue-200 shadow-inner'>
            <div className="flex flex-col items-center">
               <span className="text-gray-400 uppercase text-xs font-bold">Correct</span>
               <p className="text-2xl text-green-600 font-bold">{report.correctAnsCount}</p>
            </div>
            <div className="flex flex-col items-center border-x">
               <span className="text-gray-400 uppercase text-xs font-bold">Incorrect</span>
               <p className="text-2xl text-red-600 font-bold">{report.wrongAnsCount}</p>
            </div>
            <div className="flex flex-col items-center">
               <span className="text-gray-400 uppercase text-xs font-bold">Unanswered</span>
               <p className="text-2xl text-gray-600 font-bold">{report.unansweredCount}</p>
            </div>
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-100 pb-5">
        {['all', 'correct', 'incorrect', 'unanswered'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-6 py-2 rounded-full capitalize font-bold text-sm transition-all ${
              filter === type 
              ? 'bg-blue-600 text-white shadow-lg scale-105' 
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {type} {filter === type && `(${filteredQuestions.length})`}
          </button>
        ))}
      </div>

      {/* Question List Section */}
      <div className="space-y-8">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400">
            No questions found for this filter.
          </div>
        ) : (
          filteredQuestions.map((q) => {
            // FIND ORIGINAL INDEX: This keeps numbering consistent (3, 12, 18, etc)
            const originalIndex = report.questions.findIndex(origQ => origQ.id === q.id);
            
            const userAnswerId = report.answers[q.id];
            const correctOption = q.options.find(o => o.isCorrect);
            const isCorrect = userAnswerId === correctOption?.id;
            const isUnanswered = !userAnswerId;

            // Background Logic
            let cardBg = "bg-white";
            let borderCol = "border-gray-200";
            if (isUnanswered) { cardBg = "bg-gray-50"; borderCol = "border-gray-300"; }
            else if (isCorrect) { cardBg = "bg-green-50"; borderCol = "border-green-400"; }
            else { cardBg = "bg-red-50"; borderCol = "border-red-400"; }

            return (
              <div key={q.id} className={`p-8 rounded-2xl border-2 transition-all ${cardBg} ${borderCol}`}>
                <div className="flex justify-between items-start mb-6">
                  <p className="font-black text-lg text-gray-800">Question {originalIndex + 1}:</p>
                  {isUnanswered && <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded text-xs font-bold uppercase">Skipped</span>}
                  {isCorrect && !isUnanswered && <span className="bg-green-600 text-white px-3 py-1 rounded text-xs font-bold uppercase">Correct</span>}
                  {!isCorrect && !isUnanswered && <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold uppercase">Incorrect</span>}
                </div>

                <div className="text-lg leading-relaxed text-gray-800 mb-8 font-medium">
                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                    {q.questionText}
                  </ReactMarkdown>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {q.options.map(opt => {
                    const isUserPick = userAnswerId === opt.id;
                    const isRightOpt = opt.isCorrect;

                    let optStyle = "border-gray-200 bg-white text-gray-700";
                    if (isUserPick && isRightOpt) optStyle = "border-green-600 bg-green-200 text-green-900 font-bold ring-2 ring-green-100";
                    else if (isUserPick && !isRightOpt) optStyle = "border-red-600 bg-red-200 text-red-900 font-bold ring-2 ring-red-100";
                    else if (isRightOpt) optStyle = "border-green-400 bg-green-50 text-green-800 font-semibold";

                    return (
                      <div key={opt.id} className={`p-4 border-2 rounded-xl transition-all ${optStyle} relative`}>
                         <div className="flex items-center gap-3">
                           <span className="w-6 h-6 rounded-full bg-white/50 flex items-center justify-center text-xs border border-black/10">
                              {isUserPick ? '✓' : ''}
                           </span>
                           <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{opt.text}</ReactMarkdown>
                         </div>
                      </div>
                    );
                  })}
                </div>

                {/* Explanation logic - Only if explanation exists */}
                {q.explanation && (
                  <div className={`mt-8 p-5 rounded-xl border-2 ${isCorrect ? 'bg-white border-green-200' : 'bg-white border-red-200'}`}>
                     <p className={`font-black text-sm uppercase mb-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>Explanation</p>
                     <div className="text-gray-600 italic">
                        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{q.explanation}</ReactMarkdown>
                     </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Color Code Legend Footer */}
      <div className="mt-16 p-8 border-2 border-dashed border-gray-200 bg-gray-50 rounded-3xl">
        <h4 className="font-black text-gray-800 mb-6 uppercase tracking-wider text-sm">Review Key</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-xs font-bold uppercase">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-50 border-2 border-green-400 rounded"></div> Correct Card
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-red-50 border-2 border-red-400 rounded"></div> Incorrect Card
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-50 border-2 border-gray-300 rounded"></div> Unanswered
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-200 border-2 border-green-600 rounded"></div> Selected Right
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-red-200 border-2 border-red-600 rounded"></div> Selected Wrong
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

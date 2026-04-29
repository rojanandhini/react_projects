import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const paperId = location.state?.paperId;
  
  const [status, setStatus] = useState(new Array(40).fill('unvisited'));
  const [userAnswers, setUserAnswers] = useState({});
  const [shuffledIds, setShuffledIds] = useState([]);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(null);

  

  const fetchQuestionById = async (qId) => {
    // Safety check: if qId is just a number, it will fail. It must be the ID string.
    const res = await fetch(`/api/questions/get-one/${qId}`);
    const data = await res.json();
    setQuestion(data);
  };

 // When a user selects a radio button
const handleOptionSelect = (qId, optId) => {
  setUserAnswers(prev => ({ ...prev, [qId]: optId }));
  
  // Immediately update status to 'answered' (Green)
  const newStatus = [...status];
  newStatus[index] = 'answered'; 
  setStatus(newStatus);
};

const updateStatus = (idx) => {
  const newStatus = [...status];
  // If we move to a question and it hasn't been answered yet, mark as 'visited' (Red)
  if (newStatus[idx] !== 'answered') {
    newStatus[idx] = 'visited';
  }
  setStatus(newStatus);
};


  const handleNext = () => {
    if (index < shuffledIds.length - 1) {
      const nextIndex = index + 1;
      setIndex(nextIndex);
      fetchQuestionById(shuffledIds[nextIndex]); // FIX: use shuffledIds[nextIndex]
      updateStatus(nextIndex);
    } else {
      navigate('/results');
    }
  };
useEffect(() => {
    if (paperId) {
      fetch(`/api/questions/setup/${paperId}`)
        .then(res => res.json())
        .then(ids => {
          setShuffledIds(ids);
          if (ids.length > 0) {
            fetchQuestionById(ids[0]); // Initial load
            updateStatus(0);
          }
        });
    }
  }, [paperId]);
  const handlePrevious = () => {
    if (index > 0) {
      const prevIndex = index - 1;
      setIndex(prevIndex);
      fetchQuestionById(shuffledIds[prevIndex]); // FIX: use shuffledIds[prevIndex]
    }
  };

  const jumpToQuestion = (i) => {
    setIndex(i);
    fetchQuestionById(shuffledIds[i]); // FIX: use shuffledIds[i]
    updateStatus(i);
  };

  if (!question || shuffledIds.length === 0) return <div>Loading...</div>;

  return (
    <div className='w-[95%] mx-auto my-5 grid grid-cols-12 gap-4'>
      <div className='col-span-9 border-r pr-5'>
        <div className="flex justify-between items-center mb-5">
          <h2 className='text-2xl font-bold text-blue-600'>Question {index + 1} of 40</h2>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm border min-h-[400px] flex flex-col justify-between">
          <div>
            <p className='text-lg mb-8 font-medium'>{question.questionText}</p>
            <div className="space-y-4">
              {question.options?.map(option => (
  <div key={option.id} className="flex items-center p-3 border rounded hover:bg-gray-50 transition">
    <input 
      type="radio" 
      name="quiz-opt" 
      id={option.id} 
      className="w-4 h-4 mr-3"
      checked={userAnswers[question.id] === option.id} // Keep selection if user goes back
      onChange={() => handleOptionSelect(question.id, option.id)} 
    />
    <label htmlFor={option.id} className="w-full cursor-pointer">{option.text}</label>
  </div>
))}

            </div>
          </div>

          <div className="flex justify-between mt-10">
            <button 
              onClick={handlePrevious} // FIX: Used the named function
              disabled={index === 0}
              className={`px-6 py-2 rounded-full border ${index === 0 ? 'text-gray-300' : 'text-blue-500 border-blue-500'}`}
            >
              Previous
            </button>

            <button 
              onClick={handleNext}
              className={`px-8 py-2 rounded-full text-white font-bold transition ${index === 39 ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
              {index === 39 ? 'Submit Exam' : 'Next Question'}
            </button>
          </div>
        </div>
      </div>

      <div className='col-span-3 bg-gray-50 p-4 rounded-lg border h-fit'>
        <h3 className='font-bold mb-4 border-b pb-2'>Question Panel</h3>
        <div className='grid grid-cols-5 gap-2'>
         {status.map((s, i) => (
  <button
    key={i}
    onClick={() => jumpToQuestion(i)}
    className={`w-10 h-10 rounded text-sm font-bold flex items-center justify-center border transition
      ${index === i ? 'border-blue-600 border-2' : 'border-transparent'}
      ${s === 'unvisited' ? 'bg-gray-200 text-gray-500' : ''}
      ${s === 'visited' ? 'bg-red-500 text-white' : ''}
      ${s === 'answered' ? 'bg-green-500 text-white' : ''}
    `}
  >
    {i + 1}
  </button>
))}

        </div>
      </div>
      <div className='mt-6 text-xs space-y-2 flex gap-3 text-nowrap'>
    <div className='flex items-center'><div className='w-3 h-3 bg-gray-200 mr-2'></div> Unvisited</div>
    <div className='flex items-center'><div className='w-3 h-3 bg-red-500 mr-2'></div> Visited (Not Answered)</div>
    <div className='flex items-center'><div className='w-3 h-3 bg-green-500 mr-2'></div> Answered</div>
</div>

    </div>
  );
};

export default Quiz;

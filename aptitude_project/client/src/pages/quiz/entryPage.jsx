import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EntryPage = () => {
    const { slug } = useParams();
    const [testInfo, setTestInfo] = useState(null);
    const [error, setError] = useState(false); // Added error state
    const navigate = useNavigate();
    const userName = localStorage.getItem("userName") || "Guest";
    useEffect(() => {
        fetch(`/api/questions/details/${slug}`) // Ensure full URL if needed
            .then(res => {
                if (!res.ok) throw new Error("Not found");
                return res.json();
            })
            .then(data => setTestInfo(data))
            .catch(() => setError(true));
    }, [slug]);

    const handleStart = () => {
        // Accessing papers[0] because Prisma 'include' returns an array
        const paperId = testInfo?.testPaperId;
        
        if (paperId) {
            navigate(`/quiz/${slug}`, { state: { paperId: paperId } });
        } else {
            alert("No paper found for this category.");
        }
    };

    if (error) return <div className="text-center my-10">Test not found. Please check the URL.</div>;
    if (!testInfo) return <div className="text-center my-10">Loading instructions...</div>;

    return (
        <div className='w-[75%] mx-auto my-5 flex flex-col items-center'>
            <h2 className='text-3xl text-blue-500 my-2 '>Hello<span className="font-semibold ml-3 mr-2 text-red-500">{userName}</span>!</h2>
            <div className="border rounded-lg px-5 py-5 bg-gray-50">
                <h4 className="font-bold mb-3">Please read the instructions carefully:</h4>
                {/* Changed <p> to <div> to allow <ul> nesting */}
                <div className="text-sm leading-relaxed">
                    <ul className='list-disc list-inside px-5 marker:text-green-500 space-y-2'>
                        <li>This test contains {testInfo?.questionsCount || 45} questions</li>
                        <li>Allotted time: {testInfo?.duration || 60} mins</li>
                        <li>The question panel will be shown on the right side.</li>
                        <li>Answered questions will be marked <span className="text-green-600 font-bold">green</span>.</li>
                        <li>Unanswered in <span className="text-red-600 font-bold">red</span>.</li>
                        <li>The timer is in the top right corner.</li>
                        <li>Question will be in English only.</li>
                    </ul>
                </div>
            </div>

            <h4 className='text-green-500 text-3xl text-center py-6 font-serif'>
                All the Best for your {testInfo.title} exam!
            </h4>

            <button 
                onClick={handleStart} 
                className='bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl transition-colors font-bold'
            >
                Start {testInfo.title} Exam
            </button>
        </div>
    );
};

export default EntryPage;

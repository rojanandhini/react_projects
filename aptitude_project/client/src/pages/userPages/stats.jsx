import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Stats = () => {
  const [data, setData] = useState({ stats: null, history: [] });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName") || "Guest";

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`/api/results/stats?userId=${userId}`);
        const result = await response.json();
        if (response.ok) {
          setData(result.data);
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchStats();
  }, [userId]);

  const handleViewResult = (attempt) => {
  navigate('/api/results', { 
    state: { 
      report: {
        correctAnsCount: attempt.correctAnsCount,
        wrongAnsCount: attempt.wrongAnsCount,
        unansweredCount: attempt.unansweredCount,
        answers: attempt.answers, // Matches your BE key 'answers'
        questions: attempt.questions // Added by the Promise.all logic above
      } 
    } 
  });
};

  if (loading) return (
    <div className="flex justify-center items-center h-screen text-blue-500 font-bold">
      Loading Analytics...
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto my-10 px-6 font-sans">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Performance Dashboard</h2>
        <p className="text-gray-500">Welcome back, {userName}. Here is your progress so far.</p>
      </header>

      {/* Top Level Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
          <p className="text-blue-600 font-bold uppercase text-xs tracking-wider mb-1">Total Sets</p>
          <h3 className="text-4xl font-black text-blue-900">{data.history?.length || 0}</h3>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl border border-green-100 shadow-sm">
          <p className="text-green-600 font-bold uppercase text-xs tracking-wider mb-1">Total Correct</p>
          <h3 className="text-4xl font-black text-green-900">{data.stats?.totalCorrect || 0}</h3>
        </div>

        <div className="bg-red-50 p-6 rounded-2xl border border-red-100 shadow-sm">
          <p className="text-red-600 font-bold uppercase text-xs tracking-wider mb-1">Total Incorrect</p>
          <h3 className="text-4xl font-black text-red-900">{data.stats?.totalIncorrect || 0}</h3>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-gray-500 font-bold uppercase text-xs tracking-wider mb-1">Unanswered</p>
          <h3 className="text-4xl font-black text-gray-700">{data.stats?.totalUnanswered || 0}</h3>
        </div>
      </div>

      {/* History List Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Attempt History</h3>
          <span className="text-sm text-gray-400 font-medium">Click a set to view full review</span>
        </div>

        {data.history.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400 italic">No tests attempted yet. Start your first quiz!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {data.history.map((attempt, index) => (
              <div 
                key={attempt.id}
                onClick={() => handleViewResult(attempt)}
                className="group flex flex-col md:flex-row items-center justify-between p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="flex items-center gap-5 mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-black text-lg">
                    {data.history.length - index}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                      Set {data.history.length - index}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {new Date(attempt.submittedAt).toLocaleDateString('en-GB', {
                        day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-10 text-center">
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Score</p>
                    <p className="text-lg font-bold text-blue-600">{attempt.score}/40</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Correct</p>
                    <p className="text-lg font-bold text-green-600">{attempt.correctAnsCount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Incorrect</p>
                    <p className="text-lg font-bold text-red-600">{attempt.wrongAnsCount}</p>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-bold group-hover:bg-blue-600 group-hover:text-white transition-all">
                  Details →
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Stats;

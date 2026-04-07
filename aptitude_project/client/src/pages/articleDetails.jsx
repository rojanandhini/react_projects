import React from 'react'

const ArticleDetails = () => {
  return (
    <div className="min-h-screen bg-[#fcf8eb]">
        <div className='w-[75%] mx-auto py-5 '>
            <h1 className='text-2xl font-bold text-gray-900 py-7 text-center'>Latest Articles</h1>
            <h2 className='text-xl font-semibold text-gray-700'>Aptitude Strategy: Cracking the "Non-Tech" Barrier in SSC JE & RRB JE 2026</h2>
            <p className='text-lg font-medium text-gray-500 py-5'>
                For engineering graduates in India, the month of April 2026 marks a high-stakes transition. While technical knowledge is your foundation, the Aptitude and Reasoning sections are increasingly becoming the "tie-breakers" in major government recruitments like SSC JE and RRB JE.
            </p>
            <div className="w-[90%] mx-auto text-lg font-medium text-gray-500 gap-3">
                <ol className='list-decimal'>
                    <li className='py-3 text-gray-800'>The Current Landscape: April 2026 Updates</li>
                        <ul className='list-inside list-disc py-3'>
                            <li className='py-2'>SSC JE 2026: With the notification expected this month, aspirants must prepare for a 200-mark Paper 1 where 50% of the weightage is purely non-technical (50 marks for General Intelligence & Reasoning and 50 for General Awareness).</li>
                            <li className='py-2'>RRB JE 2026: Following the CBT-1 exams held in February, results are tentatively expected this month. For those who qualify, the focus shifts to CBT-2, which maintains negative marking (1/3rd deduction) for every incorrect answer.</li>
                            <li className='py-2'>PSUs via GATE: General Aptitude continues to hold a 15% weightage in GATE 2026 scores, a critical factor for shortlisting in top-tier PSUs like Engineers India Limited and NIC.</li>
                        </ul>
                    <li className='py-3 text-gray-800'>Why Aptitude is Your Competitive Edge</li>
                        <p className='py-3'>Most candidates focus 80-90% of their time on technical subjects. However, the SSC JE Reasoning section is considered a high-scoring zone where a well-prepared student can score 45+ out of 50 with just 1.5–2 hours of daily practice.</p>
                    <li className='py-3 text-gray-800'>Three Pillars of Your April Study Plan</li>
                        <ul className='list-inside list-disc py-3'>
                            <li className='py-2'>The "Error Notebook" Method: Don't just solve mocks; maintain a dedicated notebook for "silly" calculation errors. In high-pressure exams like the SSC JE, these errors are the leading cause of failed cut-offs.</li>
                            <li className='py-2'>Targeted General Awareness: Instead of trying to master the entire history of India, focus on Static GK (Polity, Geography, Basic Science) and Current Affairs from the last 6-8 months, which carry the most weight in the initial screening rounds.</li>
                            <li className='py-2'>Speed vs. Accuracy: In RRB JE's CBT-1 and CBT-2, the 1/3 negative marking is brutal. Experts recommend the "Three-Round Method": solve 100% certain questions first, move to moderate logic next, and skip doubtful guesses entirely.</li>
                        </ul>
                    <li className='py-3 text-gray-800'>Key Deadlines to Watch</li>
                        <ul className='list-inside list-disc py-3'>
                            <li className='py-2'>UPSSSC JE: Applications for 115 posts close on April 22, 2026.</li>
                            <li className='py-2'>NIC Scientist B: Apply by April 24, 2026 (requires a valid GATE score).</li>
                        </ul>
                </ol>
            </div>
            <p className='text-xl font-semibold text-gray-700'><span className='text-2xl font-semibold text-blue-700'>The Bottom Line: </span>Technical skills get you the job, but Aptitude gets you through the door. Start your daily 2-hour "Non-Tech Power Session" today to stay ahead of the curve this recruitment season.</p>
        </div>
    </div>
  )
}

export default ArticleDetails
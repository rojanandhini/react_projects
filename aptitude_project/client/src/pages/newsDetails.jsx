import React from 'react'

const NewsDetails = () => {
  return (
    <div className="min-h-screen bg-[#fcf8eb]">
        <div className='w-[75%] mx-auto py-5 '>
            <h1 className='text-2xl font-bold text-gray-900 py-7 text-center'>Latest News</h1>
            
            <h2 className='text-xl font-semibold text-gray-700'>NIC Recruitment 2026: 243 Scientist ‘B’ & Scientific Officer Vacancies via GATE </h2>
            <p className='text-lg font-medium text-gray-500 py-5'>
                The National Informatics Centre (NIC), under the Ministry of Electronics & Information Technology, has released a detailed notification for the recruitment of Scientist 'B' (Group-A, Gazetted) and Scientific Officer/Engineer 'SB' positions. This recruitment drive is specifically for candidates with valid GATE 2024, 2025, or 2026 scores. 
                Vacancies & Disciplines: A total of 243 posts are available across Computer Science & IT (168), Electronics & Communication (25), and Data Science & AI (50).
                Selection Process: Shortlisting will be based on GATE scores (2024/2025/2026) in a 1:5 ratio, followed by a Personal Interview. Final selection weightage is 60% GATE score and 40% Interview.
            </p>
            <div className="w-[50%] mx-auto grid grid-cols-[auto_auto_auto] text-lg font-medium text-gray-500 gap-3">
                <span className='text-gray-900'>Eligibility</span> : <p className='pl-5'>B.E./B.Tech, M.Sc, MCA, M.E., or M.Tech in relevant fields. No prior experience is required.</p> 
                <span className='text-gray-900'>Salary</span>: <p className='pl-5'>Competitive Pay Level-10 (₹56,100 – ₹1,77,500) as per the 7th CPC.</p>
                <span className='text-gray-900'>Important Dates</span>: <p className='pl-5'>The online application window is open from March 27, 2026, until April 24, 2026 (5:30 PM).</p>
                <span className='text-gray-900'>How to Apply</span>: <p className='pl-5'>Eligible candidates can apply exclusively through the NIC Recruitment Portal. </p>
            </div>
        </div>
    </div>
  )
}

export default NewsDetails
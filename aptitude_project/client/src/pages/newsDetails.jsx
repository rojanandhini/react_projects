import React from 'react'
import useNewsDetailFetch from '../hooks/useNewsDetailFetch'

const NewsDetails = () => {
    const newsDetail = useNewsDetailFetch();

  return (
    <div className="min-h-screen bg-[#fcf8eb]">
        <div className='w-[75%] mx-auto py-5 '>
            <h1 className='text-2xl font-bold text-gray-900 py-7 text-center'>Latest News</h1>
            <section className='w-full'>
                
                        <div key={newsDetail?.postNo} className="py-5">
                            <h2 className='text-xl font-semibold text-gray-700'> {newsDetail?.title} </h2>
                            <p className='text-lg font-medium text-gray-500 py-5'>
                                    {newsDetail?.desc}
                            </p>
                            <div className="w-[50%] mx-auto grid grid-cols-[auto_auto_auto] text-lg font-medium text-gray-500 gap-3">
                                <span className='text-gray-900'>Eligibility</span> : <p className='pl-5'>{newsDetail?.eligibility}</p> 
                                <span className='text-gray-900'>Salary</span>: <p className='pl-5'>{newsDetail?.salary}</p>
                                <span className='text-gray-900'>Important Dates</span>: <p className='pl-5'>{newsDetail?.impDates}</p>
                                <span className='text-gray-900'>How to Apply</span>: <p className='pl-5'>{newsDetail?.howToApply} </p>
                            </div>
                        </div>
                    
                    
            </section>
        </div>
    </div>
  )
}

export default NewsDetails
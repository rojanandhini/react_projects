import React from 'react'
import { Link } from 'react-router-dom'
import latestArticle from "../assets/latestArticle.jpg"
import latestNew from "../assets/latestNews.avif"
import useLatestNewsFetch from '../hooks/useLatestNewsFetch'

const NewsNarticles = () => {
    // 1. Ensure your hook returns an empty array by default to avoid .map errors
    const latestNews = useLatestNewsFetch();

    return (
        <div className="w-[75%] mx-auto py-10 my-2">
            {/* LATEST NEWS SECTION */}
            <div className="flex flex-col items-center mb-12">
                <h3 className='text-2xl font-semibold text-gray-700 mb-4'>LATEST NEWS</h3>
                <img src={latestNew} alt="latest_news" className='w-[850px] h-[400px] object-cover rounded-lg' />
                
                {/* 2. Added a container for the mapped items */}
                <section className="w-full flex flex-col items-center mt-6">
                    {latestNews && latestNews.length > 0 ? (
                        latestNews.map((item, index) => (
                            // 3. Always add a unique 'key' prop when mapping
                            <div key={item.postNo || index} className='w-[70%] mb-6 border-b pb-4'>
                                <h6 className='text-xl font-semibold text-gray-700'>{item.title}</h6> 
                                <p className="text-gray-600 my-2">
                                    {item.desc}
                                </p>    
                                <Link to={`/api/recentNews/${item?.postNo}`} className='text-blue-500 hover:text-red-500 font-medium'>
                                    Read More ...
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400">Loading latest news...</p>
                    )}
                </section>
            </div>

            {/* LATEST ARTICLE SECTION */}
            <div className="flex flex-col items-center">
                <h3 className='text-2xl font-semibold text-gray-700 mb-4'>LATEST ARTICLE</h3>
                <img src={latestArticle} alt="latest_article" className='w-[850px] h-[400px] object-cover rounded-lg' />
                
                <div className='w-[70%] mt-6'>
                    <h6 className='text-xl font-semibold text-gray-700'>Aptitude Strategy: Cracking the "Non-Tech" Barrier in SSC JE & RRB JE 2026</h6> 
                    <p className="text-gray-600 my-2">
                        For engineering graduates in India, the month of April 2026 marks a high-stakes transition. While technical knowledge is your foundation, the Aptitude and Reasoning sections are increasingly becoming the "tie-breakers" in major government recruitments like SSC JE and RRB JE.
                    </p>    
                    <Link to="/recentArticles" className='text-blue-500 hover:text-red-500 font-medium'>
                        Read More ...
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NewsNarticles

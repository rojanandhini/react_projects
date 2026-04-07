import React from 'react'
import { Link } from 'react-router-dom'
import latestArticle from "../assets/latestArticle.jpg"
import latestNews from "../assets/latestNews.avif"

const NewsNarticles = () => {
  return (
    
        <div className="w-[75%] mx-auto py-10 my-2">
            <div className="flex flex-col items-center">
                <h3 className='text-2xl font-semibold text-gray-700'>LATEST NEWS</h3>
                <img src={latestNews} alt="latest_news" className='w-[850px] h-[400px]' />
                <p className='w-[70%]'>
                    <h4 className='text-xl font-semibold text-gray-700'>NIC Recruitment 2026: 243 Scientist ‘B’ & Scientific Officer Vacancies via GATE</h4> 
                    <p>
                        The National Informatics Centre (NIC), under the Ministry of Electronics & Information Technology, has released a detailed notification for the recruitment of Scientist 'B' (Group-A, Gazetted) and Scientific Officer/Engineer 'SB' positions. This recruitment drive is specifically for candidates with valid GATE 2024, 2025, or 2026 scores. 
                    </p>    
                    <Link to="/recentNews" className='text-blue-500 hover:text-red-500'>Read More ...</Link>
                </p>
            </div>
            <div className="flex flex-col items-center">
                <h3 className='text-2xl font-semibold text-gray-700'>LATEST ARTICLE</h3>
                <img src={latestArticle} alt="latest_news" className='w-[850px] h-[400px]'/>
                <p className='w-[70%]'>
                    <h4 className='text-xl font-semibold text-gray-700'>Aptitude Strategy: Cracking the "Non-Tech" Barrier in SSC JE & RRB JE 2026</h4> 
                    <p>
                        For engineering graduates in India, the month of April 2026 marks a high-stakes transition. While technical knowledge is your foundation, the Aptitude and Reasoning sections are increasingly becoming the "tie-breakers" in major government recruitments like SSC JE and RRB JE.
                    </p>    
                    <Link to="/recentArticles" className='text-blue-500 hover:text-red-500'>Read More ...</Link>
                </p>
            </div>
        </div>
    
  )
}

export default NewsNarticles
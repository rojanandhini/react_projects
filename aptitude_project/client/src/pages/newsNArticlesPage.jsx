import React from 'react'
import { Link } from 'react-router-dom'
import useAllNewsFetch from '../hooks/useAllNewsFetch'

const NewsNArticlesPage = () => {
    const data = useAllNewsFetch();
  return (
    <div>
        <div className="w-full bg-lime-200 h-[200px]">
            <div className="w-[75%] h-full mx-auto flex flex-col items-center justify-center text-3xl font-semibold font-playfair">
                "Don't let the news stop your dreams. 
                <p> We keep you posted so you can keep moving."</p>
            </div>
        </div>
        <div className="w-[75%] mx-auto py-5">
            <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 ">
                               
                { 
                
                    data.map((item, index) => (
                        
                    <div key={item.postNo || index} className="p-4 border rounded-lg shadow-sm">
                        <h2 className="font-bold text-xl">{item.title}</h2>
                        <p className="text-gray-600">{item.desc}</p>
                        <Link 
                            to={`/api/recentNews/${item.postNo}`} 
                            className="text-blue-500 hover:underline"
                        >
                            Read More...
                        </Link>
                    </div>
                    ))
                }
            </div>   
        </div>
    </div>
  )
}

export default NewsNArticlesPage
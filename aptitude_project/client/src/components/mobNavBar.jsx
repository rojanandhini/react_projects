import React from 'react'
import { Link } from 'react-router-dom'
import AptitudeDropdown from './aptitudeDropdown'

const MobNavBar = () => {
  return (
    <div className="w-full bg-slate-200 py-3 block  lg:hidden">
        <div className="w-[75%] mx-auto ">
          <div className="flex justify-between">
              <Link to="/login" className="py-2 px-3 font-medium text-2xl text-orange-500">
                Login
              </Link>
              <Link href="" className="py-2 px-3 font-medium text-2xl text-blue-800">
                Recruiting?
              </Link>
          </div>
          <div className="flex flex-col justify-between text-lg text-amber-900">
            <button className='flex flex-col'>
              <div className="flex items-center">
              Aptitude Test
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-chevron-down-icon lucide-chevron-down pl-2 w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-180`} 
                  >
                  <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                <AptitudeDropdown/>
               
              </button>
            <Link to="/prepTips">Preparation Tips</Link>
            
            <Link to="/newsNArticles">Articles &amp; News</Link>
            <Link to="/employer">Employers</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
    </div>
  )
}

export default MobNavBar
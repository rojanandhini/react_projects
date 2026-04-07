import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import AptitudeDropdown from './aptitudeDropdown';

const NavBar = () => {
 // const [openIndex, setOpenIndex] = useState(false); onClick={() => setOpenIndex(true)}
 
  return (
    <div className="w-full bg-slate-500 py-3 hidden md:block">
        <div className="w-[75%] mx-auto ">
            <div className="flex justify-between text-lg text-white">
            <button className='flex group '>
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
                <div className="pt-5 absolute hidden group-hover:block">
                  <AptitudeDropdown/>
                </div>
              </button>
            <Link to="/prepTips">Preparation Tips</Link>
            
            <a href="">Articles &amp; News</a>
            <Link to="/employer">Employers</Link>
            <Link to="/contact">Contact Us</Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar
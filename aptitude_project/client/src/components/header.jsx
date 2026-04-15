import React from 'react'
import {Link} from 'react-router-dom'
import icon from "../assets/icon.png"
import MobNavBar from './mobNavBar'
const Header = () => {
  return (
   <div className="w-[75%] mx-auto my-2 p-3 flex justify-between">
  <Link to="/">
    <div className="flex">
      <img src={icon} alt="Logo" />
      <h1 className="text-xl lg:text-3xl font-serif font-semibold text-teal-600 md:text-nowrap">Aptitude <span className='text-[#9d45ef]'>Advantage</span></h1>
    </div>
  </Link>
  <div>
    <div className='group'>
      <svg
        className="lg:hidden border border-gray-200 rounded-md transition-transform"
        xmlns="http://www.w3.org/2000/svg"
        height="36px"
        viewBox="0 -960 960 960"
        width="36px"
        fill="#FF8904"
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
      <div className="w-full left-0 pt-5 absolute hidden group-hover:block">
        <MobNavBar/>
      </div>
    </div>
    
    <div className="hidden lg:block">
      <Link to="/api/login">
      <button className="py-2 px-3 rounded-xl bg-orange-400 text-white font-medium text-lg">
        Login
      </button>
      </Link>
      <Link to="/employer" className="py-2 px-3 font-medium text-lg">
        Recruiting?
      </Link>
    </div>
  </div>
</div>

  )
}

export default Header;
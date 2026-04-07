import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="w-full bg-slate-500 py-3 hidden md:block">
        <div className="w-[75%] mx-auto ">
            <div className="flex justify-between text-lg text-white">
            <a href="">Aptitude Test</a>
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
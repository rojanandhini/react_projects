import React from 'react'
import { Link } from 'react-router-dom'

const EmpNavBar = () => {
  return (
   <div className="w-full bg-slate-500 py-3 hidden md:block">
           <div className="w-[75%] mx-auto ">
               <div className="flex justify-between text-lg text-white">
               <a href="">Selection Tests</a>
               <Link >Get Started</Link>
               <a href="">Our Services</a>
               <a href="">Prices</a>
               <Link to="/contact">Contact Us</Link>
               </div>
           </div>
       </div>
  )
}

export default EmpNavBar
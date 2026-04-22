import React from 'react'
import { Link } from 'react-router-dom'

const MobNavBar = () => {
  return (
    <div className="w-full bg-slate-200 py-3  lg:hidden">
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
            <a href="">Aptitude Test</a>
            <Link to="/prepTips">Preparation Tips</Link>
            <a href="">Articles &amp; News</a>
            <a href="">Employers</a>
            <a href="">Contact Us</a>
          </div>
        </div>
    </div>
  )
}

export default MobNavBar
import React from 'react'
import { Link } from 'react-router-dom'
import her_bg from "../assets/her_bg.avif"
import join from "../assets/join.avif"
const Hero = () => {
  return (
  <div className="w-full hidden md:block">
    <div className="{h-[80vh] bg-cover grid grid-cols-2 items-start} " 
      style={{ backgroundImage: `url(${her_bg})`}}> 
      <div className="flex flex-col items-center">
        <img src={join} />
        <span className='text-5xl font-semibold text-blue-500 px-5'>Get Hired Tomorrrow.</span> 
        <div className='text-3xl font-normal '><span className='text-amber-500'>Get Ready.</span> <span className='text-green-500'>Go.</span> <span className='text-fuchsia-500'>Dreams in reach</span></div>
      </div>
      <div className="flex justify-end items-center min-h-full mr-20">
        <div className="rounded-lg w-[200px] h-[100px] flex flex-col items-center backdrop-blur-[5px]">
          <h2 className='text-lg font-medium text-lime-500'>Your Dreams in Reach</h2>
          <Link to="/register">
            <button className='text-2xl font-medium rounded-xl bg-orange-500 text-white px-3 py-1'>Register Now!</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
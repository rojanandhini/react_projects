import React from 'react'
import recruitment from "../../assets/recruitment.avif"
import assess from "../../assets/assess.jpg"
import cognitive from "../../assets/cognitive.jpeg"
import coding from "../../assets/coding.png"
import english from "../../assets/english.jpg"

const EmpHero = () => {
  return (
    <div className="">

        {/* hero part */}
        <div className='w-full h-[80vh] bg-no-repeat bg-cover ' style={{ backgroundImage: `url(${recruitment})`}}>
            <div className="h-full w-[40%] flex flex-col items-start justify-center px-10 gap-5">
                <h2 className='text-5xl text-green-900 font-bold'>Employee Selection Services</h2>
                <p className='text-2xl text-violet-600 font-semibold'>Employers are the powerhouse of our company. Let us help you in finding the best minds that suits your need.</p>
                <button className='rounded-lg bg-yellow-400 px-3 py-2 font-semibold'>Get Started</button>  
            </div>
        </div>

        {/* Learn more about assessment section */}
        <div className="w-full bg-[#faf9f7] py-3">
            <div className="w-[75%] mx-auto grid grid-cols-2 py-5 gap-10">
                <img src={assess} alt="Assessment_img" />
                <div className="flex flex-col justify-center">
                    <h2 className='text-3xl font-bold text-slate-600'>Pre employment Assessments</h2>
                    <p className='text-xl text-slate-400 py-3'>
                        Our online pre-employment testing platform provides a comprehensive suite of ten unique assessment tests.

                        To explore our services in detail and learn about the specific tests we offer, please click ‘Learn More’ below.
                    </p> 
                    <button className='rounded-lg bg-blue-500 px-3 py-2 self-center hover:bg-yellow-500'>Learn More</button>
                </div>
            </div>
        </div>

        {/* popular assessments section */}
        <div className="w-full flex flex-col items-center  py-3">
            <h2 className='text-3xl font-semibold text-blue-400'>Our Popular Assessments</h2>
            <div className="w-[75%] mx-auto grid grid-cols-3 py-8 gap-5">
                <div className="rounded-xl shadow-md">
                    <img src={english} alt="" className='rounded-t-xl h-[200px] w-full' />
                    <h3 className='text-center text-xl text-blue-900 font-semibold py-2 '>English Proficiency Test</h3>
                    <div className='w-[90%] mx-auto py-3 flex justify-between'>
                        <p>No. of Questions:60</p>
                        <p>Time Limit: 50mins</p>
                    </div>
                </div>
                <div className="rounded-xl shadow-md">
                    <img src={cognitive} alt="" className='rounded-t-xl h-[200px] w-full' />
                    <h3 className='text-center text-xl text-blue-900 font-semibold py-2'>Cognitive Ability Test</h3>
                    <div className='w-[90%] mx-auto py-3 flex justify-between'>
                        <p>No. of Questions:60</p>
                        <p>Time Limit: 60mins</p>
                    </div>
                </div>
                <div className="rounded-xl shadow-md">
                    <img src={coding} alt="" className='rounded-t-xl h-[200px]' />
                    <h3 className='text-center text-xl text-blue-900 font-semibold py-2'>Computer Knowledge Test</h3>
                    <div className='w-[90%] mx-auto py-3 flex justify-between'>
                        <p>No. of Questions:60</p>
                        <p>Time Limit: 45mins</p>
                    </div>
                </div>
            </div>
            <button className=' text-blue-600 border-2 border-blue-600 rounded-lg px-3 py-2 hover:bg-blue-600 hover:text-white'>Check All Our Assessments</button>
        </div>

        {/* register banner */}
        <div className="w-full h-[300px] bg-indigo-200 py-3">
            <div className="flex flex-col gap-5 items-center justify-center h-full">
             <h2 className='text-4xl text-white font-semibold'>Unlock a streamlined hiring process in just a click</h2>
             <h3 className='text-2xl text-white font-semibold'>Ready to scale your business with the right talent?</h3>
             <div className="flex gap-10">
                <button className='rounded-lg bg-yellow-400 px-3 py-2 font-semibold'>Get Started</button>  
                <button className='rounded-lg bg-blue-500 font-semibold px-3 py-2 '>Learn More</button>
             </div>
            </div>
        </div>
    </div>
  )
}

export default EmpHero
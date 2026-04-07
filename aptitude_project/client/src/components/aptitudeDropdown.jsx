import React from 'react'
import { Link } from 'react-router-dom'
const AptitudeDropdown = () => {
  return (
    <div className="w-[75%] mx-auto">
        <div className='w-[250px] flex flex-col bg-slate-500 text-white py-5 mt-5 px-3 '>
            <Link>Numerical Ability</Link>
            <Link>Logical Reasoning</Link>
            <Link>Computer Knowledge Test</Link>
            <Link>English Proficiency Test</Link>
            <Link>Cognitive Ability Test</Link>
        </div>      
    </div>
  )
}

export default AptitudeDropdown
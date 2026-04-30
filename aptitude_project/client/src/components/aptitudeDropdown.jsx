import React from 'react'
import { Link } from 'react-router-dom'
const AptitudeDropdown = () => {
  return (
    <div className="w-[75%] mx-auto">
        <div className='w-[250px] flex flex-col items-start bg-slate-500 opacity-75 rounded-br-lg text-white py-5 mt-5 px-3 '>
            <Link to="/api/test/numerical-ability">Numerical Ability</Link>
            <Link to="/api/test/verbal-reasoning">Verbal Reasoning</Link>
            <Link to="/api/test/programming">Programming</Link>
            <Link to="/api/test/english-proficiency">English Proficiency Test</Link>
            <Link to="/api/test/technical-questions">Technical Quiz</Link>
        </div>      
    </div>
  )
}

export default AptitudeDropdown
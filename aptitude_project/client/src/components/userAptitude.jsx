import React from 'react'
import { Link } from 'react-router-dom'
const UserAptitude = () => {
  return (
    <div className="w-[75%] mx-auto">
        <div className='w-[250px] flex flex-col items-start bg-slate-500 opacity-75 rounded-br-lg text-white py-5 mt-5 px-3 '>
            <Link to="/userLogin/api/test/numerical-ability">Numerical Ability</Link>
            <Link to="/userLogin/api/test/verbal-reasoning">Verbal Reasoning</Link>
            <Link to="/userLogin/api/test/programming">Programming</Link>
            <Link to="/userLogin/api/test/english-proficiency">English Proficiency Test</Link>
            <Link to="/userLogin/api/test/technical-questions">Technical Quiz</Link>
        </div>      
    </div>
  )
}

export default UserAptitude
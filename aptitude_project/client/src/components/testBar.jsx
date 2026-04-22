import React from 'react'
import { Link } from 'react-router-dom'
const TestBar = () => {
  return (
    <div className="w-full py-3">
        <div className="w-[75%] mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 justify-between text-lg text-black">
              <Link to="/api/test/numerical-ability" className='rounded-lg bg-blue-500 px-3 py-2 text-center'>Numerical Ability</Link>
              <Link to="/api/test/verbal-reasoning" className='rounded-lg bg-blue-500 px-3 py-2 text-center'>Verbal Reasoning</Link>
              <Link to="/api/test/programming" className='rounded-lg bg-blue-500 px-3 py-2 text-center'>Programming</Link>
              <Link to="/api/test/english-proficiency" className='rounded-lg bg-blue-500 px-3 py-2 text-center'>English Proficiency Test</Link>
              <Link to="/api/test/technical-questions" className='rounded-lg bg-blue-500 px-3 py-2 text-center'>Technical Quiz</Link>
            </div>
        </div>
    </div>
  )
}

export default TestBar
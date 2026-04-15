import React from 'react'

const TestBar = () => {
  return (
    <div className="w-full py-3">
        <div className="w-[75%] mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 justify-between text-lg text-black">
              <a href="" className='rounded-lg bg-blue-500 px-3 py-2 text-center'>Numerical Ability</a>
              <a href="" className='rounded-lg bg-blue-500 px-3 py-2 text-center'>Verbal Reasoning</a>
              <a href="" className='rounded-lg bg-blue-500 px-3 py-2 text-center'>Programming Test</a>
              <a href="" className='rounded-lg bg-blue-500 px-3 py-2 text-center'>Technical Questions</a>
              <a href="" className='rounded-lg bg-blue-500 px-3 py-2 text-center'>Interview Preps</a>
            </div>
        </div>
    </div>
  )
}

export default TestBar
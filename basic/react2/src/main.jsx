import React,{ useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

export const Guest=()=>
{
  var[name,setName]=useState("Guest");
  return(
    <div className='flex flex-col gap-3 my-5'>
      
      <div>
        <label htmlFor="name">Name : </label>
        <input type="text" id='name'name='name' size={40} placeholder='Enter Your Name and click Enter' className='px-2 border border-gray-500 rounded-md' onKeyDown={(e) => {if (e.key === 'Enter') {setName(e.target.value); }}}/>
      </div>
      <h1 className='text-center text-5xl '>Hello, <span className='text-red-500'>{name}
        </span>!</h1>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <Guest/>
)

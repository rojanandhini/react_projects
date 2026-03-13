import React, {useState} from 'react'
import ReactDOM from "react-dom/client";
import "./index.css";
export const Hooks = () => {
    var[value,setValue]= useState(0);
    
  return (
    <div className='flex flex-col justify-center items-center h-[200px] w-[25%] mx-auto gap-3 my-5 border bg-pink-100 border-blue-700 rounded-lg'>
        <h1 className='text-3xl text-green-600 font-semibold rounded-full border border-stone-100 px-3 py-1 bg-zinc-200'>{value}</h1>
        <div className='bg-yellow-300 '>
            <button 
            onClick={()=> {
                if (value>0)
                    setValue(value-1)
            }}
            className={`px-2 ${value<1? "bg-slate-500 pointer-events-none":"bg-blue-500"} `} >-</button>  
            <span> Count </span>
            
            <button className='bg-blue-500 px-1' onClick={()=> {setValue(value+1);}}  > +</button>
            </div>
        
        <button className='bg-yellow-300 px-1 hover:bg-blue-500' onClick={() => setValue(0)}  >Reset</button>
    </div>
  )
};

const createHook=ReactDOM.createRoot(document.getElementById("hook"));
createHook.render(<Hooks/>);
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; 
 
const schema = z.object({
  name: z.string().min(3,{message:"Enter a min of 3 characters"}),
  email: z.email()
});

export const Signup = () => {
    const { register,
    handleSubmit,
formState:{errors},}= useForm({resolver: zodResolver(schema),})
    const formSubmit=(data)=>{console.log(data)}
//   const [selected, setSelected] = useState("Female");
  return (
    <form className='flex flex-col gap-5 items-center py-10' onSubmit={handleSubmit(formSubmit)}>
        <h1 className='text-3xl'>Login</h1>
        <div className='flex gap-3'>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' id='name' placeholder='Enter your Name' className='border rounded-lg px-2'{...register("name")}/>
            {errors.name?.message&& <p>{errors.name?.message}</p>}
        </div>
        <div className='flex gap-3'>
            <label htmlFor="email">Email ID: </label>
            <input type="email" name="email" id="email" placeholder='Enter your mail id' className='border rounded-lg px-2' {...register("email")}/>
            {errors.email&&<span>Required Field</span>}
        </div>
        <div className='flex gap-3'>
            <label htmlFor="gender"> Gender : </label>
            <label htmlFor="gender"><input type="radio" name="gender" id="gender" value="Female" /> Female </label>
            
           <label htmlFor="gender"> <input type="radio" name="gender" id="gender" value="Male"  /> Male </label>
        </div>
        <div>
            <button type="submit" className='border rounded-lg px-2 bg-yellow-300 hover:bg-blue-400'>Submit</button>
        </div>
    </form>
  )
}


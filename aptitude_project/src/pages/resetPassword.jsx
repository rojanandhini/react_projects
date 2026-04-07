import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; // or 'zod/v4'

const schema = z.object({
  
  password: z.string().regex(/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,{message:'Needs a minimum 8 characters including atleast 1 lowercase, 1 digit, and 1 special character(#?!@$%^&*-) '}),
  email: z.email().min(1,{message:'Enter valid Mail ID'}),
  conPassword: z.string().min(1, { message: 'Confirm Password is required' }),
}).refine((data) => data.password === data.conPassword, {
  message: "Passwords don't match",
  path: ["conPassword"], // This sets the error specifically on the conPassword field
});

const ResetPassword = () => {

     const { register, handleSubmit,
        formState: { errors }, } = useForm({
        resolver: zodResolver(schema),
      })
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-amber-100 w-[50%] mx-auto flex flex-col items-center py-5">
        <h2 className="text-2xl font-semibold text-gray-700 py-2">Update Your Password</h2>
        <div className="grid grid-cols-2 gap-3">
        
           <label htmlFor="email">Email:</label>
            <div>
                <input type="email" className="rounded-md px-2" {...register("email")} />
                {errors.email?.message && <p className="text-red-600">{errors.email?.message}</p>}
            </div>

            <label htmlFor="password">Password:</label>
            <div>
                <input type="password" className="rounded-md px-2" {...register("password")} />
                {errors.password?.message && <p className="text-red-600">{errors.password?.message}</p>}
            </div>

            <label htmlFor="conPassword">Confirm your Password:</label>
            <div>
                <input className="rounded-md px-2" {...register("conPassword")} />
                {errors.conPassword?.message && <p className="text-red-600">{errors.conPassword?.message}</p>}
            </div>
        </div>
        
        <input type="submit" className="py-2 rounded-lg bg-blue-500 px-3 my-2"/>
        <div className="flex">
            <label htmlFor="register">Not registered?</label>
            <Link to="/register" className='text-blue-600 px-2 font-medium text-lg'>SignUp!</Link>
        </div>
    </form>
  )
}

export default ResetPassword



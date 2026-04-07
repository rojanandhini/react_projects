import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; // or 'zod/v4'

const schema = z.object({
  firstName: z.string().min(3, { message: 'Required minimum 3 characters' }),
  password: z.string().regex(/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,{message:'Needs a minimum 8 characters including atleast 1 lowercase, 1 digit, and 1 special character(#?!@$%^&*-) '}),
  email: z.email().min(1,{message:'Enter valid Mail ID'}),
  conPassword: z.string().min(1, { message: 'Confirm Password is required' }),
}).refine((data) => data.password === data.conPassword, {
  message: "Passwords don't match",
  path: ["conPassword"], // This sets the error specifically on the conPassword field
});


export default function Register() {
  const { register, handleSubmit,
    formState: { errors }, } = useForm({
    resolver: zodResolver(schema),
  })
  const onSubmit = (data) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-amber-100 w-[50%] mx-auto flex flex-col items-center py-5">
        <h2 className="text-2xl font-semibold text-gray-700 py-2">Sign UP</h2>
        <div className="grid grid-cols-2 gap-3">
            <label htmlFor="firstName">First Name:</label>
            <div>
                <input className="rounded-md px-2" {...register("firstName")} />
                {errors.firstName?.message && <p className="text-red-600">{errors.firstName?.message}</p>}
            </div>
            <label htmlFor="secondName">Second Name:</label>
            <input className="rounded-md px-2" {...register("secondName")} />

            <label htmlFor="gender">Gender:</label>
            <select className="rounded-md px-2" {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>

            <label htmlFor="dateOfBirth">Date Of Birth:</label>
            <input type="date" className="rounded-md px-2" {...register("dateOfBirth")} />

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
        
    </form>
    
  )
}
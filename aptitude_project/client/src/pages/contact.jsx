import React from 'react'
import { useForm } from "react-hook-form"
import FAQ from '../components/contact/toggleFAQ'

const Contact = () => {
    const { register, handleSubmit } = useForm()
      const onSubmit = (data) => console.log(data)

  return (
    <div>
        <div className="w-full bg-orange-100 h-[200px]">
            <h1 className='flex justify-center items-center h-full text-6xl font-semibold text-[#0534ab]'>Happy to Help!</h1>
        </div>
        <div className="w-full bg-slate-50">
            <FAQ/>
        </div>
        <div className="w-[75%] mx-auto py-5 flex justify-between">
            <div className="flex flex-col gap-5">
                <h3 className='text-gray-600 text-3xl font-semibold'>Lets get connected</h3>
                <h2 className="text-xl lg:text-3xl font-serif font-semibold text-teal-600">Aptitude Advantage</h2>
                <h3>Nadd Hessa, UAE</h3>
                <h4 className='text-xl text-blue-600 hover:underline'>support@aptitude-advantage.com</h4>
                <p>Connect between 8AM - 8PM</p>
            </div>
            <form  onSubmit={handleSubmit(onSubmit)} className="w-[50%] flex flex-col py-5 px-3 rounded-lg shadow-xl">
                <div className="grid grid-cols-[auto_1fr] gap-2">
                    
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' className='rounded-lg px-2 border w-full border-gray-200 outline-none focus:border-blue-500' {...register("name")}/>

                    <label htmlFor="email">Email ID</label>
                    <input type="email" name="email" id="email" className='rounded-lg px-2 border w-full border-gray-200 outline-none focus:border-blue-500' {...register("email")} />

                    <label htmlFor="subject">Subject</label>
                    <input type="text" name='subject' className='rounded-lg px-2 border w-full border-gray-200 outline-none focus:border-blue-500' {...register("subject")}/>

                    <label htmlFor="message">Message</label>
                    <textarea type="text" name='message' className='h-48 resize-y rounded-lg px-2 border w-full border-gray-200 outline-none focus:border-blue-500 ' {...register("message")}/>

                </div>
                <button type='submit' className="self-center py-2 rounded-lg bg-blue-500 px-3 my-2">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
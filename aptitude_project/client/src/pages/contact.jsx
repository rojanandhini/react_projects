import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import FAQ from '../components/contact/toggleFAQ'
import { useEffect } from 'react'

const Contact = () => {
    const { register, handleSubmit,reset, setValue  } = useForm()
     const [status, setStatus] = useState({ loading: false, message: '', type: '' })

      useEffect(() => {
        const storedName = localStorage.getItem('userName')
        const storedEmail = localStorage.getItem('email') // Adjust key name if different in your storage

        if (storedName) setValue('name', storedName)
        if (storedEmail) setValue('email', storedEmail)
    }, [setValue])

    const onSubmit = async (data) => {
        setStatus({ loading: true, message: 'Sending...', type: '' })
        
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Critical for Express to parse the JSON
                },
                body: JSON.stringify(data), // Fetch requires manual stringification
            })

            // Fetch does NOT throw an error for 4xx/500 status codes automatically
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const result = await response.json()
            setStatus({ loading: false, message: 'Message sent successfully!', type: 'success' })
            reset() // Resets form fields on success

             const storedName = localStorage.getItem('userName')
            const storedEmail = localStorage.getItem('email')
            if (storedName) setValue('name', storedName)
            if (storedEmail) setValue('email', storedEmail)

        } catch (error) {
            console.error('Fetch Error:', error)
            setStatus({ 
                loading: false, 
                message: 'Failed to send message. Please try again.', 
                type: 'error' 
            })
        }
    }

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
                <h4 className='text-xl text-blue-600'>support@aptitude-advantage.com</h4>
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
                {status.message && (
                        <p className={`text-center mt-2 ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                            {status.message}
                        </p>
                    )}
                <button type='submit' disabled={status.loading} className="self-center py-2 rounded-lg bg-blue-500 px-3 my-2">{status.loading ? 'Processing...' : 'Send Message'}</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import ResetPassword from "./resetPassword"


export default function Login() {
  const { register, handleSubmit } = useForm()

  const navigate= useNavigate();

  const onSubmit = async (data) => {

  try {
    const response = await fetch("/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Tells the BE to expect JSON
      },
      body: JSON.stringify(data), // Converts the form object to a string
    });

    const result = await response.json();

    if (response.ok) {
      console.log('Success:', result);
      alert('Login Successful ...');
      navigate("/userLogin");
  
    } else {
      // Handles backend validation errors (e.g., email already exists)
      console.error('Server Error:', result);
      alert(`Error: ${result.message || 'Registration failed'}`);
    }
  } catch (error) {
    // Handles network errors (e.g., backend is down)
    console.error('Network Error:', error);
    alert('Could not connect to the server.');
  }
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-amber-100 w-[50%] mx-auto flex flex-col items-center py-5">
        <h2 className="text-2xl font-semibold text-gray-700 py-2">Login</h2>
        <div className="grid grid-cols-2 gap-3">
        
            <label htmlFor="email">Email:</label>
            <input type="email" className="rounded-md px-2" {...register("email")} />

            <label htmlFor="password">Password:</label>
            <input type="password" className="rounded-md px-2" {...register("password")} />
        </div>
        
        <input type="submit" className="py-2 rounded-lg bg-blue-500 px-3 my-2"/>

        <div className="flex justify-between">
            <div className="flex">
            <label htmlFor="register">Not registered?</label>
            <Link to="/api/signup" className='text-blue-600 px-2 font-medium text-lg'>SignUp!</Link>
            </div>

            <div className="flex">
            <label htmlFor="password">Forgot Password?</label>
            <Link to="/resetPassword" className='text-blue-600 px-2 font-medium text-lg'>Reset Password!</Link>
            </div>
        </div>
    </form>
  )
}
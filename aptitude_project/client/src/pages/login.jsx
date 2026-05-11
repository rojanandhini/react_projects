import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import ResetPassword from "./resetPassword"


export default function Login() {
  const { register, handleSubmit } = useForm()



const onSubmit = async (data) => {
  try {
    const response = await fetch("/api/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      // 1. Save the userId and tokens to localStorage
      // result.data contains the 'userId' from your ...restData
      localStorage.setItem("userId", result.data.userId);
      localStorage.setItem("email",result.data.email);
      localStorage.setItem("userName", result.data.firstName);
      localStorage.setItem("token", result.data.token.mainToken);

      alert('Login Successful ...');
      localStorage.setItem("isLoggedIn", "true");
      window.location.assign ("/");
    } else {
      alert(`Error: ${result.message || 'Login failed'}`);
    }
  } catch (error) {
    console.error('Network Error:', error);
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
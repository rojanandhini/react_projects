import React from 'react'
import { Link } from 'react-router-dom';
import flipkart_logo from "../assets/header/flipkart_logo.png"

const Header = () => {
  return (
  <section className=" bg-white fixed top-0 w-full">
  <div className="w-full max-w-screen-xl px-4 mx-auto mt-2 lg:px-12 ">
    {/* Start coding here */}
    <div className=" overflow-hidden bg-white ">
      <div className="flex flex-col items-center justify-between p-2 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
      <Link to="/">
        <button
          type="button" 
          className="flex items-center justify-center w-full px-5 py-1 text-sm font-medium text-black rounded-lg md:w-auto bg-[#FFE51F] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:outline-none "
        >
          <img src={flipkart_logo} alt="flipkart_logo" className="w-[30px] h-[40px]" />
          Flipkart
        </button>
        </Link>
        <div
          className="inline-flex flex-col w-full md:w-auto md:flex-row"
          role="group"
        >
           <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
             </svg><span>Location not Selected</span>
        
            <span className="px-4 py-2 text-sm font-medium text-[#2C67E9] bg-white  ">Select Delivery Location <>&gt;</></span>
          
        </div>
      </div>
    </div>
  </div>
</section>

  )
};

export default Header
import { Link } from "react-router-dom";
import 'flowbite';
import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import { LoginDropdown } from "./loginDropdown";
import { MoreDropdown } from "./moreDropDown";
export const SearchBar=()=>{
   useEffect(() => {
    // This connects the 'data-dropdown-toggle' to the ID manually
    initFlowbite();
  }, []); 

return (
<section className=" flex bg-white items-center">
  <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full ">
    {/* Start coding here */}
    <div className="relative bg-white sm:rounded-lg">
      <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/2">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="block w-full p-2 pl-10 text-lg text-gray-900 border-[#44ABFF] border-2 rounded-lg bg-gray-50 "
                placeholder="Search"
                required=""
              />
            </div>
          </form>
        </div>
        <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
         
          <div className="flex items-center space-x-3 w-auto flex-shrink-0 ">
            <LoginDropdown/>
            <MoreDropdown/>
             <button
            type="button"
            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-black "
          >
            <svg className="w-6 h-6 mr-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
          </svg>

            Cart
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

);
};
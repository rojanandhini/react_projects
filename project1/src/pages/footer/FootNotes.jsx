import React from 'react'

const FootNotes = () => {
    const footItems=[
        {
            title: "Flipkart",
            listItems:["Flipkart Express","Legal Notice","Product Listing Policy","Terms of use"]          
    }];
  return (
    <div className="py-6 md:py-8">
     
        {footItems.map((items)=>(
        <div className="gap-4 space-y-5 xl:flex xl:items-center xl:justify-between xl:space-y-0">
                <a href="#" title="" className="flex justify-between ">
                {" "}{items.title} {" "}
                </a>
                <ul className="flex flex-wrap items-center gap-4 text-sm text-gray-900 xl:justify-center">
                {items.listItems.map((qlink)=>(
                    <li>
                        <a href="#" title="" className="font-medium hover:underline">
                        {" "}
                        {qlink}{" "}
                        </a>
                    </li>))}
                
        </ul>
        <p className="text-sm text-gray-500" >
          © 2024{" "}
          <a href="#" className="hover:underline">
            Flipkart
          </a>
          , Inc. All rights reserved.
        </p>
      </div>
   
        ))}
        
         
        
    </div>    
  )
}

export default FootNotes
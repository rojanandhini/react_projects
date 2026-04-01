export const Categories=()=>{
  const categoryItem=[
    {
      catName:"For You",
      catImg:<svg
  xmlns="http://www.w3.org/2000/svg"
  width={44}
  height={44}
  viewBox="0 0 24 24"
  fill="none"
  stroke="#5f5d5d"
  strokeWidth="0.4090909090909091"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-handbag-icon lucide-handbag"
>
  <path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z" />
  <path d="M8 11V6a4 4 0 0 1 8 0v5" />
</svg>



  },
  {catName:"Fashion",
      catImg:<svg
  xmlns="http://www.w3.org/2000/svg"
  width={44}
  height={44}
  viewBox="0 0 24 24"
  fill="none"
  stroke="#5f5d5d"
  strokeWidth="0.4090909090909091"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-shirt-icon lucide-shirt"
>
  <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
</svg>

    },
     {catName:"Mobiles",
      catImg:<svg
  xmlns="http://www.w3.org/2000/svg"
  width={44}
  height={44}
  viewBox="0 0 24 24"
  fill="none"
  stroke="#5f5d5d"
  strokeWidth="0.4090909090909091"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-smartphone-icon lucide-smartphone"
>
  <rect width={14} height={20} x={5} y={2} rx={2} ry={2} />
  <path d="M12 18h.01" />
</svg>

    },
    {catName:"Beauty",
      catImg:<svg
  width="64px"
  height="64px"
  viewBox="0 0 1024 1024"
  className="icon"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  fill="#000000"
  stroke="#000000"
  strokeWidth="1.024"
>
  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
  <g id="SVGRepo_iconCarrier">
    <path d="M616.04 168.816v261.376H422.096V62.36" fill="#f5f90b" />
    <path d="M329.32 429.632h365.36v570.48h-365.36z" fill="#fafafa" />
    <path d="M616.04 429.632H512.824v570.48h181.856v-570.48z" fill="#fafafa" />
    <path
      d="M512.824 430.192h103.216V168.816l-103.216-56.648z"
      fill="#f5f90b"
    />
    <path
      d="M607.072 195.768c-22.344 24.432-79.792 8.352-128.416-36.072-48.528-44.24-69.936-100.008-47.592-124.416 22.192-24.432 79.696-8.288 128.264 36.04 48.68 44.368 69.992 100.136 47.744 124.448z"
      fill="#f5f90b"
    />
  </g>
</svg>

    },
    {
      catName:"Electronics",
      catImg:<svg
  xmlns="http://www.w3.org/2000/svg"
  width={44}
  height={44}
  viewBox="0 0 24 24"
  fill="none"
  stroke="#5f5d5d"
  strokeWidth="0.4090909090909091"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-laptop-icon lucide-laptop"
>
  <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" />
  <path d="M20.054 15.987H3.946" />
</svg>


  },
    {
      catName:"Home",
    catImg:<svg
  xmlns="http://www.w3.org/2000/svg"
  width={44}
  height={44}
  viewBox="0 0 24 24"
  fill="none"
  stroke="#5f5d5d"
  strokeWidth="0.4090909090909091"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-lamp-icon lucide-lamp"
>
  <path d="M12 12v6" />
  <path d="M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z" />
  <path d="M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" />
</svg>

    },
    
    {catName:"Baby/Toys",
      catImg:<svg
  xmlns="http://www.w3.org/2000/svg"
  width={44}
  height={44}
  viewBox="0 0 24 24"
  fill="none"
  stroke="#5f5d5d"
  strokeWidth="0.4090909090909091"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-baby-icon lucide-baby"
>
  <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
  <path d="M15 12h.01" />
  <path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
  <path d="M9 12h.01" />
</svg>

    },
   
    
    {catName:"Food & Grocery",
      catImg: <svg
  xmlns="http://www.w3.org/2000/svg"
  width={44}
  height={44}
  viewBox="0 0 24 24"
  fill="none"
  stroke="#5f5d5d"
  strokeWidth="0.4090909090909091"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-salad-icon lucide-salad"
>
  <path d="M7 21h10" />
  <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
  <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" />
  <path d="m13 12 4-4" />
  <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
</svg>

    },
   
    {catName:"Books",
      catImg:<svg
  xmlns="http://www.w3.org/2000/svg"
  width={44}
  height={44}
  viewBox="0 0 24 24"
  fill="none"
  stroke="#5f5d5d"
  strokeWidth="0.4090909090909091"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-book-marked-icon lucide-book-marked"
>
  <path d="M10 2v8l3-3 3 3V2" />
  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
</svg>

    },
   
    {catName:"Sports/Outdoor",
      catImg:<svg
  xmlns="http://www.w3.org/2000/svg"
  width={44}
  height={44}
  viewBox="0 0 24 24"
  fill="none"
  stroke="#5f5d5d"
  strokeWidth="0.4090909090909091"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-trophy-icon lucide-trophy"
>
  <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
  <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
  <path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
  <path d="M4 22h16" />
  <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
  <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
</svg>

    },
   
   
    {catName:"Furniture",
      catImg:<svg
  xmlns="http://www.w3.org/2000/svg"
  width={44}
  height={44}
  viewBox="0 0 24 24"
  fill="none"
  stroke="#5f5d5d"
  strokeWidth="0.4090909090909091"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-armchair-icon lucide-armchair"
>
  <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
  <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
  <path d="M5 18v2" />
  <path d="M19 18v2" />
</svg>
},
    
   ];
return(<section className="w-full rounded-lg antialiased  bg-white"> 
  <div className="max-w-screen-xl mx-auto px-4 2xl:px-0 py-2 w-full bg-white">
    <div className="flex ">
      {
        categoryItem.map((items,index)=>{
                          return (
                              <div key={index} className="flex flex-row justify-between items-center w-full">
                                  <CategoryItems
                                    catName={items.catName}
                                    catImg={items.catImg}
                                  />
                              </div>
                          );
                      })
      }
    </div>
  </div>
</section>
);
};
export const CategoryItems=(props)=>{
  return(<a
        href="#"
        className="flex flex-col group justify-center items-center px-4 group-hover:backdrop-blur-sm hover:bg-gradient-to-b from-[#CAE8FF] to-white hover:rounded-br-none hover:rounded-bl-none rounded-xl"
      >
        <div className=" animate-[disappear_linear_both] 
  [animation-timeline:scroll(root)] 
  [animation-range:0px_100px] px-2">{props?.catImg}</div>
        
        
        <span className="top-60 text-center text-base font-medium text-gray-900 truncate px-2 group-hover:border-b-[#1162F2] group-hover:border-b-4 ">
          {props?.catName}
        </span>
      </a>);
  

}
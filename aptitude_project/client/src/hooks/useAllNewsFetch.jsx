import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const useAllNewsFetch = () => {

    const [allNews,setAllNews]=useState([]);
    const fetchAllNews= async()=>{
        try {
            const res=await fetch("/api/news");

              if (!res.ok) {
                throw new Error(`Server responded with status ${res.status}`);
            }

            const data= await res.json();
            
            console.log(data);

            setAllNews(data.data);
        } catch (error) {
            console.log("Data Fetch Error: ",error);
            
        }
    };
    useEffect(()=>{
        (async()=>{
            await fetchAllNews();
        })();
    },[]);
  return (allNews)
}

export default useAllNewsFetch
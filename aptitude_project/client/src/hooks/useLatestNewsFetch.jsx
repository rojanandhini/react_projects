import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const useLatestNewsFetch = () => {

    const [latestNews,setLatestNews]=useState([]);
    const fetchLatestNews= async()=>{
        try {
            const res=await fetch("/api/latestNews");

              if (!res.ok) {
                throw new Error(`Server responded with status ${res.status}`);
            }

            const data= await res.json();
            
            console.log(data);

            setLatestNews([data.data]);
        } catch (error) {
            console.log("Data Fetch Error: ",error);
            
        }
    };
    useEffect(()=>{
        (async()=>{
            await fetchLatestNews();
        })();
    },[]);
  return (latestNews)
}

export default useLatestNewsFetch
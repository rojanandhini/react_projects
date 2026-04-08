import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';

const useNewsDetailFetch = () => {
 const [newsDetails,setNewsDetails]=useState(null);

 const {postNo} = useParams();
  console.log("params: ",postNo);

    const FetchNewsDetail= async()=>{
        try {

            const res=await fetch(`/api/recentNews/${postNo}`);

              if (!res.ok) {
                throw new Error(`Server responded with status ${res.status}`);
            }
            
            const result= await res.json();

          
            console.log(result);

            setNewsDetails(result.data);
        } catch (error) {
            console.log("Data Fetch Error: ",error);
            
        }
    };
    useEffect(()=>{
        (async()=>{
            await FetchNewsDetail();
        })();
    },[postNo]);
  return (newsDetails)
}

export default useNewsDetailFetch
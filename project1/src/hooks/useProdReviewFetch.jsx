import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const useProdReviewFetch = () => {
  const paraa = useParams();
    console.log("params: ",paraa.productid);
     const [proddata,setProdData]=useState([]);

    const [reviews,setReviews]=useState([]);

    const productReviewFetch =async ()=>{
      try {
        const data = await fetch(`https://dummyjson.com/products/${paraa?.productid}`);
        const res=await data.json();
       setProdData(res);
        // populate reviews state if present
        if (Array.isArray(res.reviews)) {
          setReviews(res.reviews);
        }
      } catch (error) {
        console.log("Error in fetching product detail ",error)
      }
    };
    useEffect(()=>{
      productReviewFetch();
    },[]);
  return  {proddata,reviews}
}

export default useProdReviewFetch
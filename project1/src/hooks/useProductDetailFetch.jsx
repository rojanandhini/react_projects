import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useProductDetailFetch = () => {
     const paraa = useParams();
    console.log("params: ",paraa.productid);
    const [proddata,setProdData]=useState([]);
   
    const productDetailFetch =async ()=>{
      try {
        const data = await fetch(`https://dummyjson.com/products/${paraa?.productid}`);
        const res=await data.json();
        setProdData(res);
      
      } catch (error) {
        console.log("Error in fetching product detail ",error)
      }
    };
    useEffect(()=>{
      productDetailFetch();
    },[]);
  return proddata
}

export default useProductDetailFetch
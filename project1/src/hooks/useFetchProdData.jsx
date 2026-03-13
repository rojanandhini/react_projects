import React, { useEffect, useState } from 'react'

const useFetchProdData = () => {
  const [productData,setProductData]=useState([]);
 const fetchProdData=async()=>{
  try{
    const res = await fetch("https://dummyjson.com/products");
    const data= await res.json();
    setProductData(data.products);
  }catch(error){
    console.log("Fetch Product data error: ",error);
  }
 };
 useEffect(()=>{
  (async ()=>{
   await fetchProdData();
  })();
 },[]);
    return (productData )
}

export default useFetchProdData
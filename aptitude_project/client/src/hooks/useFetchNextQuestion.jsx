import React from "react";
import { useState } from "react";

export const UseFetchNextQuestion=()=>{
     const [currentIndex, setCurrentIndex] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(null);
const FetchNextQuestion = async () => {
  const response = await fetch(`/api/questions/next?testPaperId=XYZ&page=${currentIndex}`);
  const data = await response.json();
 
  if (response.ok) {
    setCurrentQuestion(data);
    setCurrentIndex(prev => prev + 1); // Increment for the next click
  } else {
    alert("Test Completed!");
  }
};

return FetchNextQuestion;
}
 


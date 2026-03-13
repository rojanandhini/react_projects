import React from 'react'
import ReactDOM from "react-dom/client"; 

export const Main = () => {
  return (
    <div>hi</div>
  )
};
const createForm=ReactDOM.createRoot(document.getElementById("form"));
createForm.render(<Main/>);

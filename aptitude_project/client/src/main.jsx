import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { RouterProvider } from "react-router-dom";
import { Route } from "../src/route/Route";


const createMain = ReactDOM.createRoot(document.getElementById("root"));
createMain.render(<RouterProvider router={Route}/>);

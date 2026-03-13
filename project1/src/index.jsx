import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider} from "react-router-dom"
import { Route } from "./route/Route";
// eslint-disable-next-line react-refresh/only-export-components




const reactRoot= ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<RouterProvider router={Route}/>);
 

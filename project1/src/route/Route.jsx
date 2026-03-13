import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../Layout/AppLayout";
import { Home } from "../pages/Home";
import { ErrorPage } from "../pages/ErrorPage";
import { ProductDetail } from "../pages/ProductDetail";
import { Signup } from "../pages/Signup";

export const Route= createBrowserRouter([{
  path:"/",
  element: <AppLayout/>,
  children:[{
    path:"/",
    element:<Home/>
  },
{
  path:"/productdetail/:productid",
  element:<ProductDetail/>
}],
  errorElement:<ErrorPage/>
},
{
  path: "/signup",
  element:<Signup/>
}] );
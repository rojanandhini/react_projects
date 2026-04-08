import {createBrowserRouter} from "react-router-dom"
import HomeLayout from "../Layout/homeLayout";
import NewsDetails from "../pages/newsDetails";
import ArticleDetails from "../pages/articleDetails";
import ParentLayout from "../Layout/parentLayout";
import Login from "../pages/login";
import Register from "../pages/register";
import ResetPassword from "../pages/resetPassword";
import PrepTipsPage from "../pages/prepTipsPage";
import Contact from "../pages/contact";
import EmployerLayout from "../Layout/employerLayout";

export const Route = createBrowserRouter([
  {
    path: "/",
    element:<ParentLayout/>,
    children:[{
    path: "/",
    element:<HomeLayout/>
  },{
    path: "/api/recentNews/:postNo",
    element:<NewsDetails/>
  }, 
  {
    path: "/recentArticles",
    element:<ArticleDetails/>
  },
{
    path: "/login",
    element:<Login/>
  },
{
    path: "/register",
    element:<Register/>
  },
{
    path: "/resetPassword",
    element:<ResetPassword/>
  },
{
    path: "/prepTips",
    element:<PrepTipsPage/>
  },
{
    path: "/contact",
    element:<Contact/>
  },]
  },
  {
    path:"/employer",
    element:<EmployerLayout/>
  }
]);
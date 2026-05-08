import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/homeLayout";
import NewsDetails from "../pages/newsDetails";
import ArticleDetails from "../pages/articleDetails";

import Login from "../pages/login";
import Register from "../pages/register";
import ResetPassword from "../pages/resetPassword";
import PrepTipsPage from "../pages/prepTipsPage";
import Contact from "../pages/contact";
import EmployerLayout from "../Layout/employerLayout";
import NewsNArticlesPage from "../pages/newsNArticlesPage";
import TestPage from "../pages/testPage";
import EntryPage from "../pages/quiz/entryPage";
import Quiz from "../pages/quiz/quiz";
import Results from "../pages/quiz/results";

import NewsNarticles from "../components/newsNarticles";
import Stats from "../pages/userPages/stats";
import Profile from "../pages/userPages/profile";
import AppLayout from "../Layout/appLayout";
import UserLayout from "../Layout/userLayout";
import HomeSelector from "../components/homeSelector";

export const Route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
         element: <HomeSelector />,
      },
      {
        path: "/api/recentNews/:postNo",
        element: <NewsDetails />,
      },
      {
        path: "/recentArticles",
        element: <ArticleDetails />,
      },
      {
        path: "/api/login",
        element: <Login />,
      },
      {
        path: "/api/test/:slug",
        element: <TestPage />,
      },
      {
        path: "/api/signup",
        element: <Register />,
      },
      {
        path: "/resetPassword",
        element: <ResetPassword />,
      },
      {
        path: "/prepTips",
        element: <PrepTipsPage />,
      },
      {
        path: "/newsNArticles",
        element: <NewsNArticlesPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/api/results/stats",
        element: <Stats />,
      },
      {
        path: "/api/profile",
        element: <Profile />,
      },
    ],
  },

  {
    path: "/employer",
    element: <EmployerLayout />,
  },
  {
    path: "/quiz/entry/:slug",
    element: <EntryPage />,
  },
  {
    path: "/quiz/:slug",
    element: <Quiz />,
  },
  {
    path: "/api/results",
    element: <Results />,
  },
]);

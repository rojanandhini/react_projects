import React, { useEffect, useState } from 'react'
import ParentLayout from './parentLayout';
import UserLayout from './userLayout';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
 // 1. Create a state to track the login status
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  // 2. This effect listens for changes to storage (like your signout)
  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    // This catches changes from other components/tabs
    window.addEventListener("storage", checkAuth);
    
    // We also run a small interval check as a fallback for the same tab
    const interval = setInterval(checkAuth, 500); 

    return () => {
      window.removeEventListener("storage", checkAuth);
      clearInterval(interval);
    };
  }, []);

  // 3. Toggle the layout based on the current state
  return isLoggedIn ? (
    <UserLayout>
      <Outlet />
    </UserLayout>
  ) : (
    <ParentLayout>
      <Outlet />
    </ParentLayout>
  );
}

export default AppLayout
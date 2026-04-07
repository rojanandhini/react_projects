import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/navBar';

const ParentLayout = () => {
  return (
    <div>
        <Header/>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
    
  )
}

export default ParentLayout;
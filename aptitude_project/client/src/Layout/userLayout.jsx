import React from 'react'
import Footer from '../components/footer'
import UserHeader from '../components/userHeader'
import { Outlet } from 'react-router-dom'
import UserNavBar from '../components/userNavBar'

const UserLayout = () => {
  return (
    <div>
        <UserHeader/>
        <UserNavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default UserLayout
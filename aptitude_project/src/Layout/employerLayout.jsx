import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import EmpNavBar from '../pages/Employer/empNavBar'
import EmpHero from '../pages/Employer/empHero'

const EmployerLayout = () => {
  return (
    <div>
        <Header/>
        <EmpNavBar/>
        <EmpHero/>
        <Footer/>
    </div>
  )
}

export default EmployerLayout
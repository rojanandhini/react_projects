import React from 'react'
import Header from '../components/header'
import { SearchBar } from '../components/searchBar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/footer'
import { Categories } from '../components/categoriesCard'
import { Head } from '../components/head'

export const AppLayout = () => {
  return (
    <div>
          {/* <Header/>
          
           <SearchBar/>
            <Categories/>  */}
            <Head/>
           <div className="mt-[235px]">
            <Outlet/>
          </div>
          <Footer/>
        </div>
  )
}

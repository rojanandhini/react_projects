import React from 'react'
import Header from '../components/header'
import { SearchBar } from '../components/searchBar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/footer'
import { Categories } from '../components/categoriesCard'

export const AppLayout = () => {
  return (
    <div>
          <Header/>
           <SearchBar/>  
           <Categories/>
           <div className="mt-[210px]">
            <Outlet/>
          </div>
          <Footer/>
        </div>
  )
}

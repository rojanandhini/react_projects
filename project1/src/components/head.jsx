import React from "react";
import Header from "./header";
import { SearchBar } from "./searchBar";
import { Categories } from "./categoriesCard";
import 'flowbite';

export const Head =()=>{
    return(
        
        <div className="fixed top-0 w-full">
            <Header/>
            <SearchBar/> <hr />
            <Categories/><hr />
        </div>
        
    );
}
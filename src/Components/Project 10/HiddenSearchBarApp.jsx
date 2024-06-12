import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import logo from './img/logo.png'


import project10 from './project10.css'

const HiddenSearchBarApp = () => {

    // const [showSerchIcon,setShowSearch] = useState(true)
    const [searchProps , setSearchProps] = useState(
        {
            opacity:1,
            showSerchIcon:true
        }
    )

    const serchInpt ={
        opacity: searchProps.opacity,
    }

    function showSearch(){
        console.log("Search ........")
        setSearchProps({
            opacity:1,

        })
        
    }

  

    


  return (
    <div className='hiddenSearchBarApp'>
    <div className='cont_heading'>
        <div className='header_content conatiner'>
        <div className='logo_img'>
             <img src={logo} alt='logo.png' />
        </div>
        <div className='logoCont'>
          <h1>Hidden Search Bar</h1> 
          </div>

          <div className='sideNav'> 
          <div className='serchIcon'>

          {searchProps.showSerchIcon ? <CiSearch onClick={()=>showSearch()} /> : <input type='search'  placeholder='Search' style={serchInpt} />}
          
          
          </div>  
          <FaCartPlus/>
          <CgProfile/>
          
           </div>
           </div>
     </div> 
    
    </div>
  )
}

export default HiddenSearchBarApp
import React from 'react'
import MagicApp from './MagicApp.css'

const MagicPoupApp = () => {


    setTimeout(()=>{
        alert("Hello World")
    },3000)


  return (
    <div className='magicapp'>
    <div className='cont_heading'>
          <h1>Magic Popup</h1> 
    </div>



    </div>
  )
}

export default MagicPoupApp
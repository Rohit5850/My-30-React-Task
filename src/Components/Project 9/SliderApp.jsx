import React, { useState } from 'react'
import Sliderapp from './Sliderapp.css'


const SliderApp = () => {

    const [slideValue , setSlideValue] = useState('0')

    function SlideInput(e){
      
        console.log(e.target.value)


        setSlideValue(e.target.value)
        
    }

    const growDiv = {
        width: `${slideValue}px`,
        height: `${slideValue}px`,
        background: `${slideValue} > 30 ` ? 'green' : 'white', 
    }


  return (
    <div className='Slider_App'>
      <div className='cont_heading'>
          <h1>Slider App</h1> 
      </div>

      <div className='slide_bar'>

      <input value={slideValue} type='range'  onInput={(e)=>SlideInput(e)}/>


          <div className='grow_div'>

           <div className='growValue' style={growDiv}>
           <p>{slideValue}</p>
           </div>

          </div>

      </div>


    
    
    </div>
  )
}

export default SliderApp
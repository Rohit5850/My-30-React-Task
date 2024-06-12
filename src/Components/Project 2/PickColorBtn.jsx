import React, { useState } from 'react'
import { ChromePicker } from 'react-color'



const PickColorBtn = () => {

    const [displayColorPicker,setDisplayColorPicker] = useState(false)


    function handleClick(){
        console.log('Pick Color!')
        console.log(!displayColorPicker)
        setDisplayColorPicker(!displayColorPicker);
    }

    function handelClose(){
        console.log('Close color Picker!')
        setDisplayColorPicker(false);
    }

    const popover = {
        position: 'absolute',
        zIndex: '2',
      }
      const cover = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      }



  return (
    <div className='pick_colorBtn'>
    <div className='cont_heading'>
    <h1>Pick Color App</h1>
    </div>
   
   <div className='pickBtn'>
        <button className='btn' onClick={()=>handleClick()}>Pick Color</button>

        {
          displayColorPicker == true ?
           <div style={ popover }> 
           <div style={ cover }  onClick={()=>handelClose()} /> 
           <ChromePicker/> 
            </div>
          : null
        }
   </div>


    </div>
  )
}

export default PickColorBtn
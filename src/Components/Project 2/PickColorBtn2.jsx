import React, { useState } from 'react'
import { ChromePicker } from 'react-color'

const PickColorBtn2 = () => {

 const [displayColorPicker,setDisplayColorPicker] = useState(false);
 const [background,setBackground] = useState('#fff')

 function handelBackChange(color){
    setBackground(color.hex)
 }


 function handelPickerShow() {
    setDisplayColorPicker(!displayColorPicker);
 }
 function handelPickerCloss(){
    console.log("Closed Clicked ......")
    setDisplayColorPicker(false)
 }

 const picker_tag = {
    position: 'absolute',
    zIndex: '2',
  }

  const cover2 = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  }

  return (
    <div className='pickColorBtn2'>

     <div className='cont_heading'>
            <h1>Pick Color App</h1>
     </div>


      <div className='PickBtn2'>
      <button className='btn' style={{ backgroundColor: background }} onClick={()=>handelPickerShow()} >Pick Color</button>
      {
        displayColorPicker == true ? 
        <div  style={picker_tag}> 
        <div style={cover2}  onClick={()=> handelPickerCloss()} />
        <ChromePicker color={background} onChange={(color)=>handelBackChange(color)} /> 

        {/* {document.body.style.background = background} */}

        </div>: null
      }

     
           
           
      </div>

    </div>
  )
}

export default PickColorBtn2
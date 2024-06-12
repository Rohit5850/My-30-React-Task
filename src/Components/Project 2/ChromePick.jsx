import React, { useState } from 'react'
import { ChromePicker } from 'react-color'

const ChromePick = () => {

    const [background,setBackground] = useState('#fff');
     
     function handelChange(color){
       setBackground(color.hex);
     }


  return (
    <div className='chromePick'>

   <ChromePicker color={background} onChange={(color)=>handelChange(color)}/>
   {document.body.style.background = background}
    </div>
  )
}

export default ChromePick
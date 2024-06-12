import React, { useState } from 'react'
import { SketchPicker } from 'react-color';

const SketchPick = () => {

    const [background,setBackground] = useState('#fff');



    function handelChange(color){
           setBackground(color.hex)
    }



  return (
    <div>
    
    <SketchPicker class="yoyoyoyooyo" color={background} onChange={(color)=> handelChange(color)} /> 
    {document.body.style.background = background}

    {/* onChangeComplete={} */}
    
    </div>
  )
}

export default SketchPick
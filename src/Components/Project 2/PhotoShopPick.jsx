import React, { useState } from 'react'

import { PhotoshopPicker } from 'react-color'



const PhotoShopPick = () => {


const [background,setBackground] = useState('#fff');

function handelColor(color){
    setBackground(color.hex)
}

  return (
    <div>
      
      <PhotoshopPicker color={background} onChange={(color)=>handelColor(color)}/>
      {document.body.style.background = background}
    </div>
  )
}

export default PhotoShopPick
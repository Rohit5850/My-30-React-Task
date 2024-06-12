import React from 'react'
import SlideUnlock from './SlideUnlock.css'



const LockSlider = ({slideValue ,slideInput , width }) => {

    let sliderStyle = {
        appearance: 'none',
        width: !width ? '300px' : width,
        height: '50px',
        background: 'gray',
        outline: 'none',
        opacity: '0.3',
    }
  return (
    <div className='lockSlider'>
       <input type='range' value={slideValue}  className='slider' style={sliderStyle} onInput={slideInput}/>
    </div>
  )
}

export default LockSlider
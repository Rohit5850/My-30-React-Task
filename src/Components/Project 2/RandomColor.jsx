import React from 'react'

const RandomColor = () => {
  return (
    <div>
     <div className='cont_heading'>
       <h1>Random Color</h1> 
    </div> 
    <div className='randContent'>
    <div className='main_container'>
    <div className='box'></div>
    <div className='color_inpt'>
         <input type='text' />
         <div className='setColor'></div>
    </div>

    </div>

    </div>
    </div>
  )
}

export default RandomColor
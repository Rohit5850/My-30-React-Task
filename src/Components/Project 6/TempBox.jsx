import React, { useState } from 'react'
import TempCon from './TempCon.css'

const TempBox = () => {

const [temShow , setTempShow] = useState(0)




  return (
    <div className='temp_box'>
            <div className='temp_contoller'>
                   <div className='temp_show' style={{ backgroundColor : `${temShow > 0 ?' red ': 'b05fdf'}`}}>
                   <div className='temp_show_head'>
                          <h2> <span>{temShow}</span> &#xb0;C</h2>
                          </div>
                   </div>

                   <div className='tempBtn'> 
                      <button className='temp_btn' onClick={() => setTempShow(temShow - 1)}>-</button>
                      <button className='temp_btn' onClick={() => setTempShow(temShow + 1 )}>+</button>
                   </div>
            </div>     
    </div>
  )
}

export default TempBox
import React, { useState } from 'react'
import { AiFillUnlock } from "react-icons/ai";
import lockScreenImg from './img/lockscreen.jpg'
import unlockScreenImg from './img/unlockScreen.jpg'
import SlideUnlock from './SlideUnlock.css'
import LockSlider from './LockSlider'




const LockScreen = () => {

    const [showSlider , setShowSlider] = useState(true)
    const [slideVal,setSlideVal] = useState(0)
    const [lockText,setLockText] = useState('Unlock  Screen')
    const [screenImg , setimg] = useState(lockScreenImg)

    function slideBtn(e){

        console.log(e.target.value)
        setSlideVal(e.target.value)

        setLockText('Lock Screen')

        setimg(unlockScreenImg)

        setShowSlider(false)

          console.log()
          console.log("Slide ....")
    }


  return (
    <div className='lockScreen'>

            <div className='screen'>

             <img src={screenImg} alt="lockScreenImg" />
              
              <h2>  {lockText} </h2>

               <div className='slide-btn'>
               {
                showSlider ? <LockSlider value={slideVal}  slideInput={slideBtn} width={300}/> : <AiFillUnlock /> 
               }
                      
               </div>

            </div>
       
       {/* <LockSlider/> */}

    </div>
  )
}

export default LockScreen
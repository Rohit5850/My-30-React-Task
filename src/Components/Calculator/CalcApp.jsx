import React, { useState } from 'react'
import Cal from './Cal.css'
import { click } from '@testing-library/user-event/dist/click'
import arrow from './img/arrow.svg';


export default function CalcApp(){
    const [btnValue,setBtnValu] = useState('')

    var val1 = '';
    var val2  = '';

    const showValue = (value)=>{
        console.log("Pressed Button:", value);

        // val1 = btnValue+value;
          

        if(value === '+'){
            console.log("Plus pressed .....")
            val1 = btnValue  
            console.log("If Val 1 :- ", val1) 

            setBtnValu('');

            console.log("If Val 1 :- ", val1)
        }
         else if( value === '='){
            console.log("Else If Val 1 :- ", val1)  
            console.log("Equal is pressed ...");
            val2 = btnValue;
            console.log('bal1 m:- ', val1)
            console.log('bal2 :- ',parseInt(val2))
            const result = parseInt(val1) + parseInt(val2);
            console.log(result.toString())
            setBtnValu(result.toString());
        }else{

            setBtnValu(btnValue+value)
        }

       
       
     

    }
   
    return(
        <div className='cal_app'>
        <div className='heading'>
           <h1>Calculator</h1>
        </div>
          <div className='cal_body'>
          <div className='cal_screen'>
            <Screen inpt_btn={btnValue}/>
          </div>
          <div className='btn_cal'>
             <Button clickBtn={showValue}  />
          </div>
          </div> 
    
    
        </div>
    )
}


function Screen({inpt_btn}){

    return(
        <>
            <input type='text' placeholder='Enter Number' value={inpt_btn}/>
        </>
    )
}


function Button({clickBtn}){

    let buttons = ['1','2','3','+',
                    '4','5','6','-',
                    '7','8', '9','/',
                    '0','*','=','x'  
                   ]


                
    const handleClick = (val)=>{

        

        clickBtn(val)

    }
 
    const button = buttons.map((value,index)=>(
       <button key={index} className='cal_btn' onClick={()=>handleClick(value)} > {value} </button>
    )
    )

    return(
        <>
              {
                button
              }
        </>
    )
}


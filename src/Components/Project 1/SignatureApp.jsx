import React, { useState } from 'react'

const SignatureApp = () => {


    const [sign,setSign] = useState('Name');
    const [date,setDate] = useState('Date of Birth');

    function signature(e){
        setSign(e.target.value);
        
    }

    function calender(e){
        setDate(e.target.value)
            
    }

    function done(){

    console.log("Done !")

    
    setSign("Rohit Mohit")
    setDate("98/98/98")
      
      
        localStorage.setItem('Signature',sign)
        localStorage.setItem('Date', date)

        console.log(localStorage.getItem('Signature'))
        console.log(localStorage.getItem('Date'))

        setSign(localStorage.getItem('Signature'))
        setDate(localStorage.getItem('Date'))
       
        
    }

    
   
  return (
    <div className='signature'>
    
    <div className='cont_heading'>
    <h1>Signature App</h1>
    </div>

    <div className='pageContent'>
    <h1 className='name'>{sign}</h1>
    <h3 className='date_birth'>{date}</h3>

    <p className='text_cont'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
         
    </div>



    <div className='calmnder&sign'>
             <div className='calend'>
                <input type='date' value={date} onChange={(e)=>calender(e)}/>
             </div>
             <div className='sign'>
                  <input type='text'  placeholder='Signature'  onChange={(e)=>signature(e)}/>
             </div>
    </div>  
    <div className='doneBtn'>
        <button className='btn' onClick={()=> done()}>Done!</button>
    </div>
    
    </div>
  )
}

export default SignatureApp
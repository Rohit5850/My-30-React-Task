import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import Testmonial from './Testmonial.css'

const ButtonTest = () => {

    const [testimonial , setTestimonial] = useState('');
    const [item,setItems] = useState('');




    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${testimonial}`)
        .then((response) => response.json())
        .then((json) => setItems(json));
    },[testimonial])


  


  return (
    <div className='testiMonialData'>
    <div className='testi_Btn' style={{marginTop:'20px'}}>
      <button className='test_btn' onClick={()=> setTestimonial('Posts')}>Posts</button>
      <button className='test_btn' onClick={()=> setTestimonial('Users')}>Users</button>
      <button className='test_btn' onClick={()=> setTestimonial('Comments')}>Comments</button>
    </div>
      
      {
        !testimonial ? <h2>Select from above!</h2> : <h2>{testimonial}</h2> 
      }
       
       <div className=''>

       { !item || !Array.isArray(item) ? null :  item.map((items)=>{


           return(
            <div className='item_data' style={{textAlign:'left' , width:'100%' , margin:'0 , auto' , marginBottom:'10px'}}>
            
            <div className='item_body' style={{backgroundColor:'#ff0051' , color: 'white' , lineHeight: '18px' , padding: '4px'}}>
            {!items.title ? null : <p>{items.name}</p> }
            </div>

            <div className='item_body' style={{backgroundColor:'#ff0051' , color: 'white' , lineHeight: '18px' , padding: '4px'}}>
            {!items.title ? null : <p>{items.title}</p> }
            </div>

            <div className='item_body' style={{backgroundColor:'#df415c' , color: 'white' , lineHeight: '18px' , padding: '4px'}}>
            {!items.body ? null : <p>{items.body}</p>} 
            </div>

            <div className='item_body' style={{backgroundColor:'#bb324a' , color: 'white' , lineHeight: '18px' , padding: '4px'}}>
            {!items.body ? null : <span>{items.email}</span>} 
            </div>


            </div>
            
           )
     
               
       })}

       </div>

    </div>
  )
}

export default ButtonTest
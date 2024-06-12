import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRegHeart , FaHeart ,FaRocketchat } from "react-icons/fa"; 

import myCat from './Img/mycat.jpg';

import React, { useState } from "react";




const ClickToLike = () =>{
  
  
  const [like,setLike] = useState(false);
  const [likeCount,setLikeCount] = useState(0)

  console.log(like)

  function likedImg(){

    if(!like){
      setLike(true);
      setLikeCount(1)
    }else{
      setLike(false)
      setLikeCount(0)
    }
      // setLike(!like)
    
       
      
  }

 

  



    return (
        <div className="clickToLike">
             
        <div className='cont_heading'>
          <h1>Click To Like</h1> 
         </div> 

           <div className="app_container">

           <p className="like_count">Like {likeCount}</p>

           <div className="myCat_box">
           <div className="img_top_txt">
              <p>My Cat</p>
           </div>
            <div className="myCat" onDoubleClick={()=>likedImg()} >
            <img src={myCat} alt='mypetCat' />
            </div>
            <div className="img_btm_txt">
            <div className="chat">
            <FaRocketchat />
            </div>
            <div className="heart" onClick={()=>likedImg()}>
            {
              like ?  <FaHeart  /> : <FaRegHeart /> 
            }
            
            </div>
           </div>
           </div>

           </div>

        </div>
    )
   
}



export default ClickToLike;
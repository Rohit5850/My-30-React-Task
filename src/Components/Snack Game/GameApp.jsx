import React, { useEffect, useRef, useState } from 'react'
import game from './game.css'


export default function(){


    
  return (
    <div className='game_app'>
    <h1></h1>
    
    <GameBoard/>

   
    </div>
  )
}


function GameBoard(){

    let [topPos,setTopPost] = useState(0);
    let [leftPos,seLeftPost] = useState(0);

    let [foodTopPost , setFoodTopPost] = useState(0)
    let [foodLeftPost , setFoodLeftPost] = useState(0)

    let launch = useRef()

    let randPostinTop = Math.floor((Math.random()*10))
    let randPostinLeft = Math.floor((Math.random()*10))


    console.log("FoodPostionTopRandom : " + 4*randPostinTop , "FoodPostionLeftRandom : "+ 4*randPostinLeft)
    console.log("Not random ................")
    console.log("FoodPostionTop : " + 4*foodTopPost , "FoodPostionLeft : "+ foodLeftPost)
    console.log("SnackPostionTop : " + topPos , "SnackPostionLeft : "+ leftPos)

    function genrateRandom(){
      setFoodTopPost(randPostinTop)
      setFoodLeftPost(randPostinLeft)

      console.log("FoodPostionTop : " + randPostinTop , "FoodPostionLeft : "+randPostinLeft)
 
    }

    if(topPos == foodTopPost){
      genrateRandom()
    }
    
    console.log(topPos , leftPos)
   
    function setDirection(dir){

      let snackTime = 200;                 
      let count = 0
      

      if(dir == 'up'){

        console.log(launch)

        clearInterval(launch.current)
        console.log("Move Up")
        launch.current = setInterval(()=>{

          topPos = topPos-4

          console.log(topPos)

          setTopPost(topPos) 

          count = count+1

          console.log("Up .....", count)
         
        },snackTime) 

      } 
      
      
      if (dir == 'down'){

        console.log(launch)
        clearInterval(launch.current)
        console.log("Move Down")
        
        launch.current = setInterval(()=>{
          
         topPos = topPos+4

         console.log(topPos)

         setTopPost(topPos)

         count = count+1

         console.log("Down....", count)

        },snackTime)

      }

      if (dir == 'left'){

        console.log(launch)

        clearInterval(launch.current)

        console.log("Move Left")
        
        launch.current = setInterval(()=>{
           
          leftPos = leftPos-4

          seLeftPost(leftPos)

          count = count+1

          console.log("Left....", count)
        },snackTime)

      }


      if(dir == "right"){

        console.log(launch)

        clearInterval(launch.current)

        console.log("Move Right")

        launch.current = setInterval(()=>{
           
          leftPos = leftPos+4

          seLeftPost(leftPos)
 
          count = count+1

          console.log("Right ....", count)

          

        },snackTime)

      }


      if(dir == 'space'){

        let pause = clearInterval(launch.current);

        console.log(launch);

        console.log("Space is clicked ........................................................")
      }

      // console.log(dir)
    }


    document.onkeydown = function(e){

          // console.log("direction", e)
  
      switch(e.key){
      
        case 'ArrowUp' :
          //  console.log("Arrow Up .....")
          
          setDirection('up')
          
        break;

        case 'ArrowDown':
          // console.log("Arrow Down .....")
          
            setDirection('down')
            
         
        break;

        case 'ArrowLeft':
          // console.log("Arrow Left.....")

          
          setDirection("left")
           
          
        break;

        case 'ArrowRight':
          
          setDirection("right")
        break;

        case ' ':
         
        // console.log("Space is clicked ...........................");

        setDirection("space");
        break;

      }
    }
    
   
  

      useEffect(()=>{
        if(topPos >= 48 || topPos <= -48 ){
          
          clearInterval(launch.current);

          document.querySelector(".Popup").style.display = "block";
        
        }

        if(leftPos >= 48 || leftPos <= -48 ){

          clearInterval(launch.current);

          document.querySelector('.Popup').style.display = 'block'
          
        }

      },[topPos,leftPos])


      function restartGame(){
       
        document.querySelector('.Popup').style.display = 'none';
        
        setTopPost(0)
        seLeftPost(0)
      }
  
    return(
        <div className='game_board'>

          <Food top={foodTopPost} left={foodLeftPost}/>
          <Snack top={topPos} left={leftPos}/>

          <RestartPopup restGame={restartGame}/>
        </div>
    )
}


function Snack({top,left}){

    const  snakeBodyPosition = {
        position: 'absolute',
        top: `${50+top}%`,
        left: `${50+left}%`,
        transform: `translate(-50%, -50%)`
    }

    return(
        <div className='snake'>
            <div className='snake-body' style={snakeBodyPosition} />
        </div>
    )
}




function Food({top,left}){

   let foodPosition ={
    position:'absolute',
    top:`${50+top}%`,
    left:`${50+left}%`,
    transform: `translate(-50%, -50%)`,
   }
    
    

  return(

    <div className='food'>
      <div className='snackFood' style={foodPosition} />
    </div>
  )
}


function RestartPopup({restGame}){
 

 
  return(
    <div className='Popup'>

             <h3>Game Over!</h3>
             <button onClick={()=>restGame()}>Restart Game</button>
    </div>
  )
}


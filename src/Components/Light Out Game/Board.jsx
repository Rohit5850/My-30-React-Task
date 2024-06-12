import React, { useState } from 'react'
import Cell from './Cell'
import game from './game.css'

const Board = () => {


    let [board,setBoard] = useState([]);

    function createBoard(){
         for(let x= 0 ; x < Board.defaultProps.nrows ; x++){
               
            let row = []
            for(let y=0 ; y< Board.defaultProps.ncolms ; y++ ){
         
                row.push(Math.random() < Board.defaultProps.lit );

            }
            setBoard.push(row)
         }

        


         return board;
    }


  

    let tablBoard = []

    for(let x=0 ; x < Board.defaultProps.nrows ; x++){

        let row = [];

        for(let y=0 ; y< Board.defaultProps.ncolms ; y++){

            row.push(<Cell key={`${x}-${y}`} isLite={true} />)    
        }

        tablBoard.push(<tr key={x}>{row}</tr> );
    }


  return (
    <div className='lo_game_board'>
    
    <table className='Board'>
    <tbody>
    
    {tablBoard}
 
    </tbody>
    </table>

    
    
    </div>
  )
}


Board.defaultProps = {
    nrows: 5,
    ncolms: 5,
    lit:0.5,
  }

export default Board
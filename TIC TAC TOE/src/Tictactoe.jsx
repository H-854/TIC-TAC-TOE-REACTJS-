import Square from "./Square"
import { useState } from 'react';
import {checkWinner} from './helper'
import "./Tictactoe.css"
export default function Board() {
    const [square,setSquare] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true);
    const [status,setStatus] = useState('Next Player : X')

    function handleClick(i){
        if(checkWinner(square)){
            return setStatus(`Winner : ${checkWinner(square)}`);
        }

        let nextSquares = square.slice()
        if(xIsNext){
            nextSquares[i]='X'
            setStatus('Next Player : O')
        }
        else{
            nextSquares[i]='O'
            setStatus('Next Player : X')
        }
        
        setSquare(nextSquares);
        setXIsNext(!xIsNext);
        if (checkWinner(nextSquares)) {
            setStatus(`Winner: ${checkWinner(nextSquares)}`);
        } else {
            setStatus(`Next Player: ${xIsNext ? 'O' : 'X'}`);
        }
    }

    
    

    return (
        <>
           <div className="outer">
                <h1>Tic-Tac-Toe</h1>
                <div style={{color: "#eaeaea;",fontWeight: "bolder",fontSize:"larger",marginBottom: "1rem"}}>{checkWinner(square) ? `Winner : ${checkWinner(square)}`: status }</div>
                <div className="row">
                    <Square value={square[0]} onSquareClick={()=>handleClick(0)}/>
                    <Square value={square[1]} onSquareClick={()=>handleClick(1)}/>
                    <Square value={square[2]} onSquareClick={()=>handleClick(2)}/>
                </div>
                <div className="row">
                    <Square value={square[3]} onSquareClick={()=>handleClick(3)}/>
                    <Square value={square[4]} onSquareClick={()=>handleClick(4)}/>
                    <Square value={square[5]} onSquareClick={()=>handleClick(5)}/>  
                </div>
                <div className="row">
                    <Square value={square[6]} onSquareClick={()=>handleClick(6)}/>
                    <Square value={square[7]} onSquareClick={()=>handleClick(7)}/>
                    <Square value={square[8]} onSquareClick={()=>handleClick(8)}/>
                </div>
           </div>
        </>
    )
}
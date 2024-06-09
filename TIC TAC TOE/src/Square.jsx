import "./Square.css"
import { useState } from 'react';

export default function Square({value,onSquareClick}){
    return (
        <button className="square" type="button" onClick={onSquareClick}>{value}</button>
    )
}
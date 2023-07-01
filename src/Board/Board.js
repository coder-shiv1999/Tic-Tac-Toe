import React,{ useState } from "react";
import Square from "./Square";
import './Board.css';
import Button from "./Button";



const Board = () => {

    const [state,setState] = useState(Array(9).fill(null));
    const [isxturn,setXturn] = useState(true);
    let chance = isxturn ? "X" : "O";
    const checkWinner = () => {
        const winnerlogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let logic of winnerlogic){
            const [a,b,c]  = logic;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c])
                return state[a];
        }
        return false;
    }

const isWinner = checkWinner();
    
    const putvalue = (index) => {
        if(state[index] !== null){
            return;
        }
        const copyState = [...state];
        
        if(!isWinner){
            copyState[index] = isxturn ? "X" : "O";
            setXturn(!isxturn);
            setState(copyState);
        }
        
    };
    const playAgain = () =>{
        setState(Array(9).fill(null));
    }
    
    return(
        <div className="Board">
            {isWinner? 
                (<>
                    <h2>{isWinner} won</h2>
                </>):
                (<>
                    <h2>{chance}'s Move</h2>
                </>)}
            <div className="square-row">
                <Square value = { state[0] } onClick = {() => putvalue(0)} />
                <Square value = { state[1] } onClick = {() => putvalue(1)} />
                <Square value = { state[2] } onClick = {() => putvalue(2)} />
            </div>
            <div className="square-row">
                <Square value = { state[3] } onClick = {() => putvalue(3)} />
                <Square value = { state[4] } onClick = {() => putvalue(4)} />
                <Square value = { state[5] } onClick = {() => putvalue(5)} />
            </div>
            <div className="square-row">
                <Square value = { state[6] } onClick = {() => putvalue(6)} />
                <Square value = { state[7] } onClick = {() => putvalue(7)} />
                <Square value = { state[8] } onClick = {() => putvalue(8)} />
            </div>  
           <Button onClick = { playAgain } title = {"Restart"} />
        </div>
    );
    
}
export default Board;
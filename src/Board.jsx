import React, { useState } from 'react';
import Buttons from './Buttons';

function Board(props){
  
const [disabled, setDisabled]= useState(true)

const randomNum=Math.floor(Math.random()*99)
const [number , setNumber]= useState(randomNum);
const [count, setCount] = useState(0)
const currentUser=localStorage.getItem("currentUser")
console.log({props})
 return(
  <>
 <div>
   <h1>name:  {props.obj.name}</h1>
    <h2>randomNum: {number}</h2>
    <h2>counter: {count}</h2>
    </div>
    <div>
    <Buttons randomNum={number} length={props.length} setNumber={setNumber} count={count} setIndex={props.setIndex} setCount={setCount} id={props.obj.id} index={props.index} />
    <h2>score: {props.obj.score}</h2>

</div>
</>
 )
}
export default Board;
import React, { useState } from 'react';
import Buttons from './Buttons';
import Win from './Win';

function Board(props){
  


const randomNum=Math.floor(Math.random()*99)
const [number , setNumber]= useState(randomNum);
const [count, setCount] = useState(0)
const [score,setScore]=useState(props.obj.score);
const [win,setWin]=useState(false)

console.log({props})
 return(
  <>
 <div>
   <h1>name:  {props.obj.name}</h1>
    <h2>randomNum: {number}</h2>
    <h2>counter: {count}</h2>
    { win==false? <Buttons randomNum={number} length={props.length} index={props.index} setIndex={props.setIndex} setNumber={setNumber} count={count} id={props.obj.id} setCount={setCount} obj={props.obj} setScore={setScore} setWin={setWin} /> : <Win setNumber={setNumber} setCount={setCount} obj={props.obj} setUserarr={props.setUserarr} setWin={setWin}/>}
   
    <h2>score: {Array.isArray(score)&&score.join(",")} </h2>

</div>
</>
 )
}
export default Board;
import React, { useState } from 'react';
import Buttons from './Buttons';

function Board(){
  

const randomNum=Math.floor(Math.random()*99)
const [number , setNumber]= useState(randomNum);
const [count, setCount] = useState(0)
const currentUser=localStorage.getItem("currentUser")
 return(
 <div>
    <h1>name: {JSON.parse(currentUser).name}</h1>
    <h2>randomNum: {number}</h2>
    <h2>counter: {count}</h2>
    <Buttons randomNum={number} setNumber={setNumber} count={count} setCount={setCount}/>
    <h2>score: {JSON.parse(currentUser).score}</h2>

</div>
 )
}
export default Board;
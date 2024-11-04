import React, { useState } from 'react';
import Buttons from './Buttons';
import Win from './Win';

function Board(props) {


const num= Math.floor(Math.random() * 99)
  const randomNum =99
  const [number, setNumber] = useState(randomNum);
  const [count, setCount] = useState(0)
  const [score, setScore] = useState(props.obj.score);
  const [win, setWin] = useState(false)
  props.setLength(()=>props.userarr.length)
  console.log(props.i)
  return (
    <>
      <div>
        <h1>name:  {props.obj.name}</h1>
        <h2>randomNum: {number}</h2>
        <h2>counter: {count}</h2>
        {win === false ?
         <Buttons randomNum={number}  i={props.i} userarr={props.userarr} length={props.length} index={props.index} setIndex={props.setIndex} setNumber={setNumber} count={count} id={props.obj.id} name={props.obj.name} setCount={setCount} obj={props.obj} setScore={setScore} setWin={setWin} />
         : <Win setNumber={setNumber} setCount={setCount} userarr={props.userarr} length={props.length} setLength={props.setLength} obj={props.obj} setUserarr={props.setUserarr} setWin={setWin} setIndex={props.setIndex}/>}

        <h2>score: {Array.isArray(score) && score.join(",")} </h2>

      </div>
    </>
  )
}
export default Board;
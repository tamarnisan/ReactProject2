import React, { useState } from 'react'

function Buttons(props){

return(
<div>
<button onClick={()=>{props.setNumber(props.randomNum+1)
props.setCount(props.count+1)}}>+1</button>
<button onClick={()=>{props.setNumber(props.randomNum-1)
 props.setCount(props.count+1)}}>-1</button>
<button onClick={()=>{props.setNumber(props.randomNum*2)
    props.setCount(props.count+1)}}>*2</button>
<button onClick={()=>{props.setNumber(props.randomNum/2)
    props.setCount(props.count+1)}}>/2</button>
</div>
)}
export default Buttons;
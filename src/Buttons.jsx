import React, { useState } from 'react'

function Buttons(props){

    console.log("buton props", props)
return(
<div>
<button disabled= {props.id===props.index ? false : true} onClick={()=>
{props.setNumber(props.randomNum+1);
props.setCount(prev => prev +1);
props.setIndex((prev) => prev===props.length? prev=0 :prev+1);
console.log(props.index)
}}
>+1</button>

<button disabled={props.id===props.index ? false : true} onClick={()=>{props.setNumber(props.randomNum-1)
 props.setCount(props.count+1);
 props.setIndex((prev) => prev===props.length-1? prev=0:prev +1)}}>-1</button>
<button disabled={props.id===props.index ? false : true} onClick={()=>{props.setNumber(props.randomNum*2)
    props.setCount(prev => prev +1);
    props.setIndex((prev) => prev===props.length? prev=0:prev +1)}}>*2</button>
<button disabled={props.id===props.index ? false : true} onClick={()=>{props.setNumber(props.randomNum/2)
    props.setCount(prev => prev +1);
    props.setIndex((prev) => prev===props.length? prev=0:prev +1)}}>/2</button>
    
</div>
)}
export default Buttons;
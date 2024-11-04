import React, { useState } from 'react'

function Buttons(props){

    function updateuser(obj){
        const arr=JSON.parse(localStorage.getItem("arrayUsers"));
        for(let i=0;i<arr.length;i++){
            if(arr[i].name==obj.name){
                if(Array.isArray(arr[i].score)) 
                    arr[i].score.push( props.count)
                else arr[i].score=[props.count];
                props.setScore(arr[i].score)
            }
        }
        localStorage.setItem("arrayUsers", JSON.stringify(arr))
    }

    function ishundrend(num){
        
        if(num==100){
            updateuser(props.obj)
            props.setWin(true);
        }
    }

    
return(
<div>
<button onClick={()=>{props.setNumber(props.randomNum+1)
props.setCount(props.count+1) 
ishundrend(props.randomNum+1)}}>+1</button>
<button onClick={()=>{props.setNumber(props.randomNum-1)
 props.setCount(props.count+1)
 ishundrend(props.randomNum-1)}}>-1</button>
<button onClick={()=>{props.setNumber(props.randomNum*2)
    props.setCount(props.count+1)
    ishundrend(props.randomNum*2)}}>*2</button>
<button onClick={()=>{props.setNumber(props.randomNum/2)
    props.setCount(props.count+1)
    ishundrend(props.randomNum/2)}}>/2</button>
</div>
)}
export default Buttons;
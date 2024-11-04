import React, { useState } from 'react';

function Win(props){
    function quit(obj){
        const arr=JSON.parse(localStorage.getItem("arrayUsers"));
        for(let i=0;i<arr.length;i++){
            if(arr[i].name==obj.name){
                delete arr[i];
            }
        }
        localStorage.setItem("arrayUsers", JSON.stringify(arr))
        props.setUserarr(arr);
        props.setWin(false);
    }

    function replay(){
        props.setNumber(Math.floor(Math.random()*99));
        props.setCount(0);
        props.setWin(false);
    }

    return(
        <>
        {alert(props.obj.name+" is the winner!!")}
        <button onClick={()=>quit(props.obj)}>quit</button>
        <button onClick={()=>replay()}>replay</button>
        </>
    )
}

export default Win;
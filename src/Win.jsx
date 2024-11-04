
import React, { useState } from 'react';

function Win(props) {
    console.log(props);
    function quit() {
        const arr = JSON.parse(localStorage.getItem("arrayUsers"));
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name == props.obj.name) {
                arr.splice(i, 1);
            }
        }
        props.setUserarr(arr);
        props.setLength((prev) => { return prev - 1 })        
        props.setWin(false);
        props.setIndex(prev=>prev-1)
    
      
    }

    function replay() {
        props.setNumber(Math.floor(Math.random() * 99));
        props.setCount(0);
        props.setWin(false);
    }

    return (
        <>
            {alert(props.obj.name + " is the winner!!")}
            <button onClick={() => quit()}>quit</button>
            <button onClick={() => replay()}>replay</button>
        </>
    )
}

export default Win;
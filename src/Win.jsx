import React, { useState } from 'react';

function Win(props){
    console.log(props );
    function quit(){
        const arr=JSON.parse(localStorage.getItem("arrayUsers"));
        for(let i=0;i<arr.length;i++){
            if(arr[i].name==props.obj.name){
                arr.splice(i,1);
            }
        }
        let arr2=props.userarr;
        props.setUserarr(arr);
        props.setWin(false);
        for(let i=0;i<props.userarr.length;i++){
            arr2[i].id=i;
        }
        props.setIndex(props.index-1);
        props.setUserarr( arr2)
    }

    function replay(){
        props.setNumber(Math.floor(Math.random()*99));
        props.setCount(0);
        props.setWin(false);
    }

     const myInterval=setInterval(() => {
        alert(props.obj.name+" is the winner!!")
        clearInterval(myInterval);
     }, 800);

    return(
        <>
        <button onClick={()=>quit()}>quit</button>
        <button onClick={()=>replay()}>replay</button>
    
        </>
    )
}

export default Win;
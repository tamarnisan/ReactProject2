import React, { useState } from 'react'
import Board from './Board'
function LogIn(){
    
    const [currentName, setCurrentName] =useState();
    const [currentPassword, setCurrentPassword] =useState();
   
   
   
    function submit(obj){
       
    let array1=localStorage.getItem("arrayUsers");
    const array= JSON.parse(array1)
    if(!Array.isArray(array)){
        obj.score=2;
       
        localStorage.setItem("currentUser", JSON.stringify(obj))
        localStorage.setItem("arrayUsers",JSON.stringify([obj]))
        alert("welcome")
    
    }
   else{ for(let i=0;i<array.length;i++){
        if(obj.name===array[i].name){
          
            localStorage.setItem("currentUser", JSON.stringify(array[i]))
            alert("hi "+ obj.name)
            return;
        }
    }
    array.push(obj);
    obj.score=7;
    
    localStorage.setItem("arrayUsers",JSON.stringify(array))
    localStorage.setItem("currentUser", JSON.stringify(obj))
    alert("welcome")
   }
}
    return(
    <div>
       
    <input type="text" placeholder="שם משתמש:" onChange={(e)=> setCurrentName(e.target.value)}></input>
    <input type='password' placeholder="סיסמא" onChange={(e)=> setCurrentPassword(e.target.value)}></input>
    <input onClick={()=>submit({name:currentName,password:currentPassword})} type="submit" value="Submit"></input>
    <Board/>
   
    
    </div>
    )
}
export default LogIn
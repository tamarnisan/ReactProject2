import React, { useState } from 'react'
import Board from './Board'
function LogIn(){
    
    const [currentName, setCurrentName] =useState();
    const [currentPassword, setCurrentPassword] =useState();
    localStorage.setItem("arrayUsers",JSON.stringify([]))
   
    function submit(obj){
       
    let array1=localStorage.getItem("arrayUsers");
    const array= JSON.parse(array1)
    if(array.length===0){
        localStorage.setItem("arrayUsers",JSON.stringify([obj]))
        alert("welcome")
    
    }
   else{ for(let i=0;i<array.length;i++){
        if(obj.name===array[i].name){
            alert("hi"+ obj.name)
            return;
        }
    }
    array.push(obj);
    localStorage.setItem("arrayUsers",JSON.stringify(array))
    alert("welcome")
   }
}
    return(
    <div>
       
    <input type="text" placeholder="שם משתמש:" onChange={(e)=> setCurrentName(e.target.value)}></input>
    <input type='password' placeholder="סיסמא" onChange={(e)=> setCurrentPassword(e.target.value)}></input>
    <input onClick={()=>submit({name:currentName,password:currentPassword})} type="submit" value="Submit"></input>
    {localStorage.setItem("currentUser", JSON.stringify(currentName))}
   
    <Board/>
    </div>
    )
}
export default LogIn
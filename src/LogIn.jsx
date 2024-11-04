import React, { useState } from 'react'
import Board from './Board'
function LogIn(props) {

    const [currentName, setCurrentName] = useState();
    const [currentPassword, setCurrentPassword] = useState();
    const[index, setIndex]=useState(0);
    // const [userarr, setUserarr] = useState(JSON.parse(localStorage.getItem("arrayUsers")));
    const [length, setLength] =useState(0)
    const [arrayPlayers, setArrayPLayers]= useState([])
    console.log('arrayPlayers: ', arrayPlayers);

    function submit(obj) {
        let arr= JSON.parse(window.localStorage.getItem("arrayUsers"));
        const array2=arrayPlayers;
        if (Array.isArray(arr)) {
            for (let i = 0; i < arr.length; i++) {
                if (obj.name === arr[i].name) {
                    alert("hi " + obj.name)
                   setArrayPLayers((prev)=>[...prev,obj])
                 
                    return;
                }
            }}
            alert("please sign up!")

        
          }
  
    return (
        <div>

            <input type="text" placeholder="שם משתמש:" onChange={(e) => setCurrentName(e.target.value)}></input>
            <input type='password' placeholder="סיסמא" onChange={(e) => setCurrentPassword(e.target.value)}></input>
            <input onClick={() => submit({ name: currentName, password: currentPassword })} type="submit" value="Submit"></input>
            {localStorage.setItem("currentUser", JSON.stringify(currentName))}
            <div id='container'>{Array.isArray(arrayPlayers) && arrayPlayers.map((user, i) => (<Board obj={user} i={i}setLength={setLength} key={user.name} setUserarr={setArrayPLayers} userarr={arrayPlayers} length={length}  index={index} setIndex={setIndex} />))}  </div>
        </div>
    )
}
export default LogIn
import React, { useState } from 'react'
import Board from './Board'
function LogIn() {

    const [currentName, setCurrentName] = useState();
    const [currentPassword, setCurrentPassword] = useState();
    const [userarr, setUserarr] = useState(JSON.parse(localStorage.getItem("arrayUsers")));    

    function submit(obj) {
        const array1 = localStorage.getItem("arrayUsers");
        const arr = JSON.parse(array1)
        if (!Array.isArray(arr)) {
            localStorage.setItem("arrayUsers", JSON.stringify([obj]))
            setUserarr([obj])
            alert("welcome")
            return

        }
        else {
            for (let i = 0; i < arr.length; i++) {
                if (obj.name === arr[i].name) {
                    setUserarr(arr)
                    alert("hi " + obj.name)
                    return;
                }
            }
            arr.push(obj);
            localStorage.setItem("arrayUsers", JSON.stringify(arr))
            setUserarr(arr)
            alert("welcome")
        }
    }
    return (
        <div>

            <input type="text" placeholder="שם משתמש:" onChange={(e) => setCurrentName(e.target.value)}></input>
            <input type='password' placeholder="סיסמא" onChange={(e) => setCurrentPassword(e.target.value)}></input>
            <input onClick={() => submit({ name: currentName, password: currentPassword })} type="submit" value="Submit"></input>
            {localStorage.setItem("currentUser", JSON.stringify(currentName))}
            {Array.isArray(userarr) && userarr.map((user) => (<Board obj={user} key={user.name} setUserarr={setUserarr}/>))}

        </div>
    )
}
export default LogIn
import React, { useState } from 'react'
import Board from './Board'
function LogIn() {

    const [currentName, setCurrentName] = useState();
    const [currentPassword, setCurrentPassword] = useState();
    const[index, setIndex]=useState(0);
    const [userarr, setUserarr] = useState(JSON.parse(localStorage.getItem("arrayUsers")));
    console.log('userarr: ', userarr);

    function submit(obj) {
        const array1 = localStorage.getItem("arrayUsers");
        const arr = JSON.parse(array1)
        if (!Array.isArray(arr)) {
            obj.score=2;
            obj.id=0;
            localStorage.setItem("currentUser", JSON.stringify(obj))
            localStorage.setItem("arrayUsers", JSON.stringify([obj]))
          
            setUserarr([obj])
            alert("welcome")
            return

        }
        else {
            for (let i = 0; i < arr.length; i++) {
                if (obj.name === arr[i].name) {
                    setUserarr(arr)
                    localStorage.setItem("currentUser", JSON.stringify(arr[i]))
                    alert("hi " + obj.name)
                    return;
                }
            }
            arr.push({...obj, id: arr.length});
            console.log('arr: ', arr);
            obj.score=7;
            localStorage.setItem("arrayUsers", JSON.stringify(arr))
            localStorage.setItem("currentUser", JSON.stringify(obj))
            setUserarr(arr)
            alert("welcome")
        }
      
        // setUserarr(userarr.map((obj,index)=> ({...obj, id: index})))
    }
  
    return (
        <div>

            <input type="text" placeholder="שם משתמש:" onChange={(e) => setCurrentName(e.target.value)}></input>
            <input type='password' placeholder="סיסמא" onChange={(e) => setCurrentPassword(e.target.value)}></input>
            <input onClick={() => submit({ name: currentName, password: currentPassword })} type="submit" value="Submit"></input>
            {localStorage.setItem("currentUser", JSON.stringify(currentName))}
            {Array.isArray(userarr) && userarr.map((user) => (<Board obj={user} key={user.name} setUserarr={setUserarr} userarr={userarr} length={userarr.length} index={index} setIndex={setIndex} />))}
            
            {console.log(userarr)}
        </div>
    )
}
export default LogIn
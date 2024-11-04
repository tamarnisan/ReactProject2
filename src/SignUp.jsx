import LogIn from './LogIn';
import React, { useState } from 'react';
function SignUp(){
    const [bool, setBool]=useState(false)
    const [currentNameS, setCurrentNameS] = useState();
    const [currentPasswordS, setCurrentPasswordS] = useState();
    const [userarr, setUserarr] = useState(JSON.parse(localStorage.getItem("arrayUsers")));
    function submit(obj) {
        const array1 = localStorage.getItem("arrayUsers");
     
        const arr = JSON.parse(array1)
        if (!Array.isArray(arr)) {
            obj.score=[];
            localStorage.setItem("arrayUsers", JSON.stringify([obj]))
            setBool(true);
            setUserarr(obj)
            alert("welcome")
            return

        }
        else {
            for (let i = 0; i < arr.length; i++) {
                if (obj.name === arr[i].name) {
               alert("שם משתמש תפוס!")
                    return;
                }
            }
            arr.push(obj);
            obj.score=[];
            localStorage.setItem("arrayUsers", JSON.stringify(arr))
            setBool(true);
            alert("welcome")
        }
          }
return(
  <>
   { bool===false? <><div><h1>Sign Up!</h1></div><input type="text" placeholder="שם משתמש:" onChange={(e) => setCurrentNameS(e.target.value)}></input>
    <input type='password' placeholder="סיסמא" onChange={(e) => setCurrentPasswordS(e.target.value)}></input>
    <input onClick={() => submit({ name: currentNameS, password: currentPasswordS })} type="submit" value="Submit"></input><br></br>
    </> :<><h1>Add Player</h1><LogIn /></>}
    </>
    )
}
export default SignUp;
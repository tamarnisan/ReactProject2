import LogIn from "./LogIn";
import LeaderBoard from './LeaderBoard';
import { useState } from "react";
import SignUp from "./SignUp";

function NavBar() {
    const [showLogIn, setShowLogIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLeaderBoard, setShowLeaderBoard] = useState(false);

    return (
        <div>
            {showLogIn && <div><h1>Add Player</h1><LogIn /></div>}
            {showLeaderBoard&&  <LeaderBoard />}
            {showSignUp&& <SignUp/>}
            <button onClick={() =>{ setShowLogIn(true); setShowLeaderBoard(false); setShowSignUp(false)}}>Add Player</button>
            <button onClick={()=>{setShowSignUp(true); setShowLeaderBoard(false); setShowLogIn(false)}}>SignUp</button>
            <button onClick={() =>{ setShowLeaderBoard(true); setShowLogIn(false); setShowSignUp(false)}}>LeaderBoard</button>
        </div>
    )
}
export default NavBar;
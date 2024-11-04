import LogIn from "./LogIn";
import LeaderBoard from './LeaderBoard';
import { useState } from "react";
function NavBar() {
    const [showLogIn, setShowLogIn] = useState(false);
    const [showLeaderBoard, setShowLeaderBoard] = useState(false);

    return (
        <div>
            {showLogIn && <LogIn />}
            {showLeaderBoard&&<LeaderBoard />}
            <button onClick={() =>{ setShowLogIn(true); setShowLeaderBoard(false)}}>LogIn</button>
            
            <button onClick={() =>{ setShowLeaderBoard(true); setShowLogIn(false)}}>LeaderBoard</button>
        </div>
    )
}
export default NavBar;
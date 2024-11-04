import React, { useState } from 'react';



function LeaderBoard() {
    let Array = localStorage.getItem("arrayUsers");
    let usersArray = JSON.parse(Array)



    let min4 = 99999;
    let min5 = 999999;
    let min6 = 9999;
    let index1 = 0

    for (let i = 0; i < usersArray.length; i++) {
        for (let j = 0; j < usersArray[i].score.length; j++)
            if (usersArray[i].score[j] < min4) {
                min4 = usersArray[i].score[j];
                index1 = i

            }

    }



    let index2 = 0
    for (let i = 0; i < usersArray.length; i++) {
        for (let j = 0; j < usersArray[i].score.length; j++) {
            if (usersArray[i].score[j] < min5 && usersArray[i].score[j] !== min4) {
                min5 = usersArray[i].score[j]
                index2 = i

            }

        }
    }


    let index3 = 0
    for (let i = 0; i < usersArray.length; i++) {
        for (let j = 0; j < usersArray[i].score.length; j++) {
            if (usersArray[i].score[j] < min6 && usersArray[i].score[j] !== min4 && usersArray[i].score[j] !== min5) {


                min6 = usersArray[i].score[j]
                index3 = i
            }
        }
    }

    console.log(min4)
    console.log(min5)
    console.log(min6)


    return (
        <div>
            <h1>Top 3 SCORES:</h1>
            <div>
                <h2>{usersArray[index1].name} : {min4}</h2>
                <h2>{usersArray[index2].name} : {min5}</h2>
                <h2>{usersArray[index3].name} : {min6}</h2>
            </div>
        </div>
    )

}
export default LeaderBoard;
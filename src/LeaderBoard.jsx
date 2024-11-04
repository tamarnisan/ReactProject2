import React, { useState } from 'react';

localStorage.setItem("mini1",JSON.stringify(999))
localStorage.setItem("mini2",JSON.stringify(999))
localStorage.setItem("mini3",JSON.stringify(999))

function LeaderBoard(){
let Array= localStorage.getItem("arrayUsers");
let usersArray=JSON.parse(Array)



const[mini1,setmin1]=useState(JSON.parse(localStorage.getItem("mini1")))
const[mini2,setmin2]=useState(JSON.parse(localStorage.getItem("mini2")))
const[mini3,setmin3]=useState(JSON.parse(localStorage.getItem("mini3")))

// let min=99999;
// let min2=999999;
// let min3=9999;
let index1=0
for(let i=0; i<usersArray.length;i++){
    for(let j=0;j<usersArray[i].score.length;j++)
    if(usersArray[i].score[j]<mini1){
        setmin1(usersArray[i].score[j])
        localStorage.setItem("mini1",JSON.stringify(usersArray[i].score[j]))
        // min=usersArray[i].score[j]
        index1=i
    }

}


let index2=0
for(let i=0; i<usersArray.length;i++){
    for(let j=0;j<usersArray[i].score.length;j++){
        if(usersArray[i].score[j]<mini2&&usersArray[i].score[j]!==mini1){
            setmin2(usersArray[i].score[j])
            localStorage.setItem("mini2",JSON.stringify(usersArray[i].score[j]))
            // min2=usersArray[i].score[j]
            index2=i
        }
    
    }
}
let index3=0
for(let i=0; i<usersArray.length;i++){
    for(let j=0;j<usersArray[i].score.length;j++){
        if(usersArray[i].score[j]<mini2&&usersArray[i].score[j]!==mini1&&usersArray[i].score[j]!==mini2){
            setmin3(usersArray[i].score[j])
            localStorage.setItem("mini3",JSON.stringify(usersArray[i].score[j]))
            // min3=usersArray[i].score[j]
            index3=i
        }
    }
}
console.log(mini1)
console.log(mini2)
console.log(mini3)


return(
    <div>
        <h1>Top 3 best SCORE:</h1>
        <div>
            <h2>{usersArray[index1].name} : {mini1}</h2>
            <h2>{usersArray[index2].name} : {mini2}</h2>
            <h2>{usersArray[index3].name} : {mini3}</h2>
        </div>
    </div>
)

}
export default LeaderBoard;
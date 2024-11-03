
function LeaderBoard(){
let Array= localStorage.getItem("arrayUsers");
let usersArray=JSON.parse(Array)


let min=99999;
let index1=0
for(let i=0; i<usersArray.length;i++){

    if(usersArray[i].score<min){
        min=usersArray[i].score
        index1=i
    }

}

let min2=999999;
let index2=0
for(let i=0; i<usersArray.length;i++){
    if(usersArray[i].score<min2&&usersArray[i].score!==min){
        min2=usersArray[i].score
        index2=i
    }

}
let min3=9999;
let index3=0
for(let i=0; i<usersArray.length;i++){
    if(usersArray[i].score<min2&&usersArray[i].score!==min&&usersArray[i].score!==min2){
        min2=usersArray[i].score
        index3=i
    }

}
return(
    <div>
        <h1>Top 3 best SCORE:</h1>
        <div>
            <h2>{usersArray[index1].name} : {min}</h2>
            <h2>{usersArray[index2].name} : {min2}</h2>
            <h2>{usersArray[index3].name} : {min3}</h2>
        </div>
    </div>
)

}
export default LeaderBoard;
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const generateRandom = () =>{
    const options = ["rock","paper","scissor"];
    const rand = Math.floor(Math.random()*3);
    return options[rand];
}

const playGame=(userChoice) =>{
    const compChoice = generateRandom();
    findWinner(compChoice,userChoice);
}


choices.forEach(choice=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})

const findWinner = (compChoice,userChoice) => {
    if(userChoice===compChoice){
        draw();
    }
    if((userChoice==="rock" && compChoice==="paper")||
    (userChoice==="paper" && compChoice==="scissor")||
    (userChoice==="scissor" && compChoice==="rock")){
        userLose(userChoice,compChoice);
    }else if((userChoice==="rock" && compChoice==="scissor")||
    (userChoice==="paper" && compChoice==="rock")||
    (userChoice==="scissor" && compChoice==="paper")){
        userWin(userChoice,compChoice);
    }
}

const draw=()=>{
    msg.innerHTML = "Draw!";
    msg.style.background = "#0b001a";
}

const userLose = (userChoice,compChoice) =>{
    msg.innerHTML = `You Lose! ${compChoice} beats ${userChoice}`;
    msg.style.background = "red";
    compScore++;
    document.getElementById("comp-score").innerHTML = compScore;
}
const userWin = (userChoice,compChoice) =>{
    console.log("Fuck")
    msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.background = "green";
    userScore++;
    document.getElementById("user-score").innerHTML = userScore;
}


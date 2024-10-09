let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["rock","paper", "scisor"];
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];
;    //rock paper scisor
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "oops Game Draw";
    msg.style.backgroundColor = "yellow";
}

const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("congratulation you win");
        msg.innerText = "congo you win";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        console.log("sorry you lost");
        msg.innerText = "sorry you lost";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genComputerChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        //draw
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scisor" ? false : true;
        } else{
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }

};


choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);

    });
});
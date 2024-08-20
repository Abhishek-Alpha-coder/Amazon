let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#computer-score");


const gencompchoice = () => {
    const option = ["rock","paper","scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx];

};

const drawgame = () => {
    msg.innerText = "Game was draw .Play again.";
    msg.style.backgroundColor = "Black"

};

const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin){
        userscore++;
        userscorePara.innerText  = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        
    }else {
        computerscore++;
        compscorePara.innerText = computerscore;
        msg.innerText = `You Lose! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
        
    }
}



const playgame = (userchoice) => {
    console.log("user choice =",userchoice);
    //generate computer choices -> modular programming - reusable program
    const compchoice = gencompchoice();
    console.log("computer choice =",compchoice);

    if(userchoice == compchoice){
        //draw game
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            //scissor, paper
            userwin = compchoice === "paper" ? false: true;
        }else if (userchoice === "paper"){
            //rock,scisdor
            userwin = compchoice === "scissor" ? false: true;
        }else{
            //rock,paper
            userwin = compchoice === "rock" ? false: true;
        }
        showwinner(userwin, userchoice , compchoice);
     }
};




choices.forEach((choice) => {
    console.log(choices);
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        //console.log("choice was clicked",userchoice);
        playgame(userchoice);
    })
});
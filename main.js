/*  ROCK, PAPER SCISSORS GAME ENGINE JS */


//player DOM selectors
const playerOneChoice = document.querySelectorAll(".choose")
//game function 
 const gamePlay = function(){
    //  navigate DOM player choices - {a for loop}
    /* FOR LOOP  */
    for (let i = 0; i < playerOneChoice.length; i++){
        let plresult = playerOneChoice[i].textContent;
            playerOneChoice[i].addEventListener('click', (e)=>{
            document.querySelector(".plchoice").textContent = plresult;

    // Randomize computer choice using math random function && displaying choices to DOM
    // computer choices {array}
    const computerChoice = ["rock", "paper", "scissors"];
        let computer = computerChoice[Math.floor(Math.random () * computerChoice.length)];
        console.log(computer);

        document.querySelector(".quit").textContent = "Reset Score"
        //sending comp. choice to DOM
        document.querySelector(".cpchoice").textContent = computer;

        // declaring and sending player choice to DOM
        let playerone = document.querySelector(".plchoice").textContent;

// decision tree
    let resultBe = computer === playerone ? "Tie Game": computer === "rock" && playerone === "scissors" ?  "computer wins": computer === "paper" && playerone === "rock" ?  "computer wins" : computer === "scissors" && playerone === "paper" ?  "computer wins" 
    : "player One wins"
    
    //Sending result to DOM
    document.querySelector(".outcome").textContent = resultBe;
    
 // score variables 
    let computerScore = 0;
    let playeroneScore = 0;
    let tieGame = 0;

    // Determining winner - (if statements)
    if(resultBe === "Tie Game"){
        playeroneScore+=.5;
        computerScore+=.5;
        tieGame++;
    }else if(resultBe === "computer wins"){
        computerScore++;
    }else if(resultBe === "player One wins"){
        playeroneScore++;
    }
    // setting computer score storage
    const getComputerStore = localStorage.getItem("computerScore")
    const total = Number(getComputerStore) + Number(computerScore);
    const  computerStore = localStorage.setItem("computerScore", total);
    
    //playerOne score storage
    const getplayerStore = localStorage.getItem("playerScore")
    const playerTotal = Number(getplayerStore) + Number(playeroneScore);
    const  playerStore = localStorage.setItem("playerScore", playerTotal);

    //playerOne score storage
    const gettieStore = localStorage.getItem("tieStore")
    const tieTotal = Number(gettieStore) + Number(tieGame);
    const  tieStore = localStorage.setItem("tieStore", tieTotal);
    //Displaying scores to the  DOM
    document.querySelector(".computer-score").textContent = localStorage.getItem("computerScore");
    document.querySelector(".player0ne-score").textContent = localStorage.getItem("playerScore");
    document.querySelector(".tie-score").textContent = localStorage.getItem("tieStore") + " Time(s)";

///////////////////ADDITIONS///////
        if(localStorage.getItem("computerScore") > localStorage.getItem("playerScore")) {
            document.querySelector(".leader").textContent = "Computer leads"
        }else if(localStorage.getItem("computerScore") < localStorage.getItem("playerScore")){
            document.querySelector(".leader").textContent = "Player One leads"
        }
        else if(localStorage.getItem("computerScore") === localStorage.getItem("playerScore")){
            document.querySelector(".leader").textContent = "";
        }

        //// times game played
        let totalPlayed = Number(localStorage.getItem("computerScore")) + Number(localStorage.getItem("playerScore"));

        document.querySelector(".played").textContent = ` ${totalPlayed} Time(s)`;


     /*  END OF GAME FUNC... */
})
    /* END OF FOR LOOP */
}
};
 // Calling game function

gamePlay();

//reset score
const resetScore = document.querySelector(".quit");
resetScore.addEventListener("click", (e)=>{
   localStorage.clear();
   resetScore.textContent = "done";
    document.querySelector(".computer-score").textContent = "0"
    document.querySelector(".player0ne-score").textContent = "0"
    document.querySelector(".tie-score").textContent =  "0";
    document.querySelector(".cpchoice").textContent = "";
    document.querySelector(".plchoice").textContent = "";
    document.querySelector(".outcome").textContent = "Rock Paper or Scissors?";
    document.querySelector(".leader").textContent = "";
    document.querySelector(".played").textContent = "";
});

/* END OF CODE... */


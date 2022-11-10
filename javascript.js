let playerScore = 0
let computerScore = 0
let tie = 0

for (let i = 0; i < 5; i++) {
    
    let randomNumber = Math.floor(Math.random()* 100) + 1;


    function getComputerChoice(rock,paper,scissors) {
        if (randomNumber <= 33) {
            var rock = "rock";
            return rock;
        } else  if(randomNumber >= 34 && randomNumber <= 67) {
            var paper = "paper";
            return paper;
        } else if(randomNumber >=67)
            var scissors = "scissors"
            return scissors;
    }
    const computerSelection = getComputerChoice();
    var playerSelection = prompt("Rock, Paper, or Scissors").toLowerCase()
    if (i <= 0) {
        console.log("Round 1")
    } else if(i <= 1) {
        console.log("Round 2") 
    } else if(i <= 2) {
        console.log("Round 3") 
    } else if(i <= 3) {
        console.log("Round 4") 
    } else if(i <= 4) {
        console.log("Round 5") 
    }
        

        
    function playRound(playerSelection, computerSelection) {
        if (playerSelection == "rock" && computerSelection == "rock") {
                winner = "Tie! Rock can't beat rock"
                tie += 1;
            } else if (playerSelection == "rock" && computerSelection == "paper") {
                winner =  "You lost! Paper beats rock" 
                computerScore += 1;
            } else if (playerSelection == "rock" && computerSelection == "scissors") {
                winner = "You won! Rock beats scissors"
                playerScore += 1;
            } else if (playerSelection == "paper" && computerSelection == "rock") {
                winner = "You won! Paper beats rock"
                playerScore += 1;
            } else if (playerSelection == "paper" && computerSelection == "paper") {
                winner = "Tie! Paper can't beat paper"
                tie += 1;
            } else if (playerSelection =="paper" && computerSelection == "scissors") {
                winner = "You lost! Scissors beats paper"
                computerScore += 1;
            } else if (playerSelection == "scissors" && computerSelection == "rock") {
                winner = "You lost! Rock beats Scissors"
                computerScore += 1;
            } else if (playerSelection == "scissors" && computerSelection == "paper") {
                winner = "You won! Scissors beats paper"
                playerScore += 1;
            } else if (playerSelection == "scissors" && computerSelection == "scissors") {
                winner = "Tie! Scissors can't beat scissors"
                tie += 1;
            } else {
                winner = "CHOOSE ROCK, PAPER, OR SCISSORS"
            }
            console.log(winner)
            console.log("You chose " + (playerSelection))
            console.log("Your opponent chose " + (computerSelection))
            console.log(playerScore + "-" + computerScore + "-" + tie)
    }
    (playRound(playerSelection,computerSelection));
 }


if(playerScore == computerScore) {
    var realWinner = "tie! Refresh to try again"
 } else if(playerScore > computerScore) {
    var realWinner = "You won the game!"
 } else if(playerScore < computerScore) {
    var realWinner = "You lost! Refresh to try again"
 }
 console.log(realWinner)






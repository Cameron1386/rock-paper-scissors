// a computer that returns Rock,Paper, or Scissors
// a function that takes two parameters
// two round playerselection and computer selection
// return if you either won or lost to the computer
// make character player selection case-insensitive
// return the resut of the selection
//
let randomNumber = Math.floor(Math.random()* 100) + 1;



function getComputerChoice(rock,paper,scissors) {
    if (randomNumber <= 33) {
        var rock = "rock";
        return rock;
    } else  if(randomNumber >= 34 && randomNumber <= 66) {
        var paper = "paper";
        return paper;
    } else if(randomNumber >=67)
        var scissors = "scissors"
        return scissors;
}


const computerSelection = getComputerChoice();


for (let i = 0; i < 5; i++) {
    
    
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
        if (playerSelection == "rock" && computerSelection === "rock") {
                winner = "Tie! Rock can't beat rock"
            } else if (playerSelection == "rock" && computerSelection == "paper") {
                winner =  "You lost! Paper beats rock" 
            } else if (playerSelection == "rock" && computerSelection == "scissors") {
                winner = "You won! Rock beats scissors"
            } else if (playerSelection == "paper" && computerSelection == "rock") {
                winner = "You won! Paper beats rock"
            } else if (playerSelection == "paper" && computerSelection == "paper") {
                winner = "Tie! Paper can't beat paper"
            } else if (playerSelection =="paper" && computerSelection == "scissors") {
                winner = "You lost! Scissors beats paper"
            } else if (playerSelection == "scissors" && computerSelection == "rock") {
                winner = "You lost! Rock beats Scissors"
            } else if (playerSelection == "scissors" && computerSelection == "paper") {
                winner = "You won! Scissors beats paper"
            } else if (playerSelection == "scissors" && computerSelection == "scissors") {
                winner = "Tie! Scissors can't beat scissors"
            } 
            console.log(winner)
            console.log("You chose " + (playerSelection))
            console.log("Your opponent chose " + (computerSelection))
    }
    (playRound(playerSelection,computerSelection));
 }







// a computer that returns Rock,Paper, or Scissors
// a function that takes two parameters
// two round playerselection and computer selection
// return if you either won or lost to the computer
// make character player selection case-insensitive
// return the resut of the selection
//
let randomNumber = Math.floor(Math.random()* 100) + 1;

console.log(randomNumber)

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

const playerSelection = prompt("Rock, Paper, or Scissors").toLowerCase()
    


console.log(playerSelection)

 
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection = "rock" && computerSelection === "rock") {
            playRound = "Tie!"
        } else if (playerSelection = "rock" && computerSelection === "paper") {
            playRound = "You lost!" 
        } else if (playerSelection = "rock" && computerSelection === "scissors") {
            playRound = "You won!"
        } else if (playerSelection = "paper" && computerSelection === "rock") {
            playRound = "You Won!"
        } else if (playerSelection = "paper" && computerSelection === "paper")  
            
    
    
    console.log(playRound)
}
function game(playRound) {
    
    } for (let i = 0; i < 5; i++) {

}

console.log(playRound(playerSelection, computerSelection));
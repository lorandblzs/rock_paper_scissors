let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;
let roundResult;
let round = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    computerChoice = parseInt(Math.floor(Math.random() * (3 - 0) + 0));
    computerChoice = choices[computerChoice];
    return computerChoice;
};

function getHumanChoice() {
    humanChoice = prompt("What is your choice?", "").toLocaleLowerCase();
    return humanChoice;
};

function playRound (humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        roundResult = "It's a draw!";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")) {
        roundResult = "You win!";
        humanScore++;
    } else {
        roundResult = "You lose!";
        computerScore++;
    }
    return roundResult;
};

function playGame () {
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    round++;

    console.log(roundResult); 
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
    console.log("Round: " + round);

};

function game() {
    for (let i = 0; i < 6; i++) {

        if (i >= 5) {
            console.log("----+++ Game over! +++----");
            console.log("Computer score: " + computerScore);
            console.log("Human score: " + humanScore);
        } else {
            playGame();
        }
    }
    return;
}

game();

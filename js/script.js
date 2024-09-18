// Step 1: Function to randomly return "rock", "paper", or "scissors"
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}


// Step 2: Function to get the human player's choice
function getHumanChoice() {
    const choice = prompt("Please enter your choice (rock, paper, or scissors):").toLowerCase();
    return choice;
}


// Step 3: Declare the player's score variables
let humanScore = 0;
let computerScore = 0;

// Step 4: Function to play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        document.getElementById("result").textContent = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        document.getElementById("result").textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        document.getElementById("result").textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    // Update the score on the page
    document.getElementById("humanScore").textContent = `Human: ${humanScore}`;
    document.getElementById("computerScore").textContent = `Computer: ${computerScore}`;
}


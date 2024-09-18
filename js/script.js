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

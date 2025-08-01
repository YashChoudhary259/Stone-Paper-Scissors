function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        return "stone";
    } else if (randomString === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (
        (playerSelection === "stone" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "stone") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i=0; i<5; i++) {
        let playerSelection = prompt("Enter stone, paper and scissors: ");
        let computerSelection = getComputerChoice();

        console.log(`Round ${i + 1}:`);
        console.log(result);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }

    console.log("Final Results: ")
    if (playerScore > computerScore) {
        console.log("You won the game!")
    } else if ( computerScore > playerScore) {
        console.log("You lost the game!")
    } else {
        console.log("It's a tie!")
    }
}

game()
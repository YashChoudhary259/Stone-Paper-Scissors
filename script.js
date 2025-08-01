function getComputerChoice() {
      let randomNum = Math.floor(Math.random() * 3); // 0, 1, 2
      if (randomNum === 0) {
        return "stone";
      } else if (randomNum === 1) {
        return "paper";
      } else {
        return "scissors";
      }
    }

    // Play one round
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

    // Play 5 rounds
    function game() {
      let playerScore = 0;
      let computerScore = 0;

      for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter stone, paper, or scissors:");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        console.log(`Round ${i + 1}:`);
        console.log("You chose:", playerSelection);
        console.log("Computer chose:", computerSelection);
        console.log(result);

        if (result.includes("win")) {
          playerScore++;
        } else if (result.includes("lose")) {
          computerScore++;
        }

        console.log(`Score → You: ${playerScore}, Computer: ${computerScore}`);
        console.log("-----------------------------------");
      }

      console.log("Final Results:");
      if (playerScore > computerScore) {
        console.log("🎉 You won the game!");
      } else if (computerScore > playerScore) {
        console.log("😢 You lost the game.");
      } else {
        console.log("🤝 It's a tie overall!");
      }
    }

    // Start the game
    game();

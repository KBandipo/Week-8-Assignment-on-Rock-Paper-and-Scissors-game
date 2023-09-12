//Play singleRound
export default function singleRound() {
  let playerSelection = playerChoice();
  let computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    console.log(`It's a tie!`);
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return "Win";
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return "Lose";
  } else {
    console.log(
      `${playerSelection} is an invalid Input. Select from 'Rock', 'Paper' or 'Scissors'!`
    );
  }
}

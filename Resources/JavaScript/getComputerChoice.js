//Create 'computerSelection' Function to make Computer picks at random between ‘Rock’, ‘Paper’ or ‘Scissors’ in the 'gameChoices'
export default function getComputerChoice() {
  //-Create an array of 'gameChopices'
  let gameChoices = ["rock", "paper", "scissors"];

  let choice = Math.floor(Math.random() * gameChoices.length);
  // console.log("Computer picked", gameChoices[choice]);
  if (gameChoices[choice] === "rock") {
    console.log("Computer selected Rock");
  } else if (gameChoices[choice] === "paper") {
    console.log("Computer selected Paper");
  } else {
    console.log("Computer selected Scissors");
  }
  return gameChoices[choice];
}

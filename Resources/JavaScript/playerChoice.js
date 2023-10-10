//Create Function 'playerSelection' to Prompt the player to select from the 'gameChoices' and store it and return it
export default function playerChoice() {
  //make the choices of th player case insensitive
  let userInput = prompt(
    "Select from 'Rock', 'Paper' or 'Scissors'!"
  ).toLowerCase();

  //-Create a conditions to return the seletion of player
  if (userInput === "rock") {
    console.log("You selected Rock");
  } else if (userInput === "paper") {
    console.log("You selected Paper");
  } else if (userInput === "scissors") {
    console.log("You selected Scissors");
  } else {
    console.log("Invalid Selection!");
    console.log("Select from 'Rock', 'Paper' or 'Scissors'!");
  }
  return userInput;
}

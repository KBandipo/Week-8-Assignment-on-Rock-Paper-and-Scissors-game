"use strict";
//‘Rock’, ‘Paper’ or ‘Scissors’ Game

/***********State Problem*********/
//-How to Computer select at random between ‘Rock’, ‘Paper’ or ‘Scissors’ Game and return the choice
//-How to make the choices of th player case insensitive
//-How to compare the Player and the computer's choices in the first round
//-How to play in rounds
//-How to display the winner

/***********************************************************/

/**********Pseudocode*********/
//-Create an array of 'gameChopices'
//Create Function 'playerSelection' to Prompt the player to select from the 'gameChoices' and store it and return it
//-To make the choices of th player case insensitive
//-Create a condition to return the seletion of player
// Create 'computerSelection' Function to make Computer picks at random between ‘Rock’, ‘Paper’ or ‘Scissors’ in the 'gameChoices'
//Return and display the output of the Computer choice Selection using and User's selection
//invoke 'computerSelection' and 'playerSelection'
//Play the game and comparing the 'computerSelection' and 'playerSelection' display the winner
//Create Function 'game' to take two parameters - the playerSelection and computerSelection, and play 5 rounds using loop
//Display the winner

/***********************************************************/

/******************Game Rules:******************/
console.log("Game Rules!!!");
console.log("1. Rock beats Scissors, so, Rock wins:");
console.log("2. Scissors beats Paper, so, Scissors wins:");
console.log("3. Paper beats Rock (Paper wins:");
console.log(
  "4. If both players choose the same element, it's a tie or a draw, and no one wins."
);
console.log(
  "/**************************************************************************/"
);
/***********************************************************/

/*************************Implimentatio**********************************/
//-Create an array of 'gameChopices'
let gameChoices = ["rock", "paper", "scissors"];

//Create Function 'playerSelection' to Prompt the player to select from the 'gameChoices' and store it and return it
function playerChoice() {
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
// let playerSelection = playerChoice();

//Create 'computerSelection' Function to make Computer picks at random between ‘Rock’, ‘Paper’ or ‘Scissors’ in the 'gameChoices'
function getComputerChoice() {
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

//Invoke 'getComputerChoice' and 'playerSelection'

// let computerSelection = getComputerChoice();

//Play singleRound
function singleRound() {
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

/****************************************************************/
function round() {
  let round = 0;
  let userScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let game = singleRound();
    if (game === "Win") {
      userScore++;
      round++;
      console.log(
        `ROUND: ${round}, SCORE: USERSCORE ${userScore}: ${computerScore} COMPUTER`
      );
    } else if (game === "Lose") {
      computerScore++;
      round++;
      console.log(
        `ROUND: ${round}, SCORE: USERSCORE ${userScore}: ${computerScore} COMPUTER`
      );
    } else if (game === "Tie") {
      round++;
      console.log(
        `ROUND: ${round}, SCORE: USERSCORE ${userScore}: ${computerScore} COMPUTER`
      );
    } else {
      console.log(
        `INVALID INPUT, To play ROUND: ${
          round + 1
        }, Select from Rock, Paper and Scissors `
      );
      //use i++ to make the round to be in same position
      i--;
    }
  }
}

round();

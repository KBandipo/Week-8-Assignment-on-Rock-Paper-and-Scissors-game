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

/***********************************************************/

/*************************Implimentatio**********************************/
//-Create an array of 'gameChopices'
let gameChoices = ["rock", "paper", "scissors"];

//Create Function 'playerSelection' to Prompt the player to select from the 'gameChoices' and store it and return it
function playerSelection() {
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
}

//Create 'computerSelection' Function to make Computer picks at random between ‘Rock’, ‘Paper’ or ‘Scissors’ in the 'gameChoices'
function getComputerChoice() {
  let choice = Math.floor(Math.random() * gameChoices.length);
  // console.log("Computer picked", gameChoices[choice]);
}

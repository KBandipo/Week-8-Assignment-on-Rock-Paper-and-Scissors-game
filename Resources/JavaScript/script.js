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
console.log("3. Paper beats Rock, so, Paper wins:");
console.log(
  "4. If both players choose the same element, it's a tie or a draw, and no one wins."
);
console.log(
  "/**************************************************************************/"
);
/***********************************************************/

/*************************Implimentatio**********************************/

import singleRound from "./singleRound.js";

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
    console.log(
      "/*************************************************************************/"
    );
  }
  // Final condition to display the winner
  if (userScore > computerScore) {
    console.log(`YOU WON🏆 WITH SCORE ${userScore} TO ${computerScore}`);
  } else {
    console.log(`COMPUTER WON🏆 WITH SCORE ${computerScore} TO ${userScore}`);
  }
}

round();

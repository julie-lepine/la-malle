'use strict';

// FUNCTION TO DISPLAY THE IMAGE ON CLIC ON THE SELECT
const diceImg = document.getElementById("diceImg");
const diceSelectBtns = document.getElementById("dice");

const puzzImg = document.getElementById("puzzImg");
const puzzSelectBtns = document.getElementById("puzzleSelect");

function displayImg() {
  diceImg.src = `../assets/img/board_games/dice-${diceSelectBtns.value}.jpg`;
  puzzImg.src = `../assets/img/board_games/puzz-${puzzSelectBtns.value}.jpg`;
}

'use strict';

////// SORT BY
function filterAll() {
  let contents = document.getElementsByClassName('contenu');
  for (let i = 0; i < contents.length; i++) {
      if (contents[i].classList.contains('contenu')) {
          contents[i].classList.remove('hide');
      }      
  }
}

function filterNew() {
  let contents = document.getElementsByClassName('contenu');
  for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("new")) {
          contents[i].classList.add("hide");
      } else {
        contents[i].classList.remove("hide");
      }
  }
}

function filterPromo() {
  let contents = document.getElementsByClassName('contenu');
  for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("promo")) {
          contents[i].classList.add("hide");
      } else {
        contents[i].classList.remove("hide");
      }
  }
}

//// UPPER IMAGE DISPPEARING ON SCROLL > 100 
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
      let logo = document.getElementById('logo');
      logo.classList.add('resize');
  }
});

// FUNCTION TO DISPLAY THE IMAGE ON CLIC ON THE SELECT
const diceImg = document.getElementById("diceImg");
const diceSelectBtns = document.getElementById("dice");

const puzzImg = document.getElementById("puzzImg");
const puzzSelectBtns = document.getElementById("puzzleSelect");

function displayImg() {
  diceImg.src = `../assets/img/board_games/dice-${diceSelectBtns.value}.jpg`;
  puzzImg.src = `../assets/img/board_games/puzz-${puzzSelectBtns.value}.jpg`;
}

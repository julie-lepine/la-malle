'use strict';

// TEENS
const figImg = document.getElementById("figImg");
const figDivBtns = document.getElementById("figurine");

const teensBooksImg = document.getElementById("teensBooksImg");
const teensBooksDivBtns = document.getElementById("teensBooks");

function displayImg() {
  figImg.src = `../../assets/img/teenagers/fig-${figDivBtns.value}.jpg`;
  teensBooksImg.src = `../../assets/img/teenagers/books-${teensBooksDivBtns.value}.jpg`;
}
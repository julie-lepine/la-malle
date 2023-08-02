'use strict';

// KIDS
const bricsImg = document.getElementById("bricsImg");
const bricsDivBtns = document.getElementById("qty");

const miniasImg = document.getElementById("miniasImg");
const carsDivBtns = document.getElementById("cars");

const dinosImg = document.getElementById("dinosImg");
const dinosDivBtns = document.getElementById("dinos");

const kidsBooksImg = document.getElementById("kidsBooksImg");
const booksDivBtns = document.getElementById("kidsBooks");

function displayImg() {
  bricsImg.src = `../../assets/img/kiddo/bric-${bricsDivBtns.value}.jpg`;
  dinosImg.src = `../../assets/img/kiddo/dinos-${dinosDivBtns.value}.jpg`;
  kidsBooksImg.src = `../../assets/img/kiddo/books-${booksDivBtns.value}.jpg`;
  miniasImg.src = `../../assets/img/kiddo/car-${carsDivBtns.value}.jpg`;
}
"use strict";

//// UPPER IMAGE DISPPEARING ON SCROLL > 100
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    let logo = document.getElementById('logo');
    logo.classList.add('resize');
}
});

////// SORT BY
function filterAll() {
  let contents = document.getElementsByClassName("contenu");
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].classList.contains("contenu")) {
      contents[i].classList.remove("hide");
    }
  }
}

function filterNew() {
  let contents = document.getElementsByClassName("contenu");
  for (let i = 0; i < contents.length; i++) {
    if (!contents[i].classList.contains("new")) {
      contents[i].classList.add("hide");
    } else {
        contents[i].classList.remove("hide");
      }
  }
}

function filterPromo() {
  let contents = document.getElementsByClassName("contenu");
  for (let i = 0; i < contents.length; i++) {
    if (!contents[i].classList.contains("promo")) {
      contents[i].classList.add("hide");
    } else {
        contents[i].classList.remove("hide");
      }
  }
}

function filterSchool() {
  let contents = document.getElementsByClassName("contenu");
  for (let i = 0; i < contents.length; i++) {
    if (!contents[i].classList.contains("imitation")) {
      contents[i].classList.add("hide");
    } else {
        contents[i].classList.remove("hide");
      }
  }
}

// FUNCTION TO DISPLAY THE IMAGE ON CLIC ON THE SELECT
const bricsImg = document.getElementById("bricsImg");
const bricsDivBtns = document.getElementById("qty");

const miniasImg = document.getElementById("miniasImg");
const carsDivBtns = document.getElementById("cars");

const dinosImg = document.getElementById("dinosImg");
const dinosDivBtns = document.getElementById("dinos");

const booksImg = document.getElementById("booksImg");
const booksDivBtns = document.getElementById("books");

function displayImg() {
  bricsImg.src = `../../assets/img/kiddo/bric-${bricsDivBtns.value}.jpg`;
  dinosImg.src = `../../assets/img/kiddo/dinos-${dinosDivBtns.value}.jpg`;
  booksImg.src = `../../assets/img/kiddo/books-${booksDivBtns.value}.jpg`;
  miniasImg.src = `../../assets/img/kiddo/car-${carsDivBtns.value}.jpg`;
}

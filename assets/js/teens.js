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

function filterPamper() {
  let contents = document.getElementsByClassName('contenu');
  for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("pamper")) {
          contents[i].classList.add("hide");
      } else {
        contents[i].classList.remove("hide");
      }
  }
}

function filterGoOut() {
  let contents = document.getElementsByClassName('contenu');
  for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("goOut")) {
          contents[i].classList.add("hide");
      } else {
        contents[i].classList.remove("hide");
      }
  }
}

function filterTech() {
  let contents = document.getElementsByClassName('contenu');
  for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("tech")) {
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
const figImg = document.getElementById("figImg");
const figDivBtns = document.getElementById("figurine");

const booksImg = document.getElementById("books");
const booksDivBtns = document.getElementById("qty");

function displayImg() {
  figImg.src = `../../assets/img/teenagers/fig-${figDivBtns.value}.jpg`;
  booksImg.src = `../../assets/img/teenagers/books-${booksDivBtns.value}.jpg`;
}

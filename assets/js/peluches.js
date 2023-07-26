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

function filterTen() {
  let contents = document.getElementsByClassName('contenu');
  for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("ten")) {
          contents[i].classList.add("hide");
      } else {
        contents[i].classList.remove("hide");
      }
  }
}

function filterFourty() {
  let contents = document.getElementsByClassName('contenu');
  for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("fourty")) {
          contents[i].classList.add("hide");
      } else {
        contents[i].classList.remove("hide");
      }
  }
}

function filterSeasoned() {
  let contents = document.getElementsByClassName('contenu');
  for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("season")) {
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
const rabImg = document.getElementById("rabbitsImg");
const rabDivBtns = document.getElementById("rabbits");

const bagImg = document.getElementById("bagImg");
const rbagDivBtns = document.getElementById("bags");

function displayImg() {
  rabImg.src = `../../assets/img/peluches/rab-${rabDivBtns.value}.jpg`;
  bagImg.src = `../../assets/img/peluches/bag-${rbagDivBtns.value}.jpg`;
}

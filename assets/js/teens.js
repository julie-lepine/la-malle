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
      }
  }
}

function filterPromo() {
  let contents = document.getElementsByClassName('contenu');
  for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("promo")) {
          contents[i].classList.add("hide");
      }
  }
}

function filterPamper() {
  let contents = document.getElementsByClassName('contenu');
  for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("pamper")) {
          contents[i].classList.add("hide");
      }
  }
}

function filterGoOut() {
  let contents = document.getElementsByClassName('contenu');
  for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("goOut")) {
          contents[i].classList.add("hide");
      }
  }
}

function filterTech() {
  let contents = document.getElementsByClassName('contenu');
  for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("tech")) {
          contents[i].classList.add("hide");
      }
  }
}

//// UPPER IMAGE DISPPEARING ON SCROLL > 100 
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
      let image = document.getElementById('upperImg');
      image.classList.add('hide');
  }
});
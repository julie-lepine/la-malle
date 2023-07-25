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

function filterTen() {
  let contents = document.getElementsByClassName('contenu');
  for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("ten")) {
          contents[i].classList.add("hide");
      }
  }
}

function filterFourty() {
  let contents = document.getElementsByClassName('contenu');
  for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("fourty")) {
          contents[i].classList.add("hide");
      }
  }
}

function filterSeasoned() {
  let contents = document.getElementsByClassName('contenu');
  for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("season")) {
          contents[i].classList.add("hide");
      }
  }
}
"use strict";

///////////////// PB SUR LE FILTRE : CA ADDITIONNE LES EXIGENCES DE FILTRE, IL FAUT FORCEMENT ALLER RESET EN CLIQUANT SUR "TOUT MONTRER" /////////////////

// AJOUTER PLUS TARD LES FONCTIONS DE FILTRE : NB ARTICLES PAR PAGE, MARQUE, ETC

//// UPPER IMAGE DISPPEARING ON SCROLL > 100
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    let image = document.getElementById("upperImg");
    image.classList.add("hide");
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
    if (!contents[i].classList.contains("school")) {
      contents[i].classList.add("hide");
    } else {
        contents[i].classList.remove("hide");
      }
  }
}

function filterCollege() {
  let contents = document.getElementsByClassName("contenu");
  for (let i = 0; i < contents.length; i++) {
    if (!contents[i].classList.contains("college")) {
      contents[i].classList.add("hide");
    } else {
        contents[i].classList.remove("hide");
      }
  }
}

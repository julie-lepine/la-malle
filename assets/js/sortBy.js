'use strict';

////// SORT BY
function showAll() {
  let contents = document.getElementsByClassName("contenu");
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].classList.contains("contenu")) {
      contents[i].classList.remove("hide");
    }
  }
}

function sortAscending() {

}

function sortDescending() {

}


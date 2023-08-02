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

function filterDescending() {

}

// récupérer genre les noms des classes et boucler dedans pour les trier ? 
// abc.. ça peut être avec le .textContent
// prix ? 
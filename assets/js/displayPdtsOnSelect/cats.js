'use strict';

// CATS
const treeImg = document.getElementById("treeImg");
const treeDivBtns = document.getElementById("treeColor");

function displayImg() {
  treeImg.src = `../../assets/img/pets/cats/tree-${treeDivBtns.value}.jpg`;
}

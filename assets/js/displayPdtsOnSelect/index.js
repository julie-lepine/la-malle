'use strict';

// CATS
const treeImg = document.getElementById("treeImg");
const treeDivBtns = document.getElementById("treeColor");

function displayImg() {
  treeImg.src = `../../assets/img/pets/cats/tree-${treeDivBtns.value}.jpg`;
}

// BOARDGAMES
const diceImg = document.getElementById("diceImg");
const diceSelectBtns = document.getElementById("dice");

const puzzImg = document.getElementById("puzzImg");
const puzzSelectBtns = document.getElementById("puzzleSelect");

function displayImg() {
  diceImg.src = `../assets/img/board_games/dice-${diceSelectBtns.value}.jpg`;
  puzzImg.src = `../assets/img/board_games/puzz-${puzzSelectBtns.value}.jpg`;
}

// KIDS
const miniasImg = document.getElementById("miniasImg");
const carsDivBtns = document.getElementById("cars");

function displayImg() {
  miniasImg.src = `../../assets/img/kiddo/car-${carsDivBtns.value}.jpg`;
}

// scroll transition
const ratio = 0.1

var options = {
    root: null,
    rootMargin : '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r) {
    observer.observe(r);
})
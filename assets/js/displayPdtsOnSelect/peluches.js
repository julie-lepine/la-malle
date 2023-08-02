'use strict';

// FUNCTION TO DISPLAY THE IMAGE ON CLIC ON THE SELECT
const rabImg = document.getElementById("rabbitsImg");
const rabDivBtns = document.getElementById("rabbits");

const bagImg = document.getElementById("bagImg");
const rbagDivBtns = document.getElementById("bags");

function displayImg() {
  rabImg.src = `../../assets/img/peluches/rab-${rabDivBtns.value}.jpg`;
  bagImg.src = `../../assets/img/peluches/bag-${rbagDivBtns.value}.jpg`;
}

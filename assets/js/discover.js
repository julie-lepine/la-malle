'use strict';

//// UPPER IMAGE DISPPEARING ON SCROLL > 100 
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    let logo = document.getElementById('logo');
    logo.classList.add('resize');
}
});
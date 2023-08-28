// SHOW THE NEW & PROMOS BTN
function filterPriceNew() {
  var card = document.getElementsByClassName("contenu");
  let newIcon = document.getElementsByClassName("newIcon");
  for (let i = 0; i < card.length; i++) {
    if (!card[i].classList.contains("new")) {
      newIcon[i].classList.add("hide");
    } else {
      newIcon[i].classList.remove("hide");
    }
  }
}

filterPriceNew();

function filterPricePromo() {
  var card = document.getElementsByClassName("contenu");
  let newIcon = document.getElementsByClassName("promoIcon");
  for (let i = 0; i < card.length; i++) {
    if (!card[i].classList.contains("promo")) {
      newIcon[i].classList.add("hide");
    } else {
      newIcon[i].classList.remove("hide");
    }
  }
}

filterPricePromo();

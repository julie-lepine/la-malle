"use strict";

// FILTER BY PRICE
function filterPriceLow() {
  let contents = document.getElementsByClassName("contenu");
  const low = document.getElementById("low");
  if (low.checked) {
    for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("low")) {
        contents[i].classList.add("hide");
      }
    }
  } else if (!low.checked) {
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove("hide");
    }
  }
}

function filterPriceMed() {
  let contents = document.getElementsByClassName("contenu");
  const med = document.getElementById("med");
  if (med.checked) {
    for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("med")) {
        contents[i].classList.add("hide");
      }
    }
  } else if (!med.checked) {
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove("hide");
    }
  }
}

function filterPriceHigh() {
  let contents = document.getElementsByClassName("contenu");
  const high = document.getElementById("high");
  if (high.checked) {
    for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("high")) {
        contents[i].classList.add("hide");
      }
    }
  } else if (!high.checked) {
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove("hide");
    }
  }
}

// FILTER BY PROMOTION
// general
function filterPromo() {
  let contents = document.getElementsByClassName("contenu");
  const promo = document.getElementById("promos");
  if (promo.checked) {
    for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("promo")) {
        contents[i].classList.add("hide");
      }
    }
  } else if (!promo.checked) {
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove("hide");
    }
  }
}

function filterSeasoned() {
  let contents = document.getElementsByClassName("contenu");
  const season = document.getElementById("seasoned");
  if (season.checked) {
    for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("season")) {
        contents[i].classList.add("hide");
      } else {
        contents[i].classList.remove("hide");
      }
    }
  } else if (!season.checked) {
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove("hide");
    }
  }
}

function filterNew() {
  let contents = document.getElementsByClassName("contenu");
  const news = document.getElementById("new");
  if (news.checked) {
    for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("new")) {
        contents[i].classList.add("hide");
      } else {
        contents[i].classList.remove("hide");
      }
    }
  } else if (!news.checked) {
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove("hide");
    }
  }
}

// animals
function filterAccess() {
  let contents = document.getElementsByClassName("contenu");
  const access = document.getElementById("access");
  if (access.checked) {
    for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("access")) {
        contents[i].classList.add("hide");
      } else {
        contents[i].classList.remove("hide");
      }
    }
  } else if (!access.checked) {
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove("hide");
    }
  }
}

// newborns
function filterMotricity() {
  let contents = document.getElementsByClassName("contenu");
  const motricity = document.getElementById("motricity");
  if (motricity.checked) {
    for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("motricity")) {
        contents[i].classList.add("hide");
      } else {
        contents[i].classList.remove("hide");
      }
    }
  } else if (!motricity.checked) {
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove("hide");
    }
  }
}

function filterComfort() {
  let contents = document.getElementsByClassName("contenu");
  const comfort = document.getElementById("comfort");
  if (comfort.checked) {
    for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("comfort")) {
        contents[i].classList.add("hide");
      } else {
        contents[i].classList.remove("hide");
      }
    }
  } else if (!comfort.checked) {
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove("hide");
    }
  }
}

// kids
function filterImitation() {
  let contents = document.getElementsByClassName("contenu");
  const imitation = document.getElementById("imitation");
  if (imitation.checked) {
    for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("imitation")) {
        contents[i].classList.add("hide");
      } else {
        contents[i].classList.remove("hide");
      }
    }
  } else if (!imitation.checked) {
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove("hide");
    }
  }
}

// teens
function filterPamper() {
  let contents = document.getElementsByClassName("contenu");
  const pamper = document.getElementById("pamper");
  if (pamper.checked) {
    for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("pamper")) {
        contents[i].classList.add("hide");
      } else {
        contents[i].classList.remove("hide");
      }
    }
  } else if (!pamper.checked) {
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove("hide");
    }
  }
}

function filterGoOut() {
  let contents = document.getElementsByClassName("contenu");
  const goOut = document.getElementById("goOut");
  if (goOut.checked) {
    for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("goOut")) {
        contents[i].classList.add("hide");
      } else {
        contents[i].classList.remove("hide");
      }
    }
  } else if (!goOut.checked) {
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove("hide");
    }
  }
}

function filterTech() {
  let contents = document.getElementsByClassName("contenu");
  const tech = document.getElementById("tech");
  if (tech.checked) {
    for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains("tech")) {
        contents[i].classList.add("hide");
      } else {
        contents[i].classList.remove("hide");
      }
    }
  } else if (!tech.checked) {
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove("hide");
    }
  }
}

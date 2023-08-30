let test = document.getElementById('newsCard');
const btn = document.getElementById("triggerNewsPopup");

function triggersPopUp() {
  if (test.classList.contains("hide")) {
    var blur = document.getElementById('blur');
    test.classList.remove("hide");
    blur.classList.add("active");
    test.classList.add("active");
  };
}

function quitPopUp() {
  test.classList.add("hide");
  blur.classList.remove("active");
}
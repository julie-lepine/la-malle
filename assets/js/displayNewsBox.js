let test = document.getElementById('newsCard');
const btn = document.getElementById("triggerNewsPopup");

btn.addEventListener("click", function() {
  if (test.classList.contains("hide")) {
    test.classList.remove("hide");
  };
}
)

// add blur on the rest of the doc

const quitBtn = document.getElementById('quitPopUp');
const sendBtn = document.getElementById("newsSubBtn");

quitBtn.addEventListener("click", function() {
  test.classList.add("hide");
  document.removeEventListener("mouseleave", function() {
    if (test.classList.contains("hide")) {
      test.classList.remove("hide");
    };
    }
  )
})

sendBtn.addEventListener("click", function() {
  test.classList.add("hide");
  document.removeEventListener("mouseleave", function() {
    if (test.classList.contains("hide")) {
      test.classList.remove("hide");
    };
    }
  )
})
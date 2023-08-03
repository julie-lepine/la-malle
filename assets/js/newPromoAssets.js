'use strict';

function showNewAsset() {
  let contents = document.getElementsByClassName("contenu");
  let contentsArray = Array.prototype.slice.call(contents);

  contentsArray.forEach((element) => {
    if (element.classList.contains("new")) {
      let asset = document.createElement("div");
      asset.classList.add('asset');
      element.appendChild(asset);
    }
  });
}

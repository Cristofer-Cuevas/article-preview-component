const shareContainer = document.getElementById("share-container");

shareContainer.classList.add("hide");

const arrows = document.querySelectorAll(".arrow");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (shareContainer.classList.contains("hide")) {
      shareContainer.classList.replace("hide", "show");
    } else {
      shareContainer.classList.replace("show", "hide");
    }
  });
});

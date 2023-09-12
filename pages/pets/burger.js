document.addEventListener("DOMContentLoaded", function () {
  // БУРГЕР БУРГЕР БУРГЕР БУРГЕР БУРГЕР

  document.getElementById("burgerBut").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open");
  });

  // ПОПАП ПОПАП ПОПАП ПОПАП ПОПАП

  const popup = document.querySelector(".popup");
  const petcard = document.querySelectorAll(".petCard");
  const imagex = document.querySelector(".imageX");

  petcard.forEach((item) => {
    item.addEventListener("click", (event) => {
      popup.classList.add("hidden");
      document.body.style.overflow = "hidden";
    });
  });

  popup.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup")) {
      popup.classList.remove("hidden");
      document.body.style.overflow = "";
    }
  });

  imagex.addEventListener("click", function (event) {
    if (event.target.classList.contains("imageX")) {
      popup.classList.remove("hidden");
      document.body.style.overflow = "";
    }
  });
});

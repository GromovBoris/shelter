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

  // КАРУСЕЛЬ КАРУСЕЛЬ КАРУСЕЛЬ КАРУСЕЛЬ КАРУСЕЛЬ

  const leftbutton = document.getElementById("one");
  const rightbutton = document.getElementById("two");
  const thirdbutton = document.getElementById("three");
  const forthbutton = document.getElementById("four");

  const carusel = document.getElementById("carusel");

  let displayNone = function () {
    carusel.style.display = "none";
  };

  let displayNoneDel = function () {
    carusel.style.removeProperty("display");
  };

  let rightMotion = function () {
    carusel.classList.add("rightMotion");
  };

  let leftMotion = function () {
    carusel.classList.add("leftMotion");
  };

  let rightMotionDel = function () {
    carusel.classList.toggle("rightMotion");
  };

  let leftMotionDel = function () {
    carusel.classList.toggle("leftMotion");
    setTimeout;
  };

  rightbutton.addEventListener("click", function () {
    rightMotion();
    setTimeout(displayNone, 600);
    setTimeout(rightMotionDel, 601);
    setTimeout(leftMotion, 602);
    setTimeout(displayNoneDel, 603);
    setTimeout(leftMotionDel, 604);
  });

  leftbutton.addEventListener("click", function () {
    leftMotion();
    setTimeout(displayNone, 600);
    setTimeout(leftMotionDel, 601);
    setTimeout(rightMotion, 602);
    setTimeout(displayNoneDel, 603);
    setTimeout(rightMotionDel, 604);
  });

  thirdbutton.addEventListener("click", function () {
    leftMotion();
    setTimeout(displayNone, 1300);
    setTimeout(leftMotionDel, 1301);
    setTimeout(rightMotion, 1302);
    setTimeout(displayNoneDel, 1303);
    setTimeout(rightMotionDel, 1304);
  });

  forthbutton.addEventListener("click", function () {
    rightMotion();
    setTimeout(displayNone, 1300);
    setTimeout(rightMotionDel, 1301);
    setTimeout(leftMotion, 1302);
    setTimeout(displayNoneDel, 1303);
    setTimeout(leftMotionDel, 1304);
  });
});

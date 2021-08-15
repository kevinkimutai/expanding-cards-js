import $ from "jquery";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import css from "../css/styles.css";

//import images
import bg1 from "../images/business.jpeg";
import bg2 from "../images/connor.jpg";
import bg3 from "../images/header-img.jpeg";
import bg4 from "../images/joshua.jpg";
import bg5 from "../images/macedonia.jpg";

//add images to inline style
document.getElementById("bg-1").style.backgroundImage = `url(${bg1})`;
document.getElementById("bg-2").style.backgroundImage = `url(${bg2})`;
document.getElementById("bg-3").style.backgroundImage = `url(${bg3})`;
document.getElementById("bg-4").style.backgroundImage = `url(${bg4})`;
document.getElementById("bg-5").style.backgroundImage = `url(${bg5})`;

//toggle active class
const panels = document.querySelectorAll(".panel");

panels.forEach((p) => {
  p.addEventListener("click", function () {
    //clear all active classes
    removeActive();
    //add active class
    p.classList.add("active");
  });
});

const removeActive = function () {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

if (module.hot) {
  module.hot.accept(function (err) {
    console.log(err);
  });
}

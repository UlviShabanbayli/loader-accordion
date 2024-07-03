"use strict";

let loadingEl = document.querySelector(".loading");
let percent = 0;
let pEl = document.querySelector(".loading__percentage");

const loading = setInterval(() => {
  percent++;
  loadingEl.style.width = `${percent}%`;
  pEl.textContent = `${percent}%`;

  if (percent === 100) {
    clearInterval(loading);
  }
}, 60);

const loaderEl = document.querySelector(".loader__container");

setTimeout(() => {
  loaderEl.style.display = "none";
}, 6500);

const accordBTNs = document.querySelectorAll(".accordion__btn");
const accordContents = document.querySelectorAll(".accordion-content");
const arrows = document.querySelectorAll(".arrow");

accordBTNs.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    accordContents.forEach((content, i) => {
      i === index
        ? content.classList.toggle("active")
        : content.classList.remove("active");
    });
    arrows.forEach((arrow, i) => {
      i === index
        ? arrow.classList.toggle("active-arrow")
        : arrow.classList.remove("active-arrow");
    });
  });
});

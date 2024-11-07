/* Created by Tivotal */

let btns = document.querySelectorAll(".btn");
let popup = document.querySelector(".popup");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    popup.classList.toggle("show");
  });
});

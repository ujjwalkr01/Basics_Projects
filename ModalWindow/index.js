const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpen = document.querySelectorAll(".show-modal");
console.log(btnOpen);

const OpenModal = function () {
  // console.log('Button clicked');
  //we can remove the class using classList.property
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  //we can add the class using classList.property
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < btnOpen.length; i++) {
  // console.log(btnOpen[i].textContent);
  btnOpen[i].addEventListener("click", OpenModal);
}
//here we are not calling the function because java script will execute this function when it will come at line 20, 23, or  24 so we want that when we click then only the action to be performed so we just declare the function.
btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

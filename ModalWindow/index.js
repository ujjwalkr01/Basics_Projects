const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpen = document.querySelectorAll(".show-modal");
// console.log(btnOpen);

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


//we can also use keyboard property to perfrom functionality...
/*There are three keyboard property
 1. keydown--> performs action when key is pressed.
 2. keyup--> performs action when key is lift.
 3. keypress--> perfroms action when key is continously pressed.

 Note--> If we want to view which key is pressed then just pass the parameter in the function and just use parameter.key inside the console.log
*/
document.addEventListener('keydown', function(e){
  console.log(e.key);
  if(e.key=='Escape' && !modal.classList.contains('hidden')){
      closeModal();
  }
})
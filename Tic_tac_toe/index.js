let music = new Audio("winfantasia.mp3");
let audioTurn = new Audio("cartoon-jump.mp3");
let gameOver = new Audio("negative_beeps.mp3");

let turn = "X";
// let player=[0,1];
let isgameOver = false;

//function to change the turn...
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//function to check for a win...
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach(e => {
    if (
      (boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
      (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
      (boxtext[e[0]].innerText!== "")
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " won";
       isgameOver = true;
       if(boxtext[e[0]].innerText === "X"){
       alert(`Congratulations! Player1 wins`);
       }else if(boxtext[e[0]].innerText === "0"){
        alert(`Congratulations! Player2 wins`);
       }
    }
  });
};

//Game Logic
let boxes = document.getElementsByClassName("box");
let count=0;
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isgameOver) {
        document.getElementsByClassName("info")[0].innerText =
          `Turn for  ${turn}`;
          count++;
          //console.log(count);
          if(count==9){
            alert(`Draw!`);
          }
      }
    }
  });
});

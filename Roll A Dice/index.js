//for selecting the score of the players
let scoreP1 = document.querySelector("#score--0");
let scoreP2 = document.getElementById("score--1");

//for selecting the active player..
let playr1 = document.querySelector(".player--0");
let playr2 = document.querySelector(".player--1");

//for selecting the current score...
const currScore1 = document.getElementById("current--0");
const currScore2 = document.getElementById("current--1");

//for selecting the image of the dice..
let diceVal = document.querySelector(".dice");

//for selecting the buttons..
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");
let btnNew = document.querySelector(".btn--new");

//here we are declaring the variables outside as it is a block level so if we declare the variable inside we can't access it...
let currentScore, activePlayer, scores, isPlaying;

//declaring the function for reusablity..
const initialization = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  isPlaying = true;

  scoreP1.textContent = 0;
  scoreP2.textContent = 0;
  currScore1.textContent = 0;
  currScore2.textContent = 0;

  diceVal.classList.add("hidden");
  playr1.classList.remove("player--winner");
  playr2.classList.remove("player--winner");
  playr1.classList.add("player--active");
  playr2.classList.remove("player--active");
};
initialization();
//defining the function....
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  //toggle method is used to check if the property is present in the class or not if it is it will remove it else it will add it..
  //we can use all these property usig querySelector()...
  playr1.classList.toggle("player--active");
  playr2.classList.toggle("player--active");
};

//when clicked functionality...

btnRoll.addEventListener("click", function () {
  if (isPlaying) {
    let diceRoll = Math.trunc(Math.random() * 6) + 1;
    diceVal.classList.remove("hidden");
    console.log(diceRoll);
    diceVal.setAttribute("src", `dice-${diceRoll}.png`);

    if (diceRoll !== 1) {
      currentScore += diceRoll;
      // console.log(currentScore1);
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (isPlaying) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      isPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceVal.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

//here java script will automatically call the function.
btnNew.addEventListener("click", initialization);

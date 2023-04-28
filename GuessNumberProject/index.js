let secretNumber = Math.trunc(Math.random() * 100) + 1;
console.log(secretNumber);

let score = Number(document.querySelector(".scoreLabel").textContent);

let HighScore = 0;
HighScore = localStorage.getItem("h_score");

document.querySelector(".highScore").textContent = HighScore;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let buttonChk = document.querySelector(".checkBtn");

buttonChk.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guessNum").value);

  if (!guess) {
    displayMessage("⛔️ No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".secretNum").textContent = secretNumber;

    if (score >= HighScore) {
      HighScore = localStorage.setItem("h_score", score);
      HighScore = localStorage.getItem("h_score");
      document.querySelector(".highScore").textContent = HighScore;
    }

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("body").style.Color = "black";
    document.querySelector(".secretNum").style.width = "20rem";
    document.querySelector(".secretNum").style.fontFamily = "sans-serif";
    document.querySelector(".secretNum").style.fontWeight = "bold";
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "❌Too high!" : "❌Too low!");
      score--;
      document.querySelector(".scoreLabel").textContent = score;
    } else {
      displayMessage("👎You lost the game!");
      document.querySelector(".scoreLabel").textContent = 0;
    }
  }
});

let reset = document.querySelector(".resetbtn");

reset.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  console.log(secretNumber);
  score=50;
  
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".scoreLabel").textContent = score;
  document.querySelector(".secretNum").textContent = "?";
  document.querySelector(".secretNum").style.width = "15rem";
  document.querySelector(".guessNum").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".secretNum").style.fontFamily = "inherit";
  document.querySelector(".secretNum").style.fontWeight = "normal";
});

"use strict";
const buttonListner = document.querySelector(".guess_btn");
let getRandomNum = Math.ceil(Math.random() * 20) + 1;
console.log(getRandomNum);
let secretNum = getRandomNum;
let rightScore = 20;

let guess_remark_message = function (message) {
  document.querySelector(".guess_remark").textContent = message;
};
buttonListner.addEventListener("click", handleEvent);
document.querySelector(".input_box").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleEvent();
  }
});

document.querySelector(".abs_playgain").addEventListener("click", () => {
  document.querySelector(".main_component").style.backgroundColor = "cyan";
  guess_remark_message("start guessing");
  document.querySelector(".right_score_num").textContent = 20;
  document.querySelector(".input_box").value = "";
  document.querySelector(".guessed_num").textContent = "?";
  rightScore = 20;
  secretNum = Math.ceil(Math.random() * 20) + 1;
});

function handleEvent() {
  const guessedNum = Number(document.querySelector(".input_box").value);

  if (!guessedNum) {
    guess_remark_message("no number! ");
  } else if (guessedNum < 1 || guessedNum > 20) {
    guess_remark_message("number out of bound");
  } else if (guessedNum > secretNum && guessedNum - secretNum > 3) {
    guess_remark_message("very high");
    rightScoreDecrement();
  } else if (secretNum > guessedNum && secretNum - guessedNum > 3) {
    guess_remark_message("very low");
    rightScoreDecrement();
    checkGameOver();
  } else if (guessedNum > secretNum) {
    guess_remark_message("bit high");
    rightScoreDecrement();
    checkGameOver();
  } else if (guessedNum < secretNum) {
    guess_remark_message("bit low");
    rightScoreDecrement();
    checkGameOver();
  } else if (guessedNum === secretNum) {
    document.querySelector(".high_score_class").textContent = rightScore;
    checkGameOver();
    document.querySelector(".right_score_num").textContent = rightScore;
    document.querySelector(".main_component").style.backgroundColor = "#60b347";
    document.querySelector(".guessed_num").textContent = guessedNum;
    guess_remark_message("hurray u win");
  }
}

function checkGameOver() {
  if (rightScore < 1) {
    document.querySelector(".right_score_num").textContent = 0;
    guess_remark_message("u lost the game");
  }
}

function rightScoreDecrement() {
  rightScore--;
  document.querySelector(".right_score_num").textContent = rightScore;
}

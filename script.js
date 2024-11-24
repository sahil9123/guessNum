"use strict";
// document.querySelector(".abs_range").textContent = "between";
// document.querySelector(".right_score").textContent =
// document.querySelector(".input_box").value = 32;
// console.log(document.querySelector(".input_box").value);

const buttonListner = document.querySelector(".guess_btn");
let secretNum = Math.ceil(Math.random() * 20) + 1;
let rightScore = 20;

document.querySelector(".abs_playgain").addEventListener("click", () => {
  document.querySelector(".main_component").style.backgroundColor = "cyan";
  document.querySelector(".guess_remark").textContent = "start guessing";
  document.querySelector(".right_score_num").textContent = 20;
  document.querySelector(".input_box").value = "";
  document.querySelector(".guessed_num").textContent = "?";
  rightScore == 20;
  secretNum = Math.ceil(Math.random() * 20) + 1;
});

buttonListner.addEventListener("click", () => {
  console.log(typeof rightScore);

  const guessedNum = Number(document.querySelector(".input_box").value);

  if (!guessedNum) {
    document.querySelector(".guess_remark").textContent = "no number! ";
  } else if (guessedNum < 1 || guessedNum > 20) {
    document.querySelector(".guess_remark").textContent = "number out of bound";
  } else if (guessedNum > secretNum && guessedNum - secretNum > 3) {
    document.querySelector(".guess_remark").textContent = "very high";
    rightScore--;
    document.querySelector(".right_score_num").textContent = rightScore;
    if (rightScore < 1) {
      document.querySelector(".right_score_num").textContent = 0;
      document.querySelector(".guess_remark").textContent = "u lost the game";
    }
  } else if (secretNum > guessedNum && secretNum - guessedNum > 3) {
    document.querySelector(".guess_remark").textContent = "very low";
    rightScore--;
    document.querySelector(".right_score_num").textContent = rightScore;
    if (rightScore < 1) {
      document.querySelector(".right_score_num").textContent = 0;
      document.querySelector(".guess_remark").textContent = "u lost the game";
    }
  } else if (guessedNum > secretNum) {
    document.querySelector(".guess_remark").textContent = "bit high";
    rightScore--;
    document.querySelector(".right_score_num").textContent = rightScore;
    if (rightScore < 1) {
      document.querySelector(".right_score_num").textContent = 0;
      document.querySelector(".guess_remark").textContent = "u lost the game";
    }
  } else if (guessedNum < secretNum) {
    document.querySelector(".guess_remark").textContent = "bit low";
    rightScore--;
    document.querySelector(".right_score_num").textContent = rightScore;
    if (rightScore < 1) {
      document.querySelector(".right_score_num").textContent = 0;

      document.querySelector(".guess_remark").textContent = "u lost the game";
    }
  } else if (guessedNum === secretNum) {
    document.querySelector(".high_score_class").textContent = rightScore;
    if (rightScore < 1) {
      document.querySelector(".right_score_num").textContent = 0;

      document.querySelector(".guess_remark").textContent = "u lost the game";
    }
    document.querySelector(".right_score_num").textContent = rightScore;
    document.querySelector(".main_component").style.backgroundColor = "#60b347";
    document.querySelector(".guessed_num").textContent = guessedNum;
    document.querySelector(".guess_remark").textContent = "hurray u win";
  }
});

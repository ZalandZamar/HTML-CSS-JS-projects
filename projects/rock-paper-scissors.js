const rock = document.querySelector(".js-rock");
const paper = document.querySelector(".js-paper");
const scissors = document.querySelector(".js-scissors");
const display = document.querySelector(".display");
const win = document.querySelector(".wins");
const lose = document.querySelector(".loses");
const tie = document.querySelector(".ties");
const autoPlay = document.querySelector(".autoPlay");
const stopAutoPlay = document.querySelector(".stopAutoPlay");
const reset = document.querySelector(".reset");
let intervalId;

rock.addEventListener("click", () => {
  playGame("rock");
});

paper.addEventListener("click", () => {
  playGame("paper");
});

scissors.addEventListener("click", () => {
  playGame("scissors");
});

const scoreObj = JSON.parse(localStorage.getItem("score")) ||{
  wins: 0,
  loses: 0,
  ties: 0
};

autoPlay.addEventListener("click", () => {
  intervalId = setInterval(() => {
    const moves = ["rock", "paper", "scissors"];
    const playerMove = moves[Math.floor(Math.random() * 3)];
    playGame(playerMove);
  }, 1000);
});

stopAutoPlay.addEventListener("click", () => {
  clearInterval(intervalId);
});

reset.addEventListener("click", () => {
  localStorage.removeItem("score");
  scoreObj.wins = 0;
  scoreObj.loses = 0;
  scoreObj.ties = 0;
  win.textContent = 0;
  lose.textContent = 0;
  tie.textContent = 0;
});

win.textContent = scoreObj.wins;
lose.textContent = scoreObj.loses;
tie.textContent = scoreObj.ties;

function playGame(playerMove) {
  const moves = ["rock", "paper", "scissors"];
  const computerMove = moves[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerMove === computerMove) {
    result = "Tie.";
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = "You Win.";
  } else {
    result = "You Lose.";
  }

  display.innerHTML = `You: ${playerMove} Computer: ${computerMove} Result: ${result}`;

  if(result === "You Win.") {
    scoreObj.wins++;
    win.textContent = scoreObj.wins
  } else if(result === "You Lose.") {
    scoreObj.loses++;
    lose.textContent = scoreObj.loses;
  } else if (result === "Tie.") {
    scoreObj.ties++;
    tie.textContent = scoreObj.ties;
  }

  localStorage.setItem("score", JSON.stringify(scoreObj));
}

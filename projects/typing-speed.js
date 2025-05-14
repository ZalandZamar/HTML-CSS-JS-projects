const typingInput = document.querySelector(".js-typing-speed-input");
const checkBtn = document.querySelector(".js-check-button");
const display = document.querySelector(".js-display");
const resetBtn = document.querySelector(".js-reset-button");
const selectOption = document.querySelector(".js-select");
let inputValue = "";
let isTimerStarted = false;

resetBtn.addEventListener("click", () => {
  typingInput.value = "";
  display.innerHTML = "";
  typingInput.readOnly = false;
  isTimerStarted = false;
});

typingInput.addEventListener("keydown", () => {
  if(!isTimerStarted) {
    isTimerStarted = true;
    setTimeout(() => {
      inputValue = typingInput.value;
      typingInput.readOnly = true;
    }, selectOption.value * 1000);
  }
});

checkBtn.addEventListener("click", () => {
  const WPM = inputValue.split(" ").length;
  display.innerHTML =` ${Math.ceil((WPM * 60) / selectOption.value)} WPM`;
  isTimerStarted = false;
});



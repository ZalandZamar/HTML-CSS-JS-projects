const hours = document.querySelector(".js-hours");
const minutes = document.querySelector(".js-minutes");
const seconds = document.querySelector(".js-seconds");
const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
const resetBtn = document.querySelector(".js-reset");
let intervalId;

const timeObj = JSON.parse(localStorage.getItem("time")) ||{
  hours: 0,
  minutes: 0,
  seconds: 58
};

hours.innerHTML = String(timeObj.hours).padStart(2, '0') + ":";
minutes.innerHTML = String(timeObj.minutes).padStart(2, '0') + ":";
seconds.innerHTML = String(timeObj.seconds).padStart(2, '0');

startBtn.addEventListener("click", () => {

  intervalId = setInterval(() => {
    timeObj.seconds++;

  if (timeObj.seconds >= 60) {
    timeObj.seconds = 0;
    timeObj.minutes++;
  
  if (timeObj.minutes >= 60) {
    timeObj.minutes = 0;
    timeObj.hours++;
    hours.innerHTML = String(timeObj.hours).padStart(2, '0') + ":";
  }

  minutes.innerHTML = String(timeObj.minutes).padStart(2, '0') + ":";
}

seconds.innerHTML = String(timeObj.seconds).padStart(2, '0');

localStorage.setItem("time", JSON.stringify(timeObj));
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);  
  localStorage.setItem("time", JSON.stringify(timeObj));
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  timeObj.hours = 0;
  timeObj.minutes = 0;
  timeObj.seconds = 0;

  hours.innerHTML = String(timeObj.hours).padStart(2, '0') + ":";
  minutes.innerHTML = String(timeObj.minutes).padStart(2, '0') + ":";
  seconds.innerHTML = String(timeObj.seconds).padStart(2, '0');

  localStorage.setItem("time", JSON.stringify(timeObj));
});
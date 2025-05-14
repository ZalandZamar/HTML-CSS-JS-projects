const toggleBtn = document.querySelector(".js-toggle");
let isToggle = false;

toggleBtn.addEventListener("click", () => {
  if(isToggle) {
    document.body.style.backgroundColor = "white";
    toggleBtn.textContent = "Off";
    isToggle = false;
  } else {
    document.body.style.backgroundColor = "black";
    toggleBtn.textContent = "On";
    isToggle = true;
  }
});
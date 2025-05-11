const finalResult = document.querySelector(".result");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const point = document.querySelector('.point');
const equal = document.querySelector(".eval");
const clear = document.querySelector(".clear");

numbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    updateCalculation(Number(btn.textContent));
  });
});

operators.forEach((btn) => {
  btn.addEventListener("click", () => {
    updateCalculation(btn.textContent);
  });
});

point.addEventListener("click", () => {
  updateCalculation('.');
});

let calculation = "";
let result;

function updateCalculation(numbers) {
  result = calculation += `${numbers}`;
  console.log(result);
  finalResult.innerHTML = result;
}

equal.addEventListener("click", () => {
  result = eval(calculation)
  console.log(result);
  finalResult.innerHTML = result;
  calculation = String(result);
});

clear.addEventListener("click", () => {
  result = 0;
  calculation = "";
  finalResult.innerHTML = result;
})
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
  errorHandling(); // Handle errors first
  roman();         // Only convert if the input is valid
});

function roman() {
  const romanPairs = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let num = parseInt(numberInput.value);
  let result = "";

  if (isNaN(num) || num <= 0 || num >= 4000) {
    return; 
  }

  for (let pair of romanPairs) {
    while (num >= pair.value) {
      result += pair.symbol;
      num -= pair.value;
    }
  }

  output.innerText = result;
}

function errorHandling() {
  const num = parseInt(numberInput.value);

  if (numberInput.value === "") {
    output.innerText = "Please enter a valid number";
  } else if (isNaN(num)) {
    output.innerText = "Invalid input. Enter a number.";
  } else if (num <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1.";
  } else if (num >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999.";
  }
}

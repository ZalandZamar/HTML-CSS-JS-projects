const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  palindrome(input.value);
});

function palindrome(value) {
  const inputValue = value;
  if(inputValue === ""){
    alert("Please input a value");
  }

  const regex = inputValue.replace
    (/[^a-zA-Z0-9]/g, '').toLowerCase();

  const reverseValue = regex.split
    ('').reverse().join ('');

  if(regex === reverseValue){
    result.innerHTML = `
      ${inputValue} is a palindrome
    `;
  } else {
    result.innerHTML = `
      ${inputValue} is not a palindrome
    `;
  }
}
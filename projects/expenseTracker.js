const description = document.querySelector(".js-description");
const amount = document.querySelector(".js-amount");
const categorySelect = document.querySelector('.js-category');

const addBtn = document.querySelector(".js-add-button");
const display = document.querySelector(".js-display");
const totalExpense = document.querySelector(".js-total-expense-display");

let total = 0;
let showAll = false;

const toggleBtn = document.createElement("button");
toggleBtn.classList.add("all-expenses");
toggleBtn.textContent = "Show All Expenses";
display.insertAdjacentElement("beforebegin", toggleBtn);

addBtn.addEventListener("click", () => {
  expenseTracker();
});

toggleBtn.addEventListener("click", () => {
  showAll = !showAll;
  updateVisibility();
  toggleBtn.textContent = showAll ? "Hide Older Expenses" : "Show All Expenses";
});

function expenseTracker() {
  const selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;
  const eachTrack = document.createElement("p");
  display.appendChild(eachTrack);

  eachTrack.innerHTML = `
    ${description.value}: $${amount.value}(${selectedCategory}) 
    <button class="js-edit">Edit</button>
    <button class="js-remove">Remove</button>
  `;

  total += Number(amount.value);
  totalExpense.innerHTML = "Total Expense: $" +total;

  const editBtn = eachTrack.querySelector(".js-edit");
  const removeBtn = eachTrack.querySelector(".js-remove");

  editBtn.addEventListener("click", () => {
    const text = eachTrack.innerText;

    const updatedDescription = text.split(":")[0].trim();
    const updatedAmount = text.split("$")[1].split("(")[0].trim();
    const updatedCategory = text.split("(")[1].split(")")[0].trim();

    description.value = updatedDescription;
    amount.value = updatedAmount;
    for (let i = 0; i < categorySelect.options.length; i++) {
      if (categorySelect.options[i].text === updatedCategory) {
        categorySelect.selectedIndex = i;
        break;
      }
    }    

    eachTrack.remove();
    total -= Number(amount.value);
    totalExpense.innerHTML = "Total Expense: $" + total;
  });

  removeBtn.addEventListener("click", () => {
    eachTrack.remove();
    total -= Number(amount.value);
    totalExpense.innerHTML = "Total Expense: $" + total;
  }); 
}

function updateVisibility() {
  const entries = display.querySelectorAll("p");
  entries.forEach((entry, index) => {
    entry.style.display = (index === 0 || showAll) ? "block" : "none";
  });
}

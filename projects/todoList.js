const inputTask = document.querySelector(".todo");
const inputDate = document.querySelector(".date");
const addBtn = document.querySelector(".add");
const display = document.querySelector('.display');
const todoArray = JSON.parse(localStorage.getItem("data")) || [];

addBtn.addEventListener("click", () => {
  todoApp();
});

function displayTasks() {
  display.innerHTML = "";
  todoArray.forEach((task, index) => {
    const displayP = document.createElement("p");
    displayP.classList.add("forCss");

    displayP.innerHTML = `
    <span>${task.inputTask}</span> <span>${task.inputDate}</span> <button class="delete">Delete</button>
   `;

   display.appendChild(displayP);

   const deleteBtn = displayP.querySelector(".delete");
   deleteBtn.addEventListener("click", () => {
    todoArray.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(todoArray));
    displayTasks();
   });
  });
}

function todoApp() {
 const tasks = {
  inputTask: inputTask.value,
  inputDate: inputDate.value
 };  

 todoArray.push(tasks);

 localStorage.setItem("data", JSON.stringify(todoArray));

 displayTasks(); 
}

displayTasks();
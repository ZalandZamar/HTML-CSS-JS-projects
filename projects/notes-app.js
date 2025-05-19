const container = document.querySelector(".js-container");
const modal = document.getElementById("myModal");
const title = document.querySelector(".js-title");
const task = document.querySelector(".js-task");
const addBtn = document.querySelector(".js-add-button");
const closeBtn = document.querySelector(".js-close-button");
const saveBtn = document.querySelector(".js-save-button");
let divElement;

const textArray = JSON.parse(localStorage.getItem("data")) ||[];
let editingIndex = null;

textArray.forEach((item, index) => {
  const divElement = document.createElement("div");
  divElement.classList.add("tasks");
  divElement.dataset.index = index;

  const titleSpan = document.createElement("span");
  titleSpan.classList.add("task-title-span");
  titleSpan.textContent = item.titleVal;
  divElement.appendChild(titleSpan);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  divElement.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", (event) => {
    deleteTask(event, divElement);
  })

  divElement.addEventListener("click", () => {
    editingIndex = Number(divElement.dataset.index);
    title.value = textArray[editingIndex].titleVal;
    task.value = textArray[editingIndex].taskVal;

    modal.classList.add("newModal");
    container.classList.add("hide-container");
    addBtn.classList.add("addRemove");
  });

  container.appendChild(divElement);
});

addBtn.addEventListener("click", () => {
  modal.classList.add("newModal");
  addBtn.classList.add("addRemove");  
  container.classList.add("hide-container");
  title.value = "";
  task.value = "";
  editingIndex = null;
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("newModal");
  addBtn.classList.remove("addRemove");
  container.classList.remove("hide-container");
});

saveBtn.addEventListener("click", () => {
  if(editingIndex !== null) {
    textArray[editingIndex].titleVal = title.value;
    textArray[editingIndex].taskVal = task.value;

    const divToUpdate = container.querySelector(`[data-index='${editingIndex}']`);
    const titleSpan = divToUpdate.querySelector(".task-title-span");
    titleSpan.textContent = title.value;
  } else {
    textArray.push({
      titleVal: title.value,
      taskVal: task.value
    });

    const newIndex = textArray.length - 1;

    const divElement = document.createElement("div");
    divElement.classList.add("tasks");
    divElement.dataset.index = newIndex;
    // divElement.textContent = title.value;

    const titleSpan = document.createElement("span");
    titleSpan.classList.add("task-title-span");
    titleSpan.textContent = title.value;
    divElement.appendChild(titleSpan);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    divElement.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", (event) => {
      deleteTask(event, divElement);
      
    });

    divElement.addEventListener("click", () => {
      editingIndex = Number(divElement.dataset.index);
      title.value = textArray[editingIndex].titleVal;
      task.value = textArray[editingIndex].taskVal;

      modal.classList.add("newModal");
      container.classList.add("hide-container");
      addBtn.classList.add("addRemove");
    });

    container.appendChild(divElement);
  }

  modal.classList.remove("newModal");
  container.classList.remove("hide-container");
  addBtn.classList.remove("addRemove");
  title.value = "";
  task.value = "";

  localStorage.setItem("data", JSON.stringify(textArray));
  });

function deleteTask (event, divElement) {
  event.stopPropagation();

  const index = Number(divElement.dataset.index);

  textArray.splice(index, 1);

  localStorage.setItem("data", JSON.stringify(textArray));

  container.removeChild(divElement);

  [...container.children].forEach((child, newIndex) => {
    child.dataset.index = newIndex;
  });
}
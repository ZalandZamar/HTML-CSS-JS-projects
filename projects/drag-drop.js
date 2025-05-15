let lists = document.getElementsByClassName("list");
const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");

for(list of lists) {
  list.addEventListener("drag", (e) => {
    let selected = e.target;

    rightBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    rightBox.addEventListener("drop", (e) => {
      rightBox.appendChild(selected);
      selected = null;
    });
    
    leftBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    leftBox.addEventListener("drop", (e) => {
      leftBox.appendChild(selected);
      selected = null;
    });

  });
}
















/*
dragApp(".container", ".drag-container", ".drop-container");
dragApp(".container-1", ".drag", ".drop");
dragApp(".container-2", ".drag", ".drop");
dragApp(".container-3", ".drag", ".drop");

function dragApp (newContainer, dragContainer, dropContainer) {
  const container = document.querySelector(newContainer);
  const draggable = container.querySelectorAll(dragContainer);
  const dropzone = container.querySelectorAll(dropContainer);

  let positionArray = Array.from(container.children);

  draggable.forEach(dragged => {
    dragged.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("dragged-index", positionArray.indexOf(dragged));
    });
  });

  dropzone.forEach(dropped => {
    dropped.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
  });

  dropzone.forEach(dropped => {
    dropped.addEventListener("drop", (e) => {
      e.preventDefault();

      const draggedIndex = parseInt(e.dataTransfer.getData("dragged-index"));
      const dropZoneIndex = positionArray.indexOf(dropped);
    
      [positionArray[draggedIndex], positionArray[dropZoneIndex]] =
        [positionArray[dropZoneIndex], positionArray[draggedIndex]];
                
      container.innerHTML = "";
      
      positionArray.forEach(div => container.appendChild(div));
    
      positionArray = Array.from(container.children);  
    });
  });
}
*/
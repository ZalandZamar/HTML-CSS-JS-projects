const images = Array.from(container.children);
const restartBtn = document.querySelector(".js-restart-button");
const display = document.querySelector(".display");
let firstClickedImage;
let isFirstClick = true;
let matches = 1;

const originalSrcs = images.map(img => img.src);
shuffleImages();

images.forEach((img, i) => {
  img.src = "images/blank.webp";
  img.addEventListener("click", () => {
    img.src = originalSrcs[i];
    
    if(isFirstClick) {
      firstClickedImage = img;
      isFirstClick = false
    } else {
      if(firstClickedImage.src === img.src) {
        display.innerHTML = matches++ + " Match";
        setTimeout(() => {
          img.src = "images/check-mark.webp";
          firstClickedImage.src = "images/check-mark.webp";
        }, 1000);
      } else {
        setTimeout(() => {
          img.src = "images/blank.webp";
          firstClickedImage.src = "images/blank.webp";
        }, 1000);      }

      isFirstClick = true;
    }
  });
});

function shuffleImages() {
  const container = document.getElementById('container');
  const images = Array.from(container.children);

  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  images.forEach(img => container.appendChild(img));
}

restartBtn.addEventListener("click", () => {
    shuffleImages();
    images.map(img => img.src = "images/blank.webp");
    matches = 0;
    display.innerHTML = matches + " Match";
});
const startBtn = document.querySelector(".js-start");
const nextBtn = document.querySelector(".js-next");
const previousBtn = document.querySelector(".js-previous");
const repeatBtn = document.querySelector(".js-repeat");
const shuffleBtn = document.querySelector(".js-shuffle");
const songItems = document.querySelectorAll(".songs");

const songs = [
  "audio/song-1.mp3",
  "audio/song-2.mp3",
  "audio/song-3.mp3",
  "audio/song-4.mp3",
  "audio/song-5.mp3"
];

let audio = new Audio(songs[0]);
let currentIndex = 0;

startBtn.addEventListener("click", () => {
  if(startBtn.textContent === "start") {
    audio.play();
    startBtn.textContent = "stop";
  } else {
    audio.pause();
    startBtn.textContent = "start";
  }

  highlightSongs();
});

nextBtn.addEventListener("click", () => {
  if(startBtn.textContent === "stop") {
    if(currentIndex < songs.length - 1) {
      currentIndex++;
      audio.src = songs[currentIndex];
      audio.play();
    } else {
      currentIndex = 0;
      audio.src = songs[currentIndex];
      audio.play();
    }
  }

  highlightSongs();
});

previousBtn.addEventListener("click", () => {
  if(startBtn.textContent === "stop") {
    if(currentIndex === 0) {
      currentIndex = songs.length - 1;
      audio.src = songs[currentIndex];
      audio.play();
    } else {
      currentIndex--;
      audio.src = songs[currentIndex];
      audio.play();
    }
  }

  highlightSongs();
});

repeatBtn.addEventListener("click", () => {
  audio.loop = !audio.loop;

  if(audio.loop) {
    repeatBtn.classList.add("repeated");
  } else {
    repeatBtn.classList.remove("repeated");
  }

  highlightSongs();
});

let isShuffled = false;
const shuffledSongs = [...songs];

shuffleBtn.addEventListener("click", () => {
 isShuffled = !isShuffled;

 if(isShuffled) {
  for(let i = shuffledSongs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledSongs[i], shuffledSongs[j]] = [shuffledSongs[j], shuffledSongs[i]];
  }

  shuffleBtn.classList.add("shuffled");
  currentIndex = 0;
  audio.src = shuffledSongs[currentIndex];
  audio.play();
  startBtn.textContent = "stop";
 } else {
  shuffleBtn.classList.remove("shuffled");
  currentIndex = 0;
  audio.src = songs[currentIndex];
  audio.play();
  startBtn.textContent = "stop";
 }

 highlightSongs();
});

audio.addEventListener("ended", () => {
  const currentArray = isShuffled ? shuffledSongs : songs;

  if (currentIndex < currentArray.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  audio.src = currentArray[currentIndex];
  audio.play();

  highlightSongs();
});

function highlightSongs() {
  songItems.forEach(item => {
    const index = parseInt(item.dataset.index);

    if (index === currentIndex) {
      item.classList.add("highlight"); 
    } else {
      item.classList.remove("highlight");
    }
  });
}

songItems.forEach(item => {
  item.addEventListener("click", () => {
    currentIndex = parseInt(item.dataset.index);
    audio.src = isShuffled ? shuffledSongs[currentIndex] : songs[currentIndex];
    audio.play();
    startBtn.textContent = "stop";
    highlightSongs();
  });
});

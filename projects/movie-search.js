 const container = document.querySelector(".container");
 const input = document.querySelector(".js-input");
 const searchBtn = document.querySelector(".js-search-button");
 let isSearching;
 
 searchBtn.addEventListener("click", () => {
  isSearching = true;
  container.innerHTML = "";
  movieSerach();
  input.value = "";
 });

 input.addEventListener("keydown", (event) => {
  if(event.key === "Enter") {
    isSearching = true;
    container.innerHTML = "";
    movieSerach();
    input.value = "";
  }
 })

 if(!isSearching) {
  movieS();
 }

 async function movieSerach() {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b620f88219d77b4d15bfb0580dc1c7b0&query=${input.value}`);

  const data = await response.json();
  console.log(data.results);

  data.results.forEach(movie => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    <p>⭐ ${movie.vote_average}</p>
    <p>${movie.release_date}</p>
  `;

  container.appendChild(movieEl);
  });  
 }

 async function movieS(totalPages = 3) {

  const allMovies = [];

  for (let i = 1; i < totalPages; i++) {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b620f88219d77b4d15bfb0580dc1c7b0&page=${i}`);
    const data = await res.json();
    allMovies.push(...data.results);

    allMovies.forEach(movie => {
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");
  
      movieEl.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>⭐ ${movie.vote_average}</p>
      <p>${movie.release_date}</p>
    `;
  
    container.appendChild(movieEl);
    });
  }
 }
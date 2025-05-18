const userName = document.querySelector(".js-username");
const searchBtn = document.querySelector(".js-search-button");

async function githubApi() {
  const response = await fetch(`https://api.github.com/users/${userName.value}`);
  const data = await response.json();
  console.log(data.avatar_url);
}

searchBtn.addEventListener("click", () => {
  githubApi();
});

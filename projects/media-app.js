const signInUpContainer = document.querySelector(".js-sign-in-up-container");
const signInContainer = document.querySelector(".js-sign-in-container");
const signUpContainer = document.querySelector(".js-sign-up-container");
const signInBtn = document.querySelector(".js-sign-in-button");
const signUpBtn = document.querySelector(".js-sign-up-button");
const signInSumbitBtn = document.querySelector(".js-sign-in-sumbit-button");
const signUpSumbitBtn = document.querySelector(".js-sign-up-sumbit-button");
const singInInputUserName = document.querySelector(".js-sign-in-input-username");
const singInInputEmail = document.querySelector(".js-sign-in-input-email");
const signInInputPassWord = document.querySelector(".js-sign-in-input-password");
const singUpInputUserName = document.querySelector(".js-sign-up-input-username");
const singupInputEmail = document.querySelector(".js-sign-up-input-email");
const signUPInputPassWord = document.querySelector(".js-sign-up-input-password");
const postsModal = document.querySelector(".js-posts-modal");
const createPost = document.querySelector(".js-input-post");
const postsContainer = document.querySelector(".js-posts-container");
const postArea = document.querySelector(".js-post-text-area");
const postBtn = document.querySelector(".js-post-button");
const displayPostContainer = document.querySelector(".js-display-container");
const displayPost = document.querySelector(".js-display-post");
const postAgain = document.querySelector(".js-post-again-button"); 


const userData = JSON.parse(localStorage.getItem("data")) || [];

signInBtn.addEventListener("click", () => {
  signInUpContainer.classList.add("hide-sign-in-up-container");
  signInContainer.classList.remove("hide-sign-in-container")
});

signUpBtn.addEventListener("click", () => {
  signInUpContainer.classList.add("hide-sign-in-up-container");
  signUpContainer.classList.remove("hide-sign-up-container");
});

signInSumbitBtn.addEventListener("click", () => {
  signIn();
});

signUpSumbitBtn.addEventListener("click", () => {
  signUp();
  // signIn();
});

createPost.addEventListener("click", () => {
  createPost.classList.add("hide-input-post");
  postsContainer.classList.remove("hide-posts-container");
});

postBtn.addEventListener("click", () => {
  postsModal.classList.add("hide-posts-modal");
  displayPostContainer.classList.remove("hide-display-container");  

  const P = document.createElement("div");
  P.classList.add("js-p");
  displayPostContainer.appendChild(P);
  P.innerHTML = postArea.value;

  const userId = parseInt(localStorage.getItem("loggedInUserId"));
  const user = userData.find(user => user.id === userId);

  if(user) {
    user.posts.push(postArea.value);
    saveToStorage();
  }
  console.log(userData);
});

postAgain.addEventListener("click", () => {
  postsModal.classList.remove("hide-posts-modal");
  displayPostContainer.classList.add("hide-display-container");
  postArea.value = ""; 
});

function signIn() {
  const user = userData.find(user =>
    user.Email === singInInputEmail.value &&
    user.password === signInInputPassWord.value
  );

  if (user) {
    localStorage.setItem("loggedInUserId", user.id);
    signInContainer.classList.add("hide-sign-in-container");
    postsModal.classList.add("hide-posts-modal");
    displayPostContainer.classList.remove("hide-display-container");

    displayPostContainer.innerHTML = "";

    user.posts.forEach(post => {
      const P = document.createElement("div");
      P.classList.add("js-p");
      P.innerHTML = post;
      displayPostContainer.appendChild(P);
    });

  } else {
    alert("Invalid email or password.");
  }
}


function signUp() {
  const newUser = {
    id: Date.now(),
    username: singUpInputUserName.value,
    Email: singupInputEmail.value,
    password: signUPInputPassWord.value,
    posts: []
  };

  userData.push(newUser);
  saveToStorage();

  localStorage.setItem("loggedInUserId", newUser.id);

  signUpContainer.classList.add("hide-sign-up-container");
  postsModal.classList.remove("hide-posts-modal");
}


function saveToStorage() {
  localStorage.setItem("data", JSON.stringify(userData));
}
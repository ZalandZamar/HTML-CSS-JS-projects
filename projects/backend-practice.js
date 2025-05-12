/*
function loadBackend(callback) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", () => {
    console.log(xhr.response);
    callback();
  });

  xhr.open("GET", "https://supersimplebackend.dev");
  xhr.send();
}

new Promise((resovle) => {
  loadBackend(() => {
    resovle();
  });
}).then(() => {
  console.log("back end loaded");
});
*/

/*
function loadBackend() {
  const promise = fetch("https://supersimplebackend.dev").then((response) => {
    return response.text();
  }).then((productsData) => {
    console.log(productsData);
  });

  return promise;
}

loadBackend().then(() => {
  console.log("well it worked");
});
*/

async function loadBackend() {
 const response = await fetch("https://supersimplebackend.dev");
 const data = await response.text();
 console.log(data)
}

loadBackend().then(() => {
  console.log("so it worked again");
});
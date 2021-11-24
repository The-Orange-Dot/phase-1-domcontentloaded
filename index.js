// Your code goes here
const text = document.querySelector("#text");

document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM has loaded");
});

document.addEventListener("DOMContentLoaded", () => {
  text.textContent = "This is really cool!";
});

// rename title with JavaScript
const heroTitleText = document.querySelector('#hero__title');
heroTitleText.textContent = "That's a Great Title!";

heroTitleText.classList.add("new-class");

// create a node list of all paragraphs that do NOT have a class
const paragraphs = document.querySelectorAll('p:not([class])');
// use a for loop to select every pargraph
// for (let i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].textContent = "I've been changed to a default paragraph in JavaScript";
// }

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].textContent = "I've been changed to default paragraph text in JavaScript";
}

let whiteBtn = document.getElementById("white");
let greyBtn = document.getElementById("grey");
let blackBtn = document.getElementById("black");
let pinkBtn = document.getElementById("pink");
let yellowBtn = document.getElementById("yellow");

white.addEventListener("click", function() {
  document.body.style.backgroundColor = "white"
})
white.addEventListener("click", function() {
  document.body.style.color = "hotpink";
})

grey.addEventListener("click", function() {
  document.body.style.backgroundColor = "grey"
})

grey.addEventListener("click", function() {
  document.body.style.color = "white";
})

black.addEventListener("click", function() {
  document.body.style.backgroundColor = "black";
})

black.addEventListener("click", function() {
  document.body.style.color = "white";
})

pink.addEventListener("click", function() {
  document.body.style.backgroundColor = "pink"
})

pink.addEventListener("click", function() {
  document.body.style.color = "hotpink";
})

yellow.addEventListener("click", function() {
  document.body.style.backgroundColor = "yellow"
})

yellow.addEventListener("click", function() {
  document.body.style.color = "black";
})


const aboutH2 = document.querySelector(".about > h2");
aboutH2.textContent = "Here's a great list:";

const listItems = document.querySelectorAll('li');

for (i = 0; i < listItems.length; i++) {
  listItems[i].textContent = (`I am list item ${[i+1]} of ${(listItems.length)} items`);
}




const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically created paragaraph .";
console.log(newParagraph);

const container = document.getElementById("container");
container.appendChild(newParagraph);
const container = document.querySelector('#container'); // selects element #container

const content = document.createElement('div'); // creates a div
content.classList.add('contentClass'); // adds a class to that div
content.textContent = "This is a new JS generated content"; // adds text to that div

container.appendChild(content); // inserts the div to the selected element #container


const para = document.createElement('p'); // creates a p
para.style.cssText = "color: red;"; // add css style within html tag
para.textContent = "I am a red 'p'";

container.appendChild(para);
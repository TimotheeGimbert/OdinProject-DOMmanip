const container = document.querySelector('#container'); // selects element #container

const content = document.createElement('div'); // creates a div
content.classList.add('contentClass'); // adds a class to that div
content.textContent = "This is a new JS generated content"; // adds text to that div

container.appendChild(content); // inserts the div to the selected element #container


const para = document.createElement('p'); // creates a p
para.style.cssText = "color: red;"; // add css style within html tag
para.textContent = "I am a red 'p'";

container.appendChild(para);

const title2 = document.createElement('h3');
title2.style.cssText = "color: blue;";
title2.textContent = "I'm a blue title h3";

container.appendChild(title2);




const div = document.createElement('div');
div.style.cssText = "border: 3px solid black; background-color: pink;";

const divH1 = document.createElement('h1');
const divP = document.createElement('p');
divH1.textContent = "I'm a h1 inside a pink div";
divP.textContent = "I'm a p inside the same pink div";

div.appendChild(divH1);
div.appendChild(divP);

container.appendChild(div);
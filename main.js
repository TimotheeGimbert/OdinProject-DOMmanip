const container = document.querySelector('#container'); // selects element #container

const content = document.createElement('div'); // creates a div
content.classList.add('contentClass'); // adds a class to that div
content.textContent = 'This is a new JS generated content'; // adds text to that div

container.appendChild(content); // inserts the div to the selected element #container


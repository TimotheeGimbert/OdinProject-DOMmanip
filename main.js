const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('contentClass');
content.textContent = 'This is a new JS generated content';

container.appendChild(content);
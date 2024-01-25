const container = document.querySelector('#container');


const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const contentP = document.createElement('p');
contentP.classList.add('contentP');
contentP.textContent = "Hey I'm red!";
contentP.style.color = 'red';

container.appendChild(contentP);


const contentH3 = document.createElement('h3');
contentH3.classList.add('contentH3');
contentH3.textContent = "I'm a blue h3!";
contentH3.style.color = 'blue';

container.appendChild(contentH3);


const borderDiv = document.createElement('div');
borderDiv.classList.add('borderDiv');
borderDiv.style.border = '1px solid black';
borderDiv.style.backgroundColor = 'pink';


const anotherH1 = document.createElement('h1');

anotherH1.classList.add('anotherH1');
anotherH1.textContent = "I'm in a div"
borderDiv.appendChild(anotherH1);

const anotherP = document.createElement('p');
anotherP.textContent = "ME TOO!";
borderDiv.appendChild(anotherP);

container.appendChild(borderDiv);
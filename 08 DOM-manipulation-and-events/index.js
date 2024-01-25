
// DOM Manipulation Exercise
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




// Event Listener Exercise

// 1st Method
const btn = document.querySelector('#btn');
btn.style.padding = '8px 16px'
btn.onclick = () => alert('Hello World - onclick method');

// 2nd Method - recommended method 
const btn2 = document.querySelector('#btn2');
btn2.style.padding = '8px 16px'
btn2.addEventListener('click', () => {
    alert('Hello World - addEventListener method');
})

// Using Named Functions 
// recommended method if the function is going to be used in multiple places
const btn3 = document.querySelector('#btn3');
btn3.style.padding = '8px 16px';

function alertFunction () {
    alert('Hello World - using named function');
}
btn3.addEventListener('click', alertFunction);

// using function (e)
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });


//   Attaching listeners to groups of nodes 
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});


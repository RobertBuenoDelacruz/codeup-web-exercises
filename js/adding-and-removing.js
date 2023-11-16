const myNewP = document.createElement('p');
myNewP.innerText = "I'm a paragraph";
myNewP.id = "myNewP";
myNewP.classList.add('fs-2', 'fw-bold', 'text-center');

document.querySelector('#newContent').appendChild(myNewP)
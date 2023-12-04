"use strict"

import randomGreeting from "./greeting-logic.js";

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    console.log(event.target[0].value);
document.querySelector("p").innerText = `${randomGreeting()} ${event.target[0].value}`;
    event.target[0].value = ''
});

console.log(randomGreeting())
    // const greeting = getRandomGreeting();
    // const userName = document.getElementById('nameInput').value;
    // const greetingDisplay = document.getElementById('greetingDisplay');
    // greetingDisplay.innerText = `${greeting}, ${username}!`;



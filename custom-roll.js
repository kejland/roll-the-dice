const prompt = require("prompt-sync")();

let sides = Number(prompt("Hi there! Please enter the number of sides you want your dice to have: "));

let roll = Number(prompt("Hit your enter key to roll the dice"));

let random = Math.random()*sides;

console.log(Math.ceil(random));
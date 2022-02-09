const prompt = require("prompt-sync")();

let sides = Number(prompt("Hi there! Please enter the number of sides you want your dice to have: "));

//eg. if out of a 6-sided dice the user wants #2 to be rigged with twice the probability to get rolled vs the other numbers
let rigged = Number(prompt("Please enter which #side of your dice you want to be rigged: "))

let roll = Number(prompt("Hit your enter key to roll your dice"));


//Math.ciel(random) vs Math.floor(random)
//if statement? if random number = rigged number -> twice the probability?
//include 0 in the range of sides -> and then make if statement so when 0 rolls out, then the rigged side will show instead 
//or it could be sides +1

// let random = Math.random()*sides;
// let rigProb = Math.ceil(random)+1;

//if the outcome is the sides+1, then the rigged number should show


// if ( rigProb === (sides+1)){
//     console.log(rigged);
// } else {
//     console.log(Math.ceil(random));
// }


let random = Math.random()*(sides+1);
let output = Math.ceil(random)
let norm = Math.ceil(Math.random()*sides);

if (output <= sides){
    console.log(norm);
} else {
    console.log(rigged);
}
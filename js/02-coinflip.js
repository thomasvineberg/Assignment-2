var coinFlip = Math.round(Math.random());

var choice = prompt("Heads or Tails?");

if (coinFlip === 1) {
    coinFlip = true;
}
else if (coinFlip === 0) {
    coinFlip = false;
}

if (coinFlip === true && choice === "Heads") {
    window.alert("The flip was Heads, you chose Heads... you win!");
}   else if (coinFlip === true && choice === "Tails") {
    window.alert("The flip was Heads, you chose Tails... you lose!");
}   else if (coinFlip === false && choice === "Tails") {
    window.alert("The flip was Tails, you chose Tails... you win!");
}   else if (coinFlip === false && choice === "Heads") {
    window.alert("The flip was Tails, you chose Heads... you lose!");
}   else  {window.alert("Please enter either Heads or Tails.");}
var coinFlip;

var i;

for (i = 1; i <= 10; i += 1) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        coinFlip = "Heads";
    }
    else if (coinFlip === 1) {
        coinFlip = "Tails";
    }
    window.document.write(coinFlip + "<br>");
}
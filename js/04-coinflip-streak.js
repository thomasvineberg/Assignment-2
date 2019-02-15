var coinFlip;

var i = 0;

do  {
    i += 1; 
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        coinFlip = "Heads";
    }
    else if (coinFlip === 1) {
        coinFlip = "Tails";
    }
    window.document.write(coinFlip + "<br>");
}   while ((i >= 0) && (coinFlip === "Heads"));

window.document.write("Your Heads streak ended...");
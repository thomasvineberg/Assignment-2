var countsDown = parseInt(window.prompt("Enter a number to begin countdown: "));

if (isNaN(countsDown)) {
    window.alert("Please enter a number.");
} 

else {
    
    while (countsDown > 0) {
            countsDown -= 1;
            window.document.write(countsDown + "<br>");
        }
    }


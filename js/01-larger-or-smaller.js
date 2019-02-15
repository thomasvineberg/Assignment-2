var a = parseInt(window.prompt("Enter a number: "));
var b = parseInt(window.prompt("Enter a second number: "));
    if ((isNaN(a)) || (isNaN(b))) {
        window.alert("Please enter two valid numbers.")
    }
else if (a > b) {
    window.document.write(a);
}
else if (b > a) {
    window.document.write(b);
}
else if (b === a) {
    window.document.write("The numbers are equal!");
}

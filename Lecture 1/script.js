function add(num1, num2, showResult, someText) {
    if (showResult) {
        console.log("".concat(someText, " ").concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
var n1 = 20;
var n2 = 30;
var someText = "The sum of two numbers is = ";
var showResult = true;
add(n1, n2, showResult, someText);

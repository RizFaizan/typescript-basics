function add(num1: number, num2: number, showResult: boolean, someText: string) {
    if (showResult) {
        console.log(`${someText} ${num1 + num2}`)
    } else {
        return num1 + num2;
    }
}

const n1 = 20;
const n2 = 30;
const someText = "The sum of two numbers is = "
const showResult = true;

add(n1, n2, showResult, someText);

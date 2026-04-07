const { sub, div, expo, mul, sum } = require("./index.js");

const num1 = +process.argv[2];

console.log("Process.argv:", process.argv);

const num2 = +process.argv[3];

const opts = process.argv[4];

switch (opts) {
  case "+":
    console.log(sum(num1, num2));
    break;

  case "-":
    console.log(sub(num1, num2));
    break;

  case "/":
    console.log(div(num1, num2));
    break;

  case "**":
    console.log(expo(num1, num2));
    break;

  case "*":
    console.log(mul(num1, num2));
    break;

  default:
    "please enter all the fields";
    break;
}

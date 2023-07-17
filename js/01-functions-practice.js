//STEP 1
function halfNumber(num) {
  halfNum = num / 2;
  console.log(`Half of ${num} is ${halfNum}`);
}
halfNumber(5);

//STEP 2
function squareNumber(num) {
  sqNum = num ** 2;
  console.log(`The result of squaring ${num} is ${sqNum}`);
}
squareNumber(4);

//STEP 3
function percentOf(numOne, numTwo) {
  percentage = (numOne / numTwo) * 100;
  console.log(`${numOne} is ${percentage}% of ${numTwo}`);
}
percentOf(5, 15);

//STEP 4
function findModulus(numberOne, numberTwo) {
  modulus = numberOne % numberTwo;
  console.log(`${modulus} is the modulus of ${numberOne} and ${numberTwo}`);
}
findModulus(10, 4);

//STEP 5
let numbers = [];
numbers.push(parseInt(prompt(`Enter the first number:`)));
numbers.push(parseInt(prompt(`Enter the second number:`)));
numbers.push(parseInt(prompt(`Enter the third number:`)));
numbers.push(parseInt(prompt(`Enter the fourth number:`)));
numbers.push(parseInt(prompt(`Enter the fifth number:`)));

function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(sumNumbers(numbers));

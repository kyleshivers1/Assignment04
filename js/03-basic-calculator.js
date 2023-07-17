// IMPORT THE MODULE
import { addNums, subNums, multNums, divNums } from "./modules/calculator.js";

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let userNumberOne = parseInt(prompt(`Enter the first number:`));
let userNumberTwo = parseInt(prompt(`Enter the second number:`));
let userOperation = prompt(`Add, Subtract, Multiply or Divide?`);

// CHECK TO SEE WHAT OPERATION THEY'RE USING
switch (userOperation) {
  case "Add":
    alert(addNums(userNumberOne, userNumberTwo));
    break;
  case "Subtract":
    alert(subNums(userNumberOne, userNumberTwo));
    break;
  case "Multiply":
    alert(multNums(userNumberOne, userNumberTwo));
    break;
  case "Divide":
    alert(divNums(userNumberOne, userNumberTwo));
    break;
  default:
    alert(`Please reload and enter Add, Subtract, Multiply or Divide`);
}

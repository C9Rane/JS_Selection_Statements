console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let favoriteNumber;

favoriteNumber = 9;
let guessedNum = window.prompt("Input a number");
console.log("answer");

if (guessedNum < favoriteNumber) {
  console.log("too low");
} else if ("guessedNum" > "favNumber") {
  console.log("too high");
} else {
  console.log("Congratulations!!!");
}

let birthMonth;

birthMonth = window.prompt();

switch ("birthMonth") {
  case "june":
  case "july":
  case "august":
      console.log("too hot");
      break;
  case "december":
  case "january":
  case "februrary":
      console.log("too cold");
      break;
  default:
      console.log("perfect");
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch ("typeID") {
  case "01": 
    console.log("Tank Top");  
  case "02":
    console.log("T-Shirt");
  case "03":
    console.log("Long Sleeve");  
  case "04":
    console.log("Sweat Shirt");  
    break;
  default:
    console.log("other"); 
}

switch ("colorID") {
  case "BK": 
    console.log("black");  
  case "BL":
    console.log("blue");
  case "RD":
    console.log("red");  
  case "PU":
    console.log("purple");  
    break;
  default:
    console.log("white"); 
}


switch ("sizeID") {
  case "S": 
    console.log("small");  
  case "M":
    console.log("medium");
  case "L":
    console.log("large");  
  case "XL":
    console.log("extra large");  
    break;
  default:
    console.log("one size fits all"); 
}

console.log(`Product: ${"Large"} ${"Purple"}
${"Tank Top"}`);
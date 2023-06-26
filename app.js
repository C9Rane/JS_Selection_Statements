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

switch (typeId) {
  case "01": 
    type = "Tank top";  
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";  
    break;
  case "04":
    type = "Sweat Shirt";  
    break;
  default:
    type ="other"; 
}

switch (colorId) {
  case "BK": 
    color = "black"; 
    break;
  case "BL":
    color = "blue";
    break;
  case "RD":
    color = "red";  
    break;
  case "PU":
    color = "purple";  
    break;
  default:
    color = "white"; 
}


switch (sizeId) {
  case "S": 
    size = "small";  
    break;
  case "M":
    size = "medium";
    break;
  case "L":
    size = "large";  
    break;
  case "XL":
    size = "extra large";  
    break;
  default:
    size = "one size fits all"; 
}

console.log(`Product: ${size} ${color}
${type}`);
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "~", "?", "<", ">", "/"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let mainArray = []
let password = " "


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 

function generatePassword() {

  let passwordLength = prompt("How many charactors (between 8 and 16)");
    if (!passwordLength || passwordLength <= 7 || passwordLength >=17) {
      return alert("Please try again, invalid input. Entry must be between 8 and 16");
  }

  let addLowerCase = confirm("Do you want to add lowercase letters to your password?");
    if (addLowerCase === true) {
      mainArray +=(lowerCase);
  }

  let addUpperCase = confirm("Do you want to add uppercase letters to your password?");
    if (addUpperCase === true) {
      mainArray +=(upperCase);
  }

  let addNumbers = confirm("Do you want to add numbers to your password?");
    if (addNumbers === true) {
      mainArray +=(numbers);
  }

  let addSpecialCharactors = confirm("Do you want to add special characters to your password?");
    if (addSpecialCharactors === true) {
      mainArray +=(specialCharacters);
  }

  let password = " ";
    for (let i = 0; i < passwordLength; i++) {
    password +=mainArray[Math.floor(Math.random() * (mainArray.length))];
    console.log(Math.floor(Math.random() * (mainArray.length)));
    console.log(password);
  }
  
return password;

}





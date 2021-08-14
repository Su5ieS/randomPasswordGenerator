// this  assigned the name generateBtn to the HTML object identified with the id=generate
let generateBtn = document.querySelector("#generate");
let clearBtn = document.querySelector("#clear");

// write the password with this function and display in browser
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// arrays to use to create passwords
let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "~", "?", "<", ">", "/"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let output = []
let password = " "

// when generate button is clicked,  the writePassword function is called
generateBtn.addEventListener("click", writePassword) 
clearBtn.addEventListener("click", refreshPage)

//this large function contains the alert messages and recieves input for what to include in the password.

function generatePassword() {

  // determines password length within parameters
  let passwordLength = prompt("How many charactors? (please choose a number between 8 and 128)");
    if (passwordLength <= 7 || passwordLength >=129) {
      return alert("Please try again, invalid input. Entry must be a number between 8 and 128");
  }
  //determines if lowercase letters are to be included, if true adds to output
  let addLowerCase = confirm("Do you want to add lowercase letters to your password?");
    if (addLowerCase === true) {
      output = output.concat(lowerCase);
  }
  //determines if uppercase letters are to be used, if true adds to output
  let addUpperCase = confirm("Do you want to add UPPERCASE letters to your password?");
    if (addUpperCase === true) {
      output = output.concat(upperCase);
  }

  
  //determines if numbers are to be used, if true adds to output
  let addNumbers = confirm("Do you want to add numbers to your password?");
    if (addNumbers === true) {
      output = output.concat(numbers);
  }

  //determines if special characters are to be used, if true adds to output
  let addSpecialCharactors = confirm("Do you want to add special characters to your password?");
    if (addSpecialCharactors === true) {
      output = output.concat(specialCharacters);
  }

  // compiles random password
  let password = " ";
    for (let i = 0; i < passwordLength; i++) {
      password = password +=output[Math.floor(Math.random(generatePassword) * (output.length))];
  }
 
  // returns value to screen 
  return password;
}

  // 
function refreshPage() {

   window.location.reload();
} 




// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
//// generate password
function generatePassword() {
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  const totalLength = prompt("How many characters would you like to use? (Between 8 and 128)");
  if(totalLength >= 8 || totalLength <= 128) {
    // tell user their password length
    alert("Your new password will be ${totalLength} characters long.");
  }

  // // WHEN prompted for character types to include in the password
  // // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // var options = {
  //   hasNumber : window.confirm('Would you like to include numbers?'),
  //   hasLowerCase : window.confirm('Would you like to include uppercase letters?'),
  //   hasUpperCase : window.confirm('Would you like to include lowercase letters?'),
  //   hasSymbol : window.confirm('Would you like to include symbols?')
  // };

  // if(options.hasNumber === false && options.hasLowerCase === false && options.hasUpperCase === false && options.hasSymbol === false)
  // // else {
  // //   // tell user their password is not an acceptable length
  // //   alert("Your password is not an acceptable length.");
  // // }

  let upper = confirm("Woudl you like to include upper case letters?");
  let lower = confirm("Woudl you like to include lower case letters?");
  let symbol = confirm("Woudl you like to include special characters?");
  let number = confirm("Woudl you like to include numbers?");

  let allChars = "";

  if(upper) {
    allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(lower) {
    allChars += "abcdefghijklmnopqrstuvwxyz"
  }
  if(symbol) {
    allChars += "@%+\\/\"'!#$^?:,)(}{][~-_."
  }
  if(number) {
    allChars += "0123456789"
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
generateBtn.addEventListener("click", writePassword);
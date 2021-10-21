// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security

// Assignment Code
var generateBtn = document.querySelector("#generate");

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
console.log(specialCharacters);

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
console.log(numericCharacters);

// Array of lowercase characters to be included in password
var lowerCaseCharacters = [
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
console.log(lowerCaseCharacters);

// Array of uppercase characters to be included in password
var upperCaseCharacters = [
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
console.log(upperCaseCharacters);


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
//// generate password
function generatePassword() {
  
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = function() {
    var totalLength = window.prompt("How many characters would you like to use? (Between 8 and 128)");
    if(totalLength >= parseInt(8) && totalLength <= parseInt(128)) {
      // tell user their password length
      console.log(totalLength);
      window.alert(`Your new password will be ${totalLength} characters long.`);
    
    } else {
      window.alert("That is not a valid password length");
      return passwordLength();
    }
  }
  passwordLength()

  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  alert("What type of characters would you like to include in your password?");
  
  var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);

    return value;
  };
  randomNumber
  console.log(randomNumber);
  
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  let symbol = confirm("Would you like to include special characters?");
  console.log("ask for special characters", symbol);
  let number = confirm("Would you like to include numbers?");
  console.log("ask for number characters", number);
  let lower = confirm("Would you like to include lower case letters?");
  console.log("ask for lowercase characters", lower);
  let upper = confirm("Would you like to include upper case letters?");
  console.log("ask for uppercase characters", upper);
  
  // creates a function that seraches user criteria and include variables based on their choices
  // ie. if upper === True --> iterate through upperCaseCharaters and select at Math.random
  var passwordVariables = function() {
    
    // if symbol is true, iterate through 'specialCharacters' array and select at random
    if(symbol === true) {
      // include specialCharacters
      Math.random([specialCharacters]);
    }
    else {
      // don't include specialCharacters
    }
    
    // if number is true, iterate through 'numericCharacters' array and select at random
    if(number) {
      // include numbers
      Math.random([numericCharacters]);
    } else {
      // don't include numbers
    }
    
    // if lower is true, iterate through 'lowerCaseCharacters' array and select at random
    if(lower) {
      // include lowerCaseCharacters
      Math.random([upperCaseCharacters]);
    } else {
      // don't include lowerCaseCharacters
    }
    
    // if upper is true, iterate through 'upperCaseCharacters' array and select at random
    if(upper) {
      // include upperCaseCharacters
      Math.random([upperCaseCharacters]);
    } else {
      // don't include upperCaseCharacters
    }
    
    if(!symbol && !number && !lower && !upper) {
      console.log("all false, repeat function");
      alert("You didn't select any characters for your password!")
      alert("Try again.")
      alert("And this time please accept some characters for your password!")
      passwordVariables();
    }
    console.log("call passwordVariables() fucntion")
    passwordVariables()
  }

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page


  
  // if(options.hasNumber === false && options.hasLowerCase === false && options.hasUpperCase === false && options.hasSymbol === false)
  // // else {
  // //   // tell user their password is not an acceptable length
  // //   alert("Your password is not an acceptable length.");
  // // }






  // let allChars = "";

  // if(upper) {
  //   allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // }
  // if(lower) {
  //   allChars += "abcdefghijklmnopqrstuvwxyz"
  // }
  // if(symbol) {
  //   allChars += "@%+\\/\"'!#$^?:,)(}{][~-_."
  // }
  // console.log(string.symbol);
  // if(number) {
  //   allChars += "0123456789"
  // }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

//// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// define character types

// determine password length 8-128
////if password length is acceptable proceed to types of characters
//// if length not acceptable repeat question

// ask for types of characters
/// lowercase letters?
/// uppercase letters?
/// numbers?
/// special characters?

// generate password:
// based on passwordLength
/// yes lowercase letters?
  /// include lowercase
/// yes uppercase letters?
  /// include uppercasre
/// yes numbers?
  ///include numbers
/// yes special characters?
  ///include special characters

// include button to begin function
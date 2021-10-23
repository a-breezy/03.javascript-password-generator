// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password (23 char)
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

// Array of numeric characters to be included in password (10 char)
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password (26 char)
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

// Array of uppercase characters to be included in password (26 char)
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


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
var passwordLength = function() {
  var totalLength = window.prompt("How many characters would you like to use? (Between 8 and 128)");
  if(totalLength >= parseInt(8) && totalLength <= parseInt(128)) {
    // tell user their password length
    window.alert(`Your new password will be ${totalLength} characters long.`);
    return totalLength;
  } else {
    window.alert("That is not a valid password length");
    return passwordLength();
  }
}

// determine types of variables to include in the function:
// creates a blank list to include characters
var passwordCharacters = function() {
  var includedCharacters = [];

  var defineCharacters = function() {
    alert("What type of characters would you like to include in your password?");

    // choose lowercase, uppercase, numeric, and/or special characters
    let symbol = confirm("Would you like to include special characters?");
    let number = confirm("Would you like to include numbers?");
    let lower = confirm("Would you like to include lower case letters?");
    let upper = confirm("Would you like to include upper case letters?");
  

    // if symbol is true, add to includedCharacters array
    if(symbol === true) {
      // include specialCharacters    
      includedCharacters.push(specialCharacters);
    } else {
      // don't include specialCharacters
    }
    
    // if number is true, add to includedCharacters array
    if(number === true) {
      // include numbers
      includedCharacters.push(numericCharacters);
    } else {
      // don't include numbers
    }
    
    // if lower is true, add to includedCharacters array
    if(lower === true) {
      // include lowerCaseCharacters
      includedCharacters.push(lowerCaseCharacters);
    } else {
      // don't include lowerCaseCharacters
    }
  
    // if upper is true, add to includedCharacters array
    if(upper) {
      // include upperCaseCharacters
      includedCharacters.push(upperCaseCharacters);
    } else {
      // don't include upperCaseCharacters
    }

    if(!symbol && !number && !lower && !upper) {
      alert("You didn't select any characters for your password!");
      alert("Try again.");
      alert("And this time please accept some characters for your password!");
      defineCharacters();
    }
  }
  defineCharacters()
  includedCharacters = includedCharacters.flat();
  return includedCharacters;
}

// create function to randomize password based on character length chosen by user
var randomPassword = function() {
  var length = passwordLength();
  var char = passwordCharacters();
  var newPassword = "";
  // iterate through array includedCharacters until character length set by user is met
  for (var i = 0; i < length; i++) {
    // randomize selected characters
    newPassword += char[(Math.floor(Math.random() * char.length))];}
    // output password
    return newPassword;
}

// generate password
var generatePassword = function() {
  var random = randomPassword();
  console.log(random);

  return random;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
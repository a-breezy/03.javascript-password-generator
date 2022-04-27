// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password (23 char)
var specialCharacters = [
	"@",
	"%",
	"+",
	"\\",
	"/",
	"'",
	"!",
	"#",
	"$",
	"^",
	"?",
	":",
	",",
	")",
	"(",
	"}",
	"{",
	"]",
	"[",
	"~",
	"-",
	"_",
	".",
];

// Array of numeric characters to be included in password (10 char)
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password (26 char)
var lowerCaseCharacters = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

// Array of uppercase characters to be included in password (26 char)
var upperCaseCharacters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

// determin password length
var passwordLength = function () {
	var totalLength = window.prompt(
		"How many characters would you like to use? (Between 8 and 128)"
	);

	// confirm pass word is between 8 -128 char
	if (totalLength >= parseInt(8) && totalLength <= parseInt(128)) {
		window.alert(`Your new password will be ${totalLength} characters long.`);
		return totalLength;
	} else {
		window.alert(
			`You entered ${totalLength} characters. That's not a valid password length, please re-enter`
		);
		return passwordLength();
	}
};

// determine character types
var setChar = function () {
	// include lowercase characters by default
	var includedCharacters = [lowerCaseCharacters];

	var defineCharacters = function () {
		alert(
			"What type of characters would you like to include in your password?"
		);

		// choose lowercase, uppercase, numeric, and/or special characters
		let symbol = confirm("Would you like to include special characters?");
		let number = confirm("Would you like to include numbers?");
		let upper = confirm("Would you like to include upper case letters?");

		if (symbol === true) {
			includedCharacters.push(specialCharacters);
		}

		if (number === true) {
			includedCharacters.push(numericCharacters);
		}

		if (upper) {
			includedCharacters.push(upperCaseCharacters);
		}

		if (!symbol && !number && !upper) {
			confirm("Would you like your password to only have lowercase letters?");
			if (true) {
				return;
			} else {
				defineCharacters();
			}
		}
	};

	defineCharacters();

	includedCharacters = includedCharacters.flat();
	return includedCharacters;
};

function randomPassword() {
	let length = passwordLength();
	let char = setChar();
	let newPassword = "";
	// iterate through array includedCharacters until character length set by user is met
	for (let i = 0; i < length; i++) {
		// randomize selected characters
		newPassword += char[Math.floor(Math.random() * char.length)];
	}
	// output password
	return newPassword;
}

// generate password
var generatePassword = function () {
	var random = randomPassword();

	return random;
};

// Write password to the #password input
function postPassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

generateBtn.addEventListener("click", postPassword);

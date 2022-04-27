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

	// confirm password is between 8 -128 char
	if (totalLength >= parseInt(8) && totalLength <= parseInt(128)) {
		window.alert(`Your new password will be ${totalLength} characters long.`);
	} else {
		window.alert(
			`You entered ${totalLength} characters. That's not a valid password length, please re-enter`
		);
		return passwordLength();
	}
	return totalLength;
};

// determine character types
var setChar = function () {
	// include lowercase characters by default
	var includeChar = [lowerCaseCharacters];

	var defineChar = function () {
		alert(
			"What type of characters would you like to include in your password?"
		);

		// choose uppercase, numeric, and/or special characters
		let symbol = confirm("Would you like to include special characters?");
		let number = confirm("Would you like to include numbers?");
		let upper = confirm("Would you like to include uppercase letters?");

		if (symbol) {
			includeChar.push(specialCharacters);
		}
		if (number) {
			includeChar.push(numericCharacters);
		}
		if (upper) {
			includeChar.push(upperCaseCharacters);
		}

		if (!symbol && !number && !upper) {
			confirm("Would you like your password to only have lowercase letters?");
			if (true) {
				return;
			} else {
				defineChar();
			}
		}
	};

	defineChar();
	// set includeChar to all chosen characters, then flatten into one array
	includeChar = includeChar.flat();
	return includeChar;
};

function randomPassword() {
	let length = passwordLength();
	let char = setChar();
	let newPassword = "";
	// iterate through length and randomly select characters
	for (let i = 0; i < length; i++) {
		// randomize selected characters
		newPassword += char[Math.floor(Math.random() * char.length)];
	}
	return newPassword;
}

// generate password
var generatePassword = function () {
	var random = randomPassword();
	return random;
};

// post password to index.html
function postPassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

generateBtn.addEventListener("click", postPassword);

// Assignment Code
// Set Global Variables

var generateBtn = document.querySelector("#generate");

var characterTypes = {
  upperCase: ["A,", "B", "C", "D", "E", "F"],
  lowerCase: ["a", "b", "c", "d", "e", "f"],
  numeric: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  specialCharacters: ["@", "%", "$", "&", "!"]//insert array of special characters here.

};

var passwordInfo = {
  passwordLength: 0,
  includesUpperCase: false,
  includesLowerCase: false,
  includesNumberic: false,
  includesSpecialCharacters: false,
  passwordCharacters: []

};

function generatePassword(){
  // code to generate password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

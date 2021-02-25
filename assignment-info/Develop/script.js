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

//define a function to get and validate length
function getLength () {
  var passwordLength = prompt("How Many Characters Should the Password Contain? (Must Be a Number between 8 and 120");
  if (passwordLength < 8 || passwordLength > 120) {
    alert("Please Choose a Number between 8 and 120");
    getLength();
  } else {
    passwordInfo.passwordLength = passwordLength;
  }
}

//define a function to decide which charactersets to use
function getCharacterTypes () {
  var hasUpper = confirm("Would You like the password to contain uppercase letters?");
  passwordInfo.includesUpperCase = hasUpper;
}


//define a function that occurs to collect parameters
function userPrompt() {
 
  


} 




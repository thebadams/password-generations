// Assignment Code
// Set Global Variables

var generateBtn = document.querySelector("#generate");

var characterTypes = {
  upperCase: ["A", "B", "C", "D", "E", "F"],
  lowerCase: ["a", "b", "c", "d", "e", "f"],
  numeric: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  special: ["@", "%", "$", "&", "!"]//insert array of special characters here.

};

var passwordInfo = {
  passwordLength: 0,
  includesUpperCase: false,
  includesLowerCase: false,
  includesNumeric: false,
  includesSpecial: false,
  possibleCharacters: [],
  passwordCharacters: [],
  passwordValue: ""

};

function generatePassword(){
  // code to generate password
  userPrompt();
  addPossibleChars();
  constructPassword();
  return passwordInfo.passwordValue
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//define a function to get and validate length
function getLength () {
  var passwordLength = prompt("How Many Characters Should the Password Contain? (Must Be a Number between 8 and 128"); //prompts the user for lenght
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please Choose a Number between 8 and 128"); //if the user inputs a number less than 8, or greater than 128, notify them that they must choose a number between 8 and 120
    getLength(); // run the getLength function again
  } else { //if conditions are met
    passwordInfo.passwordLength = passwordLength; //set input to passwordInfo.passwordLength
  }
}

//define a function to decide which charactersets to use
function getCharacterTypes () {
  var hasUpper = confirm("Would You like the password to contain uppercase letters?"); //confirm whether the password should have uppercase letters
  passwordInfo.includesUpperCase = hasUpper; //set boolean value based on input
  var hasLower = confirm("Would you like the password to contain lowercase letters?"); //confirm whether the password should lave lowercase letters
  passwordInfo.includesLowerCase = hasLower; //set boolean value based on input
  var hasNumbers = confirm("Would you like the password to contain numbers?"); //confirm whether hte password should ahve numbers
  passwordInfo.includesNumeric = hasNumbers; //set boolean value baed upon input
  var hasSpecial = confirm("Would you like the password to contain special characters?"); // confirm whether hte password should have special characters
  passwordInfo.includesSpecial = hasSpecial; // set boolean value based upon input


}


//define a function that occurs to collect parameters
function userPrompt() {
  getLength();
  getCharacterTypes();
};

//define a function to place the necessary character arrays in the possibleCharacters array
function addPossibleChars() {
  if(passwordInfo.includesUpperCase) {
    passwordInfo.possibleCharacters.push(characterTypes.upperCase);
  };
  if (passwordInfo.includesLowerCase) {
    passwordInfo.possibleCharacters.push(characterTypes.lowerCase);
  };
  if (passwordInfo.includesNumeric) {
    passwordInfo.possibleCharacters.push(characterTypes.numeric);
  }
  if (passwordInfo.includesSpecial) {
    passwordInfo.possibleCharacters.push(characterTypes.special);
  }
}


//define a function to choose the random characters
function getRandomChar(){
var charType = Math.floor(Math.random()*passwordInfo.possibleCharacters.length); //generates a number based on the length of the array passwordInfo.possibleCharacters
var characterNum = Math.floor(Math.random()*passwordInfo.possibleCharacters[charType].length); //generates a random number to determine which character to use in the password
var character = passwordInfo.possibleCharacters[charType][characterNum];
return character;

}

//write a function to construct the password
function constructPassword() {
  for(var i = 1; i <= passwordInfo.passwordLength; i++){
   var character = getRandomChar();
    passwordInfo.passwordCharacters.push(character);
  }
  passwordInfo.passwordValue = passwordInfo.passwordCharacters.join("");
}

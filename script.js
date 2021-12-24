// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
//Generate Password according to choosen inputs
function genPassword() {
  var passwordLength;
  var chars = "";

  //prompts password criteria until atleast 1 character type is selected
  do {
    //Prompt for chosing the length of the password until correct length is entered
    do {
      passwordLength = prompt(
        "What should be the length of your password? Enter a number between 8-128"
      );
    } while (passwordLength < 8 || passwordLength > 128);

    //declared variables for storing different character types
    var charSpecial = "!@#$%^&*()";
    var charNumber = "0123456789";
    var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charSmall = "abcdefghijklmnopqrstuvwxyz";

    //Prompts for character types

    //confirming numbers to be included?
    var number = confirm("Do you want to include numbers in your password?");
    if (number === true) {
      chars = chars + charNumber;
      console.log(chars);
    } else {
      console.log("Numbers not selected.");
    }

    //confirming special characters to be included?
    var specialCharacter = confirm(
      "Do you want to include special characters in your password?"
    );
    if (specialCharacter === true) {
      chars = chars + charSpecial;
      console.log(chars);
    } else {
      console.log("Special Characters not selected.");
    }

    //confirming uppercase letters to be included?
    var uppercase = confirm(
      "Do you want to include uppercase letters in your password?"
    );
    if (uppercase === true) {
      chars = chars + charUpper;
      console.log(chars);
    } else {
      console.log("Uppercase letters not selected.");
    }

    //confirming lowercase letters to be included?
    var lowercase = confirm(
      "Do you want to include lowercase letters in your password?"
    );
    if (lowercase === true) {
      chars = chars + charSmall;
      console.log(chars);
    } else {
      console.log("Lowercase letters not selected.");
    }
    //creating alert if none of the character type is selected
    if (chars === "") {
      alert("Invalid! Please select valid character types.");
    }
  } while (chars === "");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

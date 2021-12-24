// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");

// Write password to the #password textarea
function writePassword() {
  var password = genPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//generateBtn.addEventListener("click", writePassword);

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

  //Store generated password from chosen random characters
  var password = "";

  //run for loop as many times as user selected for password length
  for (var i = 0; i < passwordLength; i++) {
    //Generated a random index between 0 and length of string containing all the selected characters-1
    var randomNumber = Math.floor(Math.random() * chars.length);
    //Add the character at the generated index to password string
    password = password + chars.substring(randomNumber, randomNumber + 1);
  }

  return password;
}

//Call writePassword function when the Generate Password button is clicked
generateBtn.addEventListener("click", writePassword);

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
  
  } while (chars === "");

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
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

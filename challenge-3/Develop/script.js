// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






let generatePassword = () => {
  // Asks how many characters to generate
  const numOfChars = window.prompt('How many characters would you like your password to be? Choose between 8 and 128 characters');

  // Creates content choices for password function
  const numberChoices = [0,1,2,3,4,5,6,7,8,9];
  const lowerCaseChoices = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"];
  const upperCaseChoices = lowerCaseChoices.map(letter => letter.toUpperCase());
  const specialCharChoices = ['\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E']
  
  // Initializes function variables
  let userChoices = []
  let userPassword = []
  let lengthAdjust = 0
  
  // Checks for an acceptable number of characters
  if (numOfChars < 8 || numOfChars > 128) {
    return "Please choose a password length between 8 and 128 characters";
  }

  // Asks what type of characters to use
  else {
  const lowerCase = window.confirm('Want to include lowercase characters? Click OK for yes, or cancel for no');
  const upperCase = window.confirm('Want to include uppercase characters? Click OK for yes, or cancel for no');
  const numbers = window.confirm('Want to include numbers? Click OK for yes, or cancel for no');
  const specialChars = window.confirm('Want to include special characters? Click OK for yes, or cancel for no');

// Adds lowercase characters to full choices and one to the current password array
  if (lowerCase) {
    userPassword.push(lowerCaseChoices[Math.floor(Math.random()*lowerCaseChoices.length)]);
    userChoices = userChoices.concat(lowerCaseChoices);
    lengthAdjust++;
  }

// Adds uppercase characters to full choices and one to the current password array
  if (upperCase) {
    userPassword.push(upperCaseChoices[Math.floor(Math.random()*upperCaseChoices.length)]);
    userChoices = userChoices.concat(upperCaseChoices);
    lengthAdjust++;
  }

// Adds number characters to full choices and one to the current password array
  if (numbers) {
    userPassword.push(numberChoices[Math.floor(Math.random()*numberChoices.length)]);
    userChoices = userChoices.concat(numberChoices);
    lengthAdjust++;
  }

// Adds special characters to full choices and one to the current password array
  if (specialChars) {
    userPassword.push(specialCharChoices[Math.floor(Math.random()*specialCharChoices.length)]);
    userChoices = userChoices.concat(specialCharChoices);
    lengthAdjust++;
  }

  let randomNumber = Math.floor(Math.random() * userChoices.length)

// Chooses random characters from full choices for remaining necessary characters not already generated by adding one in each previous if statement.
  for (let i = 0; i < (numOfChars-lengthAdjust); i++) {
    userPassword.push(userChoices[Math.floor(Math.random() * userChoices.length)])
  } 
  
// Shuffles the password array
  for (let i= userPassword.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = userPassword[i];
    userPassword[i] = userPassword[j];
    userPassword[j] = temp;
  }

// Turns the password array into a string
  return userPassword.join("");
}}




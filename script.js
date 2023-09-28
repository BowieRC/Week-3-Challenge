// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var needsUppercase = true;
var needsLowercase = true;
var needsSpecial = true;
var needsNumbers = true;

var requiredLength = 8;

var criteriaNumber = 0;
var characterString = "";

var nextCharacter;


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//find how many criteria
function getCriteria(){
  criteriaNumber = 0;
  
  if(needsUppercase){
    criteriaNumber++;
  }
  if(needsLowercase){
    criteriaNumber++;
  }
  if(needsSpecial){
    criteriaNumber++;
  }
  if(needsNumbers){
    criteriaNumber++;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  passwordRequirements();
  getCharacterCount();
  console.log(characterCount);
  console.log(passNeeds)
});

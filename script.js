// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var password = "";

const lowercaseString = "abcdefghijklmnopqrstuvwxyz";
const uppercaseString = lowercaseString.toUpperCase();
const specialString = "!@#$%^&*,./<>?";
const numberString = "0123456789";

var needsUppercase = false;
var needsLowercase = false;
var needsSpecial = false;
var needsNumbers = false;

var requiredLength = 8;

var criteriaNumber = 0;
var characterString = "";

var nextCharacter;


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//get password criteria
function setCriteria(){
  setUppercase();
  setLowercase();
  setSpecials();
  setNumbers();
  setLength();
  if(!needsLowercase && !needsUppercase && !needsSpecial && !needsNumbers){
    alert("Must have at least one character type");
    setCriteria();
  }
}

function setUppercase(){
    selection = prompt("Does your password require uppercase characters? \n 'yes' or 'no'").toLowerCase();
  if(selection === "yes" || selection === "y"){
    needsUppercase = true;
  }
  else if(selection === 'no' || selection === 'n'){
    needsUppercase = false;

  } else {
    alert("Please enter 'yes' or 'no'");
    setUppercase();
    }
}

function setLowercase(){
  selection = prompt("Does your password require lower characters? \n 'yes' or 'no'").toLowerCase();
  if(selection === "yes" || selection === "y"){
    needsLowercase = true;
  }
  else if(selection === 'no' || selection === 'n'){
    needsLowercase = false;

  } else {
    alert("Please enter 'yes' or 'no'");
    setLowercase();
    }
}

function setSpecials(){
  selection = prompt("Does your password require special characters? \n 'yes' or 'no'").toLowerCase();
  if(selection === "yes" || selection === "y"){
    needsSpecial = true;
  }
  else if(selection === 'no' || selection === 'n'){
    needsSpecial = false;

  } else {
    alert("Please enter 'yes' or 'no'");
    setSpecials();
    }
}

function setNumbers(){
  selection = prompt("Does your password require numbers? \n 'yes' or 'no'").toLowerCase();
  if(selection === "yes" || selection === "y"){
    needsNumbers = true;
  }
  else if(selection === 'no' || selection === 'n'){
    needsNumbers = false;

  } else {
    alert("Please enter 'yes' or 'no'");
    setNumbers();
    }
}

function setLength(){
  selection = prompt("How many characters should your password be? \n Enter number between 8 and 128");
    if(selection >= 8 && selection <= 1280){
      requiredLength = selection;
    } else {
      alert("Invalid selection \n please enter a number between 8 and 128");
      setLength();
    }
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

function findNextCharacter(){
  for(i=0; i<requiredLength; i++){
    switch(criteriaNumber){
      case(1):
        oneCriteria();
        setCharacter();
        break;
      case(2):
        twoCriteria();
        setCharacter();
        break;
      case(3):
        threeCriteria();
        setCharacter(); 
        break;
      case(4):
        fourCriteria();
        setCharacter();
        break;
    }
    
  }
  
}

// Find what the next character will be

function oneCriteria(){
  if(needsLowercase){
        characterString = lowercaseString;
      }
      if(needsUppercase){
         characterString = uppercaseString;
      }
      if(needsSpecial){
        characterString = specialString;
      }
      if(needsNumbers){
        characterString = numberString;
      }
}

function twoCriteria(){
  chance = Math.floor(Math.random() * 10);
  if(needsUppercase && needsLowercase){
    if(chance >5){
      characterString = uppercaseString;
      }
    else{
      characterString = lowercaseString;
    }
  }
  else if(needsUppercase && needsSpecial){
    if(chance >5){
      characterString = uppercaseString;
      }
    else{
      characterString = lowercaseString;
        }
      }
  else if(needsUppercase && needsNumbers){
    if(chance >5){
      characterString = uppercaseString;
      }
    else{
      characterString = numberString;
    }
  }
  else if(needsLowercase && needsSpecial){
    if(chance >5){
      characterString = lowercaseString;
      }
    else{
      characterString = specialString;
    }
  }
  else if(needsLowercase && needsNumbers){
    if(chance >5){
      characterString = lowercaseString;
      }
    else{
      characterString = numberString;
    }
  }
  else if(needsSpecial && needsNumbers){
    if(chance >5){
      characterString = specialString;
      }
    else{
      characterString = numberString;
    }
  }
}

function threeCriteria(){
  chance = Math.floor(Math.random() * 9);
  if(!needsUppercase)
    if(chance <3){
        characterString = lowercaseString;
        }
      else if(chance >=3 && chance <6){
        characterString = numberString;
      }
      else{
        characterString = specialString;
      }
  if(!needsLowercase){
    if(chance <3){
      characterString = uppercaseString;
      }
    else if(chance >=3 && chance <6){
      characterString = numberString;
    }
    else{
      characterString = specialString;
    }
  }
  if(!needsSpecial){
    if(chance <3){
      characterString = lowercaseString;
      }
    else if(chance >=3 && chance <6){
      characterString = numberString;
    }
    else{
      characterString = uppercaseString;
    }
      }
if(!needsNumbers){
  if(chance <3){
      characterString = lowercaseString;
      }
    else if(chance >=3 && chance <6){
      characterString = uppercaseString;
    }
    else{
      characterString = specialString;
    }
  }
}

function fourCriteria(){
  chance = Math.floor(Math.random() * 12);
  if(chance <3){
    characterString = uppercaseString;
  } else if (chance <6 && chance >=3){
    characterString = lowercaseString;
  } else if (chance <9 && chance >=6){
    characterString = specialString;
  } else{
    characterString = numberString;
  }
}

//set next charatcer into string
function setCharacter(){
  nextCharacter = characterString.charAt(Math.floor(Math.random() * characterString.length));
    password = password.concat(nextCharacter);
  }

//checks if all criteria are met

function checkCriteria(){
  if(needsUppercase && (password.indexOf(uppercaseString) === false)){
    clear();
    generatePassword();
 }
  if(needsLowercase && (password.indexOf(lowercaseString) === false)){
    clear();
    findNextCharacter()
 }
  if(needsSpecial && (password.indexOf(specialString) === false)){
    clear();
    findNextCharacter()
 }
  if(needsNumbers && (password.indexOf(numberString) === false)){
    clear();
    findNextCharacter()
 }
 else{
  return;
 }
}

//clears pre-existing string for next use.
function clear(){
  password = "";
}

function generatePassword(){
  getCriteria();
  findNextCharacter();
  checkCriteria()
  return password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  setCriteria();
//  generatePassword(); 
 writePassword();
 clear();
});

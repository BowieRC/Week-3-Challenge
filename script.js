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
//     console.log(characterString)
  
  

//   console.log(nextCharacter);
  
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
      characterString = UppercaseString;
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

//checks if all criteria are met

function checkCriteria(){
  if(needsUppercase && !password.includes(uppercaseString)){
    clear();
    findNextCharacter();
 }
  if(needsLowercase && !password.includes(lowercaseString)){
    clear();
    findNextCharacter();
 }
  if(needsSpecial && !password.includes(specialString)){
    clear();
    findNextCharacter();
 }
  if(needsNumbers && !password.includes(numberString)){
    clear();
    findNextCharacter();
 }
}

//clears pre-existing string for next use.
function clear(){
  password = "";
}



// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  passwordRequirements();
  getCharacterCount();
  console.log(characterCount);
  console.log(passNeeds)
});

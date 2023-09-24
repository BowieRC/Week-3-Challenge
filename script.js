// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var passNeeds = {
  requiresSpecial: false,
  requiresUpper: false,
  requiresLower: false,
  requiredLength: 8
  };

function getSpecial(){
  var promtSpecial = prompt("Does your password require Special characters? \n Enter 'yes' or 'no'").toLowerCase();
  if (promtSpecial == 'yes'){
    passNeeds.requiresSpecial = true;
  } else if (promtSpecial == 'no'){
    passNeeds.requiresSpecial = false;
  } else {
    console.log("Invalid Argument, Enter 'yes' or 'no'.")
    getSpecial();
  }
}

function getUpper(){
  var promtUpper = prompt("Does your password require Uppercase characters? \n Enter 'yes' or 'no'").toLowerCase();
  if (promtUpper == 'yes'){
    passNeeds.requiresUpper = true;
  } else if (promtUpper == 'no'){
    passNeeds.requiresUpper = false;
  } else {
    console.log("Invalid Argument, Enter 'yes' or 'no'.")
    getUpper();
  }
}

function getLower(){
  var promtLower = prompt("Does your password require Lowercase characters? \n Enter 'yes' or 'no'").toLowerCase();
  if (promtLower == 'yes'){
    passNeeds.requiresLower = true;
  } else if (promtLower == 'no'){
    passNeeds.requiresLower = false;
  } else {
    console.log("Invalid Argument, Enter 'yes' or 'no'.")
    getLower();
  }
}

function getLength(){
  var promptLength = parseInt(prompt("What length do you want your password? \n Enter a number between 8 and 128"));
    if (isNaN(promptLength)){
      alert('Invalid input, please enter a number');
      getLength();
    } 
    else 
    {
      if(promptLength > 128){
        alert("Password too long, 128 character limit");
        getLength();
      } 
      else if (promptLength < 8)
      {
        alert("Password too short, 8 character minimum.")
        getLength();
      } 
      else 
      {
        passNeeds.requiredLength = promptLength; 
      }
    }
  }

function passwordRequirements(){
  getSpecial();
  getUpper();
  getLower();
  getLength();
  console.log(passNeeds)
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  passwordRequirements();
  console.log(passNeeds)
});

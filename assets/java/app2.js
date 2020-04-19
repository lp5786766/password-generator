//create Array for each of character

var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*"];
var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var finalArray = [];


var passwordLength;
//validate inputs:

//create if statements to make sure number (isNaN) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

passwordLength = prompt("How many characters?");
//password too short?     //password too long?
if (passwordLength < 8 || passwordLength > 128) {
    alert("Sorry, password should be between 8 and 128 characters. Try again");
    passwordLength;
    // if the user hits Cancel
} else if (passwordLength === null) {
    alert("Sorry, you have to choose the length. Try again");
    passwordLength;
}



customizeCharacters();

function customizeCharacters() {
    var hasLower = confirm("Do you want to use lowercase letters (abc...)? Yes - Ok, No - Cancel");
    var hasUpper = confirm("Do you want to use uppercase letters (ABC...)? Yes - Ok, No - Cancel");
    var hasSpecial = confirm("Do you want to use special characters (!@#$%^&*)? Yes - Ok, No - Cancel");
    var hasNumbers = confirm("Do you want to use numbers (123...)? Yes - Ok, No - Cancel");

    if (hasLower === false && hasUpper === false && hasSpecial === false && hasNumbers === false) {
        alert("Sorry, you have to choose at least one option. Try again");
        customizeCharacters();
    }
    if (hasLower === true) {
        var addLower = finalArray.concat(lowerArray);
        finalArray = addLower;
        console.log(finalArray);
    }
    if (hasUpper === true) {
        var addUpper = finalArray.concat(upperArray);
        finalArray = addUpper;
        console.log(finalArray);
    }
    if (hasSpecial === true) {
        var addSpecial = finalArray.concat(specialArray);
        finalArray = addSpecial;
        console.log(finalArray);
    }
    if (hasNumbers === true) {
        var addNumbers = finalArray.concat(numbersArray);
        finalArray = addNumbers;
        console.log(finalArray);
    }
}


console.log(passwordLength);

// newPassword = Math.floor(Math.random()* passwordLength)









var customizeNewButton = document.getElementById("customize-new");
customizeNewButton.addEventListener("click", function () {
    customizePassword();
});

//return;




//create a final Array of Arrays, where random items from selected arrays are stored





//display the new password - append to the div



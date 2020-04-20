//create Array for each of character
var lengthOutput = document.getElementById("length-choice");
var lowerOutput = document.getElementById("lower-choice");
var upperOutput = document.getElementById("upper-choice");
var specialOutput = document.getElementById("special-choice");
var numbersOutput = document.getElementById("numbers-choice");
var passwordElement = document.getElementById("new-password");


var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*"];
var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var finalArray = [];
var passwordArray = [];

customizePassword();

//validate inputs:
function customizePassword() {

    var passwordlength = prompt("How many characters?");
    //password too short?     //password too long?
    if (passwordlength < 8 || passwordlength > 128) {
        alert("Sorry, password should be between 8 and 128 characters. Try again");
        customizePassword();
        // if the user hits Cancel
    } else if (passwordlength === null) {
        alert("Sorry, you have to choose the length. Try again");
        customizePassword();
    } else if (isNaN(passwordlength)) {
        alert("Sorry, please enter a number");
        customizePassword();
    } else {
        lengthOutput.textContent = passwordlength;
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
            lowerOutput.textContent = "Lower case: Yes";
        } else {
            lowerOutput.textContent = "Lower case: No";
        }

        if (hasUpper === true) {
            var addUpper = finalArray.concat(upperArray);
            finalArray = addUpper;
            upperOutput.textContent = "Upper case: Yes";
        } else {
            upperOutput.textContent = "Upper case: No";
        }

        if (hasSpecial === true) {
            var addSpecial = finalArray.concat(specialArray);
            finalArray = addSpecial;
            specialOutput.textContent = "Special characters: Yes";
        } else {
            specialOutput.textContent = "Special characters: No";
        }

        if (hasNumbers === true) {
            var addNumbers = finalArray.concat(numbersArray);
            finalArray = addNumbers;
            numbersOutput.textContent = "Numbers: Yes";
        } else {
            numbersOutput.textContent = "Numbers: No";
        }
    }
}

var generateLength = parseInt(lengthOutput.textContent);
console.log(parseInt(lengthOutput.textContent));
console.log(finalArray);

var generateButton = document.getElementById("generate");
generateButton.addEventListener("click", function () {
    generate();
});



// newPassword
function generate() {
    var finalArray = [];
    for (i = 0; i < generateLength; i++) {
        var passwordChar = finalArray[Math.floor(Math.random() * finalArray.length)];
        var addChar = passwordArray.concat(passwordChar);
        passwordArray = addChar;

    }
    passwordElement.textContent = passwordArray.join("");
}









var customizeNewButton = document.getElementById("customize-new");
customizeNewButton.addEventListener("click", function () {
    customizePassword();
});



//display the new password - append to the div
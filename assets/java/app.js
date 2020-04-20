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
        var hasLower = confirm("Do you want to use lowercase letters (abc...)? Ok - Yes, Cancel - No");
        var hasUpper = confirm("Do you want to use uppercase letters (ABC...)? Ok - Yes, Cancel - No");
        var hasSpecial = confirm("Do you want to use special characters (!@#$%^&*)? Ok - Yes, Cancel - No");
        var hasNumbers = confirm("Do you want to use numbers (123...)? Ok - Yes, Cancel - No");

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

// Generate Button
var generateButton = document.getElementById("generate");
generateButton.addEventListener("click", function () {
    generate()
});

// new Password function
function generate() {

    for (i = 0; i < generateLength; i++) {
        // choose letter
        var passwordChar = finalArray[Math.floor(Math.random() * finalArray.length)];
        // concat chosen amount of letters
        var addChar = passwordArray.concat(passwordChar);
        passwordArray = addChar;

    }
    passwordElement.textContent = passwordArray.join("");
    addChar.length = 0;
}

// Choose new Criteria Button
var customizeNewButton = document.getElementById("customize-new");
customizeNewButton.addEventListener("click", function () {
    location.reload();
});
// App Controller / Entry Point
// This function is responsible for receiving 
// and responding to the user's string
function getValues() {
    // user enters a word or phrase here, get user's string
    let userInput = document.getElementById('userInput').value;
    // originalOutput is responsible for displaying users 
    // original string entered into userInput
    let originalOutput = document.getElementById('originalOutput').value;
    // reversedOutput is the result of the function that 
    // determines whether a string is a palindrome or not
    let reversedOutput = checkForPalindrome(userInput);   
    // displayResults communicates with EventListener
    // to display results of palindrome checker
    displayResults(reversedOutput);
}

// Business Logic
// This function is responsible for 
// comparing the string the user entered and the 
// string in reverse to determine whether a string 
// is a palindrome or not
function checkForPalindrome(userInput) {
    // regEx removes non-alphanumeric characters, underscores, 
    // and all white spaces
    let regEx = /[\W\_/ /""]/g;
    // converts userString to lowercase, replaces regEx with nothing
    let userInput = userString.toLowerCase().replace(regEx, "");
    // takes the userString, converts it to an array, then 
    // reverses it, before converting it back to a string
    let reversedOutput = userString.split("").reverse().join("");

    // can also use a for loop for comparisons and conversions
    // let reversedOutput = ''
    // for (let index = userInput.length - 1; index >= 0; index = index - 1){
    // reversedOutput += userInput[index];
    // }

    // if the reversed string and the string input by the user 
    // are exact matches, if statement returns true, otherwise
    // if not a match statenent returns false
    if (reversedOutput === userInput); {
        return true;
    } else {
        return false;
    }
}

// View Function
// This function is responsible for displaying a message to 
// the user to show whether their string is a palindrome or not
function displayResults(reversedOutput) {
    // assigns the return of true or false from the 
    // function checkForPalindrome to variable results
    let results = checkForPalindrome
    // assigns value of string entered by user
    //  to variable originalOutput 
    let originalOutput = userInput
    // if statement displays a success/yes it's a palindrome or failure/no
    // it's not a palindrome alert, with the user's original input, and the 
    // user's original input reversed.
    if (results = true) {
        // you want to remove the class d-none to get the alert to show / display
       document.getElementById('alertYesPal').classList.remove('d-none');
       // show the string on the page / assign text input to originalOutput
       document.getElementById('originalOutput').textContent = userInput;
       // show the string on the page / assign text input to reversedOutput
       document.getElementById('reversedOutput').textContent = reversedOutput;
    } else {
        // you want to remove the class d-none to get the alert to show / display
        document.getElementById('alertNoPal').classList.remove('d-none');
        // show the string on the page / assign text input to originalOutput
        document.getElementById('originalOutput').textContent = userInput;
        // show the string on the page / assign text input to reversedOutput
       document.getElementById('reversedOutput').textContent = reversedOutput;
    }
}

    // Swal.fire(
    //     {
    //         backdrop: false,
    //         title: 'Taco Cat',
    //         text: msg
    //     }
    // );
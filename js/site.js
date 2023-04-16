// App Controller / Entry Point
// This function is responsible for receiving 
// and responding to the user's string
function getValues() {
    // user enters a word or phrase here, get user's input string
    let userInput = document.getElementById('message').value;
    
    // variable storing the user's string in reverse
    let reversedInput = checkForPalindrome(userInput);  

     // displayString communicates with EventListener
    // to display results of palindrome checker
    displayResults(reversedInput);
}

// Business Logic
// This function is responsible for comparing the
//  string the user entered and the string in reverse
// to determine whether a string is a palindrome or not
function checkForPalindrome(userInput) {
    // take a string, return it in reverse
    let reversedMessage = ''

    // regEx removes non-alphanumeric characters, underscores, 
    // and all white spaces
    let regEx = /[\W_/ /]/g;

    // converts userInput to lowercase, replaces regEx with nothing
    let smallString = userInput.toLowerCase().replace(regEx,"");

    // converts smallString (string) to an array, then 
    // reverses it, before converting it back to a string
    let reversed = smallString.split("").reverse().join("");

    // if the reversed string and the string input by the user 
    // are exact matches, if statement returns true, otherwise
    // if not a match statenent returns false, both conditions
    // return the users message reversed
    if (reversed === smallString); {
        return true;
        return reversedMessage;
    } else (reversed != smallString) {
        return false;
        return reversedMessage;
    }
}

// View Function
// This function is responsible for displaying a message to 
// the user to show whether their string is a palindrome or not
function displayResults(reversedMessage) {

    // if statement displays a success/yes if it's a palindrome or 
    // failure/no if it's not a palindrome alert, with the users 
    // message reversed
    if (results = true) {
        // you want to remove the class d-none to get the alert to display
        // showing yes, it's a palindrome
        document.getElementById('alertYesPal').classList.remove('d-none');

        // remove the class d-none to get the alert to display for the 
        // container for the reversed message 
        document.getElementById('alert').classList.remove('d-none')
       
       // shows the reversed message string text on the page  
       document.getElementById('msg').textContent = reversedMessage;
    } else {
        // you want to remove the class d-none to get the alert display
        // showing no, it's not a palindrome
        document.getElementById('alertNotPal').classList.remove('d-none');

        // remove the class d-none to get the alert to display for the 
        // container for the reversed message  
        document.getElementById('alert').classList.remove('d-none')
        
        // shows the reversed message string text on the page 
        document.getElementById('msg').textContent = reversedMessage;
    }
}

    // Swal.fire(
    //     {
    //         backdrop: false,
    //         title: 'Taco Cat',
    //         text: msg
    //     }
    // );
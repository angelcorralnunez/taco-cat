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
    // removes non-alphanumeric characters, underscores, 
    // and all white spaces, replaces with nothing
    userInput = userInput.replace(/[\W\s\.]/g, '');

    // converts userInput to lowercase, 
    let userConvertStr = userInput.toLowerCase();

    // converts userConvertStr (string) to an array, then 
    // reverses it, before converting it back to a string
    let reversed = userConvertStr.split("").reverse().join("");

    // if the reversed string and the string input by the user 
    // are exact matches, if statement returns true, otherwise
    // if not a match statement returns false, both conditions
    // return the users message reversed
    // take a string, return it in reverse
    let reversedMessage = ''
    if (reversed === userConvertStr) {
        results = true;
    } else {
        results = false;
    }
}

// View Function
// This function is responsible for displaying a message to 
// the user to show whether their string is a palindrome or not
function displayResults(reversedMessage) {
    // shows the reversed message string text on the page  
    document.getElementById('msg').textContent = reversedMessage;
  
    if (results === true) {
        // you want to remove the class d-none to get the alert to display
        // showing yes, it's a palindrome
        document.getElementById('alertYesPal').classList.remove('d-none');

        // remove the class d-none to get the alert to display for the 
        // container for the reversed message 
        document.getElementById('alert').classList.remove('d-none')
       
       
    } else {
        // you want to remove the class d-none to get the alert display
        // showing no, it's not a palindrome
        document.getElementById('alertNotPal').classList.remove('d-none');

        // remove the class d-none to get the alert to display for the 
        // container for the reversed message  
        document.getElementById('alert').classList.remove('d-none')
    
    }
}

    // Swal.fire(
    //     {
    //         backdrop: false,
    //         title: 'Taco Cat',
    //         text: msg
    //     }
    // );
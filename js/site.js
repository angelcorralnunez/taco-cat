// App Controller / Entry Point
function getValues() {
    // get the users input
    // decide what to do with it
    let alertBox = document.getElementById('alert').value;
    alertBox.classList.remove('alert-success');
    alertBox.classList.remove('alert-danger');
    alertBox.classList.remove('d-none');
    // user enters a word or phrase here, get user's input string
    let userInput = document.getElementById('message').value;
    // variable storing the user's string in reverse 
    if (userInput.length > 0) {
        let reversedInput =  reverseString(userInput);
        let isPalindrome =  checkForPalindrome(userInput);
        // displayString communicates with EventListener
        // to display results of palindrome checker
        displayResult(reversedInput, isPalindrome);
        // alerts error message 
    } else {
        Swal.fire({
               
                icon: 'error'
                backdrop: false,
                title: 'Taco Cat',
                text: "You must enter a word or phrase to check for a palindrome!"
            
            });
    }
}

// Business Logic
function checkForPalindrome(userString) {

    userString = userString.toLowerCase();

        const regEx = /[^a-z0-9]/gi

        userString = userString.replace(regEx, "");

        let revString = revString(userString);

        let isPalindrome = revString == userString;

        return isPalindrome;

}

function reverseString(message) {
    // take a string, return it in reverse
    let reversedMessage = ''

    //  reverse the string
    for (let index = message.length - 1; index >= 0; index = index - 1){
        reversedMessage += message[index];
    }

    return reversedMessage;
}
// View Function
displayResult(reversedInput, isPalindrome); {

    let reversedMessage = ''

    let alertBox = document.getElementById('alert');

    let alertClass = palindromeResult == true ? 'alert-success' : 'alert-danger';
    alertBox.classList.add(alertClass);

    if (palindromeResult == true) {
        resultMessage = "Hurray, it's a Palindrome!"
    } else {
        resultMessage = "Sorry, it's not a Palindrome!"
    }

    resultMessage += "Your word or phrase reversed is" + reversedMessage;

    // show the string on the page / assign text input to reversedMessage
    document.getElementById('msg').textContent = reversedMessage;
    // you want to remove the class d-none to get the alert to show / display
    document.getElementById('alert').classList.remove('d-none');
}

  
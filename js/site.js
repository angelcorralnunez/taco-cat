// App Controller / Entry Point
function getValues() {
    // get the users input
    // decide what to do with it
    let userInput = document.getElementById('message').value;
    
    let reversedInput = reverseString(userInput)

    displayString(reversedInput);
}

// Business Logic
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
function displayString(reversedMessage) {
    // show the string on the page / assign text input to reversedMessage
    document.getElementById('msg').textContent = reversedMessage;
    // you want to remove the class d-none to get the alert to show / display
    document.getElementById('alert').classList.remove('d-none')
}

    // Swal.fire(
    //     {
    //         backdrop: false,
    //         title: 'Reverse Rewind',
    //         text: msg
    //     }
    // );
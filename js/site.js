// App Controller / Entry Point
// communicates with the DOM, get the user's input
function getValues() {
  // get alert box
  let alertbox = document.getElementById("alertBox");
  // removing style classes from alert message box temporarily
  alertbox.classList.remove("alert-success");
  alertbox.classList.remove("alert-danger");
  // get the user's input string from the DOM
  let userInput = document.getElementById("userMessage").value;
  // sets regex to any non-alphanumeric characters whitespace 
  // characters, and underscores globally
  const regEx = /[\W\s_]/g;
  // takes the userInput string, converts it to lowercase,
  // then removes the above declared regEx characters and
  // whitespaces and replaces them with nothing, then
  // assigns the resulting string to the variable userInput
  userInput = userInput.toLowerCase().replace(regEx, "");
  // takes userInput variable string, converts it to an array,
  // reverses it, then converts the array back to a string
  let reversedInput = userInput.split("").reverse().join("");
  // If user input character length is greater than 0, 
  if (userInput.length > 0) {
    // assigns result of the function checkForPalindrome that runs 
    // with a parameter of userInput to the variable reversedInput
    let isPalindrome = checkForPalindrome(userInput);
    // assigns result of the function displayResults that runs 
    // with a parameters of reversedInput and isPalindrome 
    // to the variable displayResults
    displayResults(reversedInput, isPalindrome);
    // If user input character length is less than 0,
    // so, if they din't enter anything a message pop-up
    // displays the following error message
  } else {
    Swal.fire({
      icon: "error",
      backdrop: false,
      title: "Error",
      text: "Please enter, letters, a word, a phrase, or numbers.",
    });
  }
}

// Business logic
// This function is responsible for comparing the
//  string the user entered and the string in reverse
// to determine whether a string is a palindrome or not
function checkForPalindrome(userInput) {
  // takes userInput variable string, converts it to an array,
  // reverses it, then converts the array back to a string
  let reversedInput = userInput.split("").reverse().join("");
  // If the variables reversedInput and userInput are equal
  // (the same), the value is then assigned to the
  // variable isPalindrome because it is a palindrome.
  let isPalindrome = reversedInput == userInput;
  // returns the variable isPalindrome holding the user's 
  // input string palindrome as a value
  return isPalindrome;
}

// View
// This function is responsible for displaying a message to 
// the user to show whether their string is a palindrome or not
function displayResults(reversedInput, isPalindrome) {
  // assigns the value of the below if statement 
  // to the variable resultMessage for display 
  let resultMessage = "";
  // comminicates with the DOM, gets the element with the ID
  // alertBox to add a style class to the alert depending on the 
  // results of the below ternary statement, if true/a palindrome
  // adding the class alert-success or if false/not a palindrome 
  // adding the class alert-danger
  let alertBox = document.getElementById("alertBox");
  let alertClass = isPalindrome == true ? "alert-success" : "alert-danger";
  alertBox.classList.add(alertClass);
  // depending on true or false results of the users string
  // from the function isPalindrome, one of the two below 
  // instructions will execute to give instructions on which
  // message to display
  if (isPalindrome == true) {
    // assigns the following string showing that the user's input 
    // is a palindrome to the ID resultHeader for display
    resultHeader = "Hurray, it's a palindrome!";
    // assigns the user's original input string but reversed
    // to the variable resultHeader 
    resultMessage = "YOUR PHRASE REVERSED IS: " + reversedInput;
  } else {
    // assigns the following string showing that the user's input 
    // is not a palindrome to the ID resultHeader for display
    resultHeader = "Sorry try again, it's not a palindrome!";
    // assigns the user's original input string but reversed
    // to the variable resultHeader
    resultMessage = "YOUR PHRASE REVERSED IS: " + reversedInput;
  }
  // communicates with the DOM to show the message with th result
  // of the palindrome check, either yes or no, to the user
  document.getElementById("alertHeader").textContent = resultHeader;
  // communicates with the DOM to show the reversed message string 
  // text content on the page 
  document.getElementById("returnMsg").textContent = resultMessage;
  //removes the class d-none to get the alert to display to the user
  alertBox.classList.remove("d-none");
}



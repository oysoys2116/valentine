const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');
let noButtonClicked = false; // Track if the button has been clicked

yesButton.addEventListener('click', () => {
  response.textContent = "Yay! You made me the happiest person! 💖";
});

noButton.addEventListener('click', () => {
  if (!noButtonClicked) {
    // Make the "No" button smaller on the first click
    noButton.style.transform = 'scale(0.8)';
    yesButton.style.transform = 'scale(1.2)'; // Make the Yes button bigger
    noButtonClicked = true; // Update the flag
    response.textContent = "WRONG ANSWER"; // Prompt the sentence on first click
  } else if (noButtonClicked === true) {
    // Make the "No" button even smaller on the second click
    noButton.style.transform = 'scale(0.4)';
    yesButton.style.transform = 'scale(1.6)'; // Make the Yes button bigger
    response.textContent = "TRY AGAIN"; // Prompt the sentence on second click
    noButtonClicked = 2; // Update the flag for the third click
  } else if (noButtonClicked === 2) {
    // On the third click, make the "No" button even smaller and prompt "ARE YOU SURE"
    noButton.style.transform = 'scale(0.2)'; // Make the No button even smaller
    yesButton.style.transform = 'scale(1.8)'; // Make the Yes button bigger
    response.textContent = "ARE YOU SURE"; // Prompt the sentence on third click
    noButtonClicked = 3; // Update the flag for the fourth click
  } else {
    // On the fourth click, make the Yes button larger and disable the No button
    noButton.style.transform = 'scale(0.05)'; // Make the No button even smaller
    yesButton.style.transform = 'scale(2.0)'; // Make the Yes button larger
    noButton.style.pointerEvents = 'none'; // Disable the No button
    response.textContent = "LAST TRY..."; // Prompt the sentence on fourth click
  }
});
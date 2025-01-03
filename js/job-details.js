
// Get the modal
var popup = document.getElementById("popup");

// Get the button that opens the modal
var btn = document.getElementById("openPopup");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  popup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  popup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}




      // Get the modals
var firstPopup = document.getElementById("popup");
var secondPopup = document.getElementById("secondPopup");

// Get the Apply button and form elements
var applyButton = document.getElementById("Apply");
var responseMessage = document.getElementById("responseMessage");

// Get the <span> elements that close the modals
var closeButtons = document.getElementsByClassName("close");

// Handle Apply button click
applyButton.onclick = function() {
  // Example logic to determine the response
  var isAccepted = Math.random() > 0.5; // Random acceptance for demo
  if (isAccepted) {
    responseMessage.textContent = "Your application has been sent!";
  } else {
    responseMessage.textContent = "Your application has been sent!";
  }
  
  // Open the second modal
  firstPopup.style.display = "none";
  secondPopup.style.display = "block";
}

// Close modals when clicking on <span> (x)
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function() {
    firstPopup.style.display = "none";
    secondPopup.style.display = "none";
  }
}

// Close modals when clicking outside of them
window.onclick = function(event) {
  if (event.target == firstPopup) {
    firstPopup.style.display = "none";
  }
  if (event.target == secondPopup) {
    secondPopup.style.display = "none";
  }
}





const inputbox = document.getElementById('applicationText');
const wordCountDisplay = document.getElementById('wordCount');

inputBox.addEventListener('input', function() {
  autoResize.call(this);
  updateWordCount();
}, false);

function autoResize() {
  this.style.height = 'auto'; // Reset the height
  this.style.height = this.scrollHeight + 'px'; // Set the height to match the scroll height
}

function updateWordCount() {
  const text = inputBox.value.trim();
  const wordCount = text ? text.split(/\s+/).length : 0; // Split by whitespace and count words
  wordCountDisplay.textContent = `Word Count: ${wordCount}`;
}


const inputBox = document.getElementById('applicationText');
const WordCountDisplay = document.getElementById('wordCount');
const wordLimitMessage = document.getElementById('wordLimitMessage');
const wordLimit = 1000; // Set your desired word limit here

inputBox.addEventListener('input', function() {
  autoResize.call(this);
  updateWordCount();
}, false);

function autoResize() {
  this.style.height = 'auto'; // Reset the height
  this.style.height = this.scrollHeight + 'px'; // Set the height to match the scroll height
}

function updateWordCount() {
  const text = inputBox.value.trim();
  const words = text.split(/\s+/);
  const wordCount = text ? words.length : 0; // Split by whitespace and count words
  wordCountDisplay.textContent = `Word Count: ${wordCount}`;

  if (wordCount > wordLimit) {
    wordLimitMessage.textContent = `Word limit exceeded! Please keep it under ${wordLimit} words.`;
    inputBox.value = words.slice(0, wordLimit).join(" "); // Trim the input to the word limit
  } else {
    wordLimitMessage.textContent = "";
  }
}


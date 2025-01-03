
document.addEventListener("DOMContentLoaded", function() {
const container = document.querySelector(".jlist");
const jobEntries = document.querySelectorAll(".job-entry");
let currentIndex = 0;
let scrollInterval;

function scrollJobs() {
    currentIndex = (currentIndex + 1) % jobEntries.length;
    jobEntries[currentIndex].scrollIntoView({ behavior: "smooth", inline: "center" });
}

function startScrolling() {
    scrollInterval = setInterval(scrollJobs, 2000);  /* Adjust the interval as needed */
}

function stopScrolling() {
    clearInterval(scrollInterval);
}

const footer = document.querySelector("footer");
footer.addEventListener('mouseenter', startScrolling);
footer.addEventListener('mouseleave', stopScrolling);

// Prevent page scroll when scrolling the container
container.addEventListener('wheel', (event) => {
    event.preventDefault();
    container.scrollLeft += event.deltaY;
}, { passive: false });

container.addEventListener('touchmove', (event) => {
    event.preventDefault();
}, { passive: false });
});



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











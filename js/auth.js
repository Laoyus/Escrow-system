
document.addEventListener("DOMContentLoaded", function() {
const container = document.querySelector(".tab-container");
const tabs = document.querySelectorAll(".rev");
let currentIndex = 0;

function scrollTabs() {
    currentIndex = (currentIndex + 1) % tabs.length;
    container.scrollLeft = tabs[currentIndex].offsetLeft - container.offsetLeft;
}

setInterval(scrollTabs, 5000);  // Adjust the interval (2000ms = 2 seconds) as needed

// Prevent page scroll when scrolling the tab container
container.addEventListener('mousewheel', (event) => {
    event.preventDefault();
    container.scrollLeft += event.deltaY;
}, { passive: false });

container.addEventListener('touchmove', (event) => {
    event.preventDefault();
}, { passive: false });
});


document.body.addEventListener('mousedown', () => {
    document.body.style.backgroundColor = 'white';
  });
  
  document.body.addEventListener('mouseup', () => {
    document.body.style.backgroundColor = ''; // Revert to original color
  });
  


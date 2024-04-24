var media_query = window.matchMedia("(min-width:992px)");


//splash screen
const splash = document.querySelector('#splashscreen');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 0);//0 -> 2000 change later
});


// Get reference to the nav button element
const nav_button = document.querySelector(".nav-button");
// Set initial styles
nav_button.style.color = "black";
const navbar = document.querySelector(".navbar");
let nav_toggle = false;

// Add event listener to the nav_button for click events
nav_button.addEventListener("click", function() {
  // Call toggle_nav function when the button is clicked
  toggle_nav();
});

// Function to toggle the navbar visibility
function toggle_nav() {
  nav_toggle = !nav_toggle; // Toggle the value of nav_toggle

  if (nav_toggle) {
      // Change the opacity and color of the button when navbar is displayed
      navbar.style.opacity = 0.7;
      navbar.style.display = "block";
      nav_button.style.color = "white";
  } else {
      // Hide the navbar and change the color of the button when navbar is hidden
      navbar.style.opacity = 0;
      navbar.style.display = "none"
      nav_button.style.color = "black";
  }
}


//Carousel
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2.2 seconds
}

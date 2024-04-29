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
nav_button.style.color = "black";
const navbar = document.querySelector(".navbar");
let nav_toggle = false;

// Add event listener to the nav_button for click events
nav_button.addEventListener("click", function() {
  toggle_nav();
});

// Function to toggle the navbar visibility
function toggle_nav() {
  nav_toggle = !nav_toggle;

  if (nav_toggle) {
      navbar.style.opacity = 0.7;
      navbar.style.display = "block";
      nav_button.style.color = "white";
  } else {
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


//Gallery
document.addEventListener("DOMContentLoaded", function() {
    var galleryImages = document.querySelectorAll(".gallery-img");

    galleryImages.forEach(function(image) {
        var imgHeight = image.querySelector("img").clientHeight;
        var imgWidth = image.querySelector("img").clientWidth;
        var infoDisplay = image.querySelector(".info-display");
        var infoDisplayHeight = infoDisplay.clientHeight;
        var infoDisplayWidth = infoDisplay.clientWidth;
        
        infoDisplay.style.bottom = "20px";
        infoDisplay.style.right = "-20px";
        infoDisplay.style.margin = "10px";

        if (infoDisplayHeight + 20 > imgHeight) {
            infoDisplay.style.bottom = imgHeight - 20 + "px";
        }

        if (infoDisplayWidth + 20 > imgWidth) {
            infoDisplay.style.right = imgWidth - 20 + "px";
        }
    });
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var isActive = this.classList.contains('active');

    // Close all panels
    for (var j = 0; j < acc.length; j++) {
      acc[j].classList.remove('active');
      acc[j].nextElementSibling.style.maxHeight = null;
    }

    // Open the clicked panel
    if (!isActive) {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
  
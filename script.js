//splash screen
const splash = document.querySelector('#splashscreen');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 0);//0 -> 2000 change later
});




//nav-bar button
const nav_button = document.querySelector(".nav-button");
nav_button.style.color = "black";
const navbar = document.querySelector(".navbar");

let nav_toggle = false;
//on button click the navbar is displayed by changing the opacity
nav_button.addEventListener('click', function() {
    nav_toggle = !nav_toggle

    if(nav_toggle){
        //change the opacity
        navbar.style.opacity = 0.7;
        //change the color of the button
        nav_button.style.color = "white";
        console.log("0");

    } else {
        navbar.style.opacity = 0;
        nav_button.style.color = "black";
        console.log("1");
    }
});


//Carousel

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
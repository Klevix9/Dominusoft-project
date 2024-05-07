var media_query = window.matchMedia("(min-width:992px)");


//splash screen
const splash = document.querySelector('#splashscreen');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 0);//0 -> 2000 change later
});

// Navigation bar

//Nav button
const nav_button = document.querySelector(".nav-button");
nav_button.style.color = "black";
const navbar = document.querySelector(".navbar");
let nav_toggle = false;

nav_button.addEventListener("click", function() {
  toggle_nav();
});

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

//Displace nav bar when overlapping with footer
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const footer = document.querySelector("footer");

    function checkOverlap() {
        const navbarBottom = navbar.getBoundingClientRect().bottom;
        const footerTop = footer.getBoundingClientRect().top;

        if (navbarBottom > footerTop) {
            const overlap = navbarBottom - footerTop;
            navbar.style.top = `-${overlap}px`;
        } else {
            navbar.style.top = "0";
        }
    }

    window.addEventListener("scroll", checkOverlap);
});


//Gallery
document.addEventListener("DOMContentLoaded", function() {
    var galleryImages = document.querySelectorAll(".gallery-img");

    galleryImages.forEach(function(image) {
        var imgHeight = image.querySelector("img").clientHeight;
        var imgWidth = image.querySelector("img").clientWidth;
        var infoDisplay = image.querySelector(".info-display");
        var infoDisplayHeight = infoDisplay.clientHeight;
        var infoDisplayWidth = infoDisplay.clientWidth;
        
        infoDisplay.style.bottom = "-20px";
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



//Accordion
// $(document).ready(function(){

//   // link action
//   $(".action").click(function(e){
//       e.preventDefault();

//       $(".slider").removeClass("active");
//       var slide = $(this).closest(".slider");
//       slide.addClass("active");
//   });

// });

function slider_change(event, element) {
    event.preventDefault();

    $(".slider").removeClass("active");
    var slide = $(element).closest(".slider");
    slide.addClass("active");
}


// checkWidth
checkWidth = function(){
  var windowsize = $(window).width();
  if (windowsize > 480) {
      var slideWidth = $('.active').width();
      $('.slide-content').css({
          "width" : slideWidth+"px"
      });
  }
  
}

$(window).resize(function() {
  // onresize
  checkWidth();

  // finish resize
  clearTimeout(window.resizedFinished);
  window.resizedFinished = setTimeout( checkWidth , 500);
});
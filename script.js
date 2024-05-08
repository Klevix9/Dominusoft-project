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
const logo = document.querySelector(".main-logo");
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
    logo.style.display = "none";
  } else {
    navbar.style.opacity = 0;
    navbar.style.display = "none"
    nav_button.style.color = "black";
    logo.style.display = "block";
    }
}

//Displace nav bar when overlapping with footer
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const logo = document.querySelector(".main-logo");
    const footer = document.querySelector("footer");

    function checkOverlap() {
        const navbarBottom = navbar.getBoundingClientRect().bottom;
        const footerTop = footer.getBoundingClientRect().top;

        if (navbarBottom > footerTop) {
            const overlap = navbarBottom - footerTop;
            navbar.style.top = `-${overlap}px`;
            logo.style.bottom = `${overlap}px`;
        } else {
            navbar.style.top = "0";
            logo.style.bottom = "0";
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


// Accordion

var accordion_index = 0;

function slider_change(event, x) {
    event.preventDefault();

    $(".slider").removeClass("active");
    accordion_index = x;
    var slide = $(".slider").eq(accordion_index);
    slide.addClass("active");

    return accordion_index;
}

function slider_change_next(event) {
    $(".slider").removeClass("active");
    accordion_index = (accordion_index + 1) % $(".slider").length;
    var slide = $(".slider").eq(accordion_index);
    slide.addClass("active");

    return accordion_index;
}

function slider_change_prev(event) {
    $(".slider").removeClass("active");
    accordion_index = (accordion_index - 1 + $(".slider").length) % $(".slider").length;
    var slide = $(".slider").eq(accordion_index);
    slide.addClass("active");

    return accordion_index;
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


// Contact page

// 1 = job request
// 2 = cooperation
// 3 = recruitment
function change_contact(event, type) {
    event.preventDefault();

    // Select all forms
    const forms = document.querySelectorAll('.contact');

    // Hide all forms
    forms.forEach(form => {
        form.style.display = 'none';
    });

    // Reset button rotation
    const buttons = document.querySelectorAll('.contact-select');
    buttons.forEach(button => {
        button.style.transform = 'rotate(0deg)';
    });

    // Display the selected form and rotate the corresponding button
    if (type === 1) {
        document.querySelector('.job-request').style.display = 'block';
        document.querySelector('.cooperation').style.display = 'none';
        document.querySelector('.recruitment').style.display = 'none';
        document.querySelector('#contact-select-1').style.transform = 'rotate(90deg)';
    } else if (type === 2) {
        document.querySelector('.cooperation').style.display = 'none';
        document.querySelector('.cooperation').style.display = 'block';
        document.querySelector('.recruitment').style.display = 'none';
        document.querySelector('#contact-select-2').style.transform = 'rotate(90deg)';
    } else if (type === 3) {
        document.querySelector('.recruitment').style.display = 'none';
        document.querySelector('.cooperation').style.display = 'none';
        document.querySelector('.recruitment').style.display = 'block';
        document.querySelector('#contact-select-3').style.transform = 'rotate(90deg)';
    }
}


var media_query = window.matchMedia("(min-width:992px)");


// splash screen
const splash = document.querySelector('#splashscreen');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add('hidden');
    }, 0); // 3000 milliseconds = 3 seconds
});

// Function to disable scrolling
function disableScroll() {
    // Get the current scroll position
    var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    // Save the current scroll position
    var html = document.getElementsByTagName('html')[0];
    html.style.overflow = 'hidden';
    html.style.position = 'fixed';
    html.style.width = '100%';
    html.style.top = `-${scrollPosition[1]}px`;
}

// Function to enable scrolling
function enableScroll() {
    var html = document.getElementsByTagName('html')[0];
    html.style.overflow = '';
    html.style.position = '';
    html.style.width = '';
    html.style.top = '';
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
}

// Example usage: disable scrolling for 3 seconds
disableScroll();
setTimeout(enableScroll, 0);



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



// Contact Page

// Switch form
function change_contact(event, type) {
    event.preventDefault();

    // Select all forms
    const forms = document.querySelectorAll('.contact');

    // Hide all forms
    forms.forEach(form => {
        form.style.display = 'none';
    });

    // Reset button rotation and hide all forms
    const buttons = document.querySelectorAll('.contact-type button');
    buttons.forEach(button => {
        button.style.transform = 'rotate(0deg)';
    });

    // Display the selected form and rotate the corresponding button icon
    if (type === 1) {
        document.querySelector('.job-request').style.display = 'block';
        document.querySelector('.cooperation').style.display = 'none';
        document.querySelector('.recruitment').style.display = 'none';
        document.querySelectorAll('#contact-select-1 i').forEach(icon => {
            icon.style.transform = 'rotate(90deg)';
        });
        document.querySelectorAll('#contact-select-2 i').forEach(icon => {
            icon.style.transform = 'rotate(0deg)';
        });
        document.querySelectorAll('#contact-select-3 i').forEach(icon => {
            icon.style.transform = 'rotate(0deg)';
        });
    } else if (type === 2) {
        document.querySelector('.job-request').style.display = 'none';
        document.querySelector('.cooperation').style.display = 'block';
        document.querySelector('.recruitment').style.display = 'none';
        document.querySelectorAll('#contact-select-1 i').forEach(icon => {
            icon.style.transform = 'rotate(0deg)';
        });
        document.querySelectorAll('#contact-select-2 i').forEach(icon => {
            icon.style.transform = 'rotate(90deg)';
        });
        document.querySelectorAll('#contact-select-3 i').forEach(icon => {
            icon.style.transform = 'rotate(0deg)';
        });
    } else if (type === 3) {
        document.querySelector('.job-request').style.display = 'none';
        document.querySelector('.cooperation').style.display = 'none';
        document.querySelector('.recruitment').style.display = 'block';
        document.querySelectorAll('#contact-select-1 i').forEach(icon => {
            icon.style.transform = 'rotate(0deg)';
        });
        document.querySelectorAll('#contact-select-2 i').forEach(icon => {
            icon.style.transform = 'rotate(0deg)';
        });
        document.querySelectorAll('#contact-select-3 i').forEach(icon => {
            icon.style.transform = 'rotate(90deg)';
        });
    }
}




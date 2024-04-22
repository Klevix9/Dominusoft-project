//splash screen
const splash = document.querySelector('#splashscreen');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 0);//0 -> 2000 change later
});


//nav-bar button
const nav_button = document.querySelector('.nav-button');
const nav = document.querySelector('.navbar');

let nav_toggle = false;

function display_nav_bar(){
    nav_toggle = !nav_toggle

    if(nav_toggle){
        nav.classList.remove('display-none');
        console.log("toggled");

    } else {
        nav.classList.add('display-none');
        console.log("not toggled");
    }
}
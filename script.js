// setting variable for navbar
var navBarSelector = document.getElementById("myTopnav");

// allows navbar to open and close on mobile devices
function myFunction(button) {
    button.classList.toggle("change");
    navBarSelector.classList.toggle("responsive")

}

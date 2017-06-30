// setting variable for navbar elements
var navBarSelector = document.getElementById("myTopnav");
var burgerSelector = document.getElementById("burger");
var navLinksArraySelector = navBarSelector.querySelectorAll("A");


// allows navbar to open and close on mobile devices
function toggleNavbar() {
  burgerSelector.classList.toggle("change");
  navBarSelector.classList.toggle("responsive")
}

function closeNavbar() {
  burgerSelector.classList.remove("change");
  navBarSelector.classList.remove("responsive")
}

// Event list caller
function callEventListeners() {
  addBurgerListener();
  addNavlinkListeners();
}

// Event listeners
function addBurgerListener() {
  burgerSelector.addEventListener("click", toggleNavbar);
}

function addNavlinkListeners() {
  navLinksArraySelector.forEach(function(elem) {
    elem.addEventListener("click", closeNavbar);
  })
}

//functions to run on page load
function setup() {
  burgerSelector.classList.add('display-burger');
  callEventListeners();
}

window.onload = setup;

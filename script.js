// Variables

// getting items from local storage
var burger = Number(localStorage.getItem("burger")) || 0;
var chicken = Number(localStorage.getItem("chicken")) || 0;
var iceCream = Number(localStorage.getItem("iceCream")) || 0;


const OUTPUT = document.getElementById("JavaScriptOutput");

// background array and current background variable
const images = ["images/burgerman.png","images/chickenman.png","images/icecreamwoman.png"];
let current = 0;

// Main Code

// changing background

changeBackground();

setInterval(changeBackground, 5000);


// functions


// changing background
function changeBackground() {
    document.body.style.backgroundImage = "url(" + images[current] + ")";
    current = (current + 1) % images.length;
}

// Adding items to local storage

// Ice cream
function addIceCream(){
iceCream ++;
localStorage.setItem("iceCream", iceCream);
OUTPUT.innerHTML = "Ice Cream added to order";
setTimeout(function() { OUTPUT.innerHTML = ""; }, 1000);
}

// Burger
function addBurger(){
burger ++;
localStorage.setItem("burger", burger);
OUTPUT.innerHTML = "Cheeseburger added to order";
setTimeout(function() { OUTPUT.innerHTML = ""; }, 1000);
}

// Chicken
function addChicken(){
chicken ++;
localStorage.setItem("chicken", chicken);
OUTPUT.innerHTML = "Fried Chicken added to order";
setTimeout(function() { OUTPUT.innerHTML = ""; }, 1000);
}


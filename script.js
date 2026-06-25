console.log("Hello world!")


// Variables
var burger = 0
var chicken = 0
var iceCream = 0
const OUTPUT = document.getElementById("JavaScriptOutput");


// Main Code



// functions

function addIceCream(){

iceCream ++;
localStorage.setItem("iceCream", iceCream);
OUTPUT.innerHTML = "Ice Cream added to order"
setTimeout(function() { OUTPUT.innerHTML = ""; }, 1000);
}

function addBurger(){
burger ++;
localStorage.setItem("burger", burger);
OUTPUT.innerHTML = "Cheeseburger added to order"
setTimeout(function() { OUTPUT.innerHTML = ""; }, 1000);
}

function addChicken(){
chicken ++;
localStorage.setItem("chicken", chicken);
OUTPUT.innerHTML = "Fried Chicken added to order"
setTimeout(function() { OUTPUT.innerHTML = ""; }, 1000);
}

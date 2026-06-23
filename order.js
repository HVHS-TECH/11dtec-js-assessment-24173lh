// Variables

var money = 0
var name = ""
var total

var burger = localStorage.getItem("burger");
if (burger == null) { burger = 0; }

var chicken = localStorage.getItem("chicken");
if (chicken == null) { chicken = 0; }

var iceCream = localStorage.getItem("iceCream");
if (iceCream == null) { iceCream = 0; }

var OUTPUT = document.getElementById("JavaScriptOutput");

total = iceCream*3 + burger*6 + chicken*5

//Main Code

OUTPUT.innerHTML = "Cheeseburgers: " + burger + "<br>Fried Chicken: " + chicken + "<br>Ice Creams: " + iceCream;
OUTPUT.innerHTML += "<br><b>Total: </b>$ " + total


//Functions

function clearOrder() {
  localStorage.clear();
  OUTPUT.innerHTML = "Order cleared";
}
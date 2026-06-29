document.querySelector("#DetailsOutput").style.visibility = 'hidden';

// Variables

var menuItems = ["Cheeseburgers", "Fried Chicken", "Ice Creams"];

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

var AmountOfChicken

var AmountOfBurgers

var AmountOfIceCream


total = iceCream*3 + burger*6 + chicken*5

//Main Code

OUTPUT.innerHTML =
menuItems[0] + ": " + burger + " ($" + burger * 6 + ")" +
"<br>" +
menuItems[1] + ": " + chicken + " ($" + chicken * 5 + ")" +
"<br>" +
menuItems[2] + ": " + iceCream + " ($" + iceCream * 3 + ")";OUTPUT.innerHTML += "<br><b>Total: </b>$" + total

if (chicken>0) {
  AmountChicken()} else AmountOfChicken = "";
if (burger>0) {
  AmountBurger() } else AmountOfBurgers = "";
if (iceCream>0) {
  AmountIceCream() } else AmountOfIceCream = "";


//Functions

function AmountChicken(){
AmountOfChicken = "Chicken x" + chicken + "<br>";
return AmountOfChicken
}

function AmountBurger(){
AmountOfBurgers = "Burger x" + burger + "<br>";
return AmountOfBurgers
}

function AmountIceCream(){
AmountOfIceCream = "Ice Cream x" + iceCream + "<br>";
return AmountOfIceCream
}

function clearOrder() {
  localStorage.clear();
  OUTPUT.innerHTML = "Order cleared";
}


function getFormInput() {
  document.querySelector("#DetailsOutput").style.visibility = "visible";
  var detailsOutput = document.getElementById("DetailsOutput");
  var userName = document.getElementById("nameField").value;
  var userMoney = Number(document.getElementById("moneyField").value);
  if (userMoney>0) {
    if (userMoney<total) {
      detailsOutput.innerHTML = "You are fat get a job you fatty. (Not enough money)";

  } else {
    detailsOutput.innerHTML = "<h1>Receipt:</h1> Name: " + userName + "<br>Money: $" + userMoney + "<br>" + AmountOfChicken +  AmountOfIceCream + AmountOfBurgers + "<br><b>Total: </b>$" + total + "<br>Change: $" + (userMoney-total) + "<br>";
  }
  
}

}
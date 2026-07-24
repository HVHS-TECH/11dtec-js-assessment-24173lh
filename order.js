
// variables

//menu items
var menuItems = ["Cheeseburgers", "Fried Chicken", "Ice Creams"];

//details
var money = 0;
var name = "";

//total price
var total;


// getting items from script.js, if variable is empty, makes it 0

//burger 
var burger = localStorage.getItem("burger") || 0;

//chicken
var chicken = localStorage.getItem("chicken") || 0;

//ice cream
var iceCream = localStorage.getItem("iceCream") || 0;

// Displaying order
const OUTPUT = document.getElementById("JavaScriptOutput");


//variables for receipt
var AmountOfChicken;
var AmountOfBurgers;
var AmountOfIceCream;

// calculatig total
total = iceCream*3 + burger*6 + chicken*5;


// Main Code

// Displaying order
OUTPUT.innerHTML = menuItems[1] + ": " + chicken + " ($" + chicken * 5 + ")" + "<br>" + menuItems[2] + ": " + iceCream + " ($" + iceCream * 3 + ")" + "<br>" + menuItems[0] + ": " + burger + " ($" + burger * 6 + ")"; 

// Displaying total
OUTPUT.innerHTML += "<br><b>Total: </b>$" + total;


// calculating whether to show items for receipt 
// If there is more than 0 items on the order it will calculate the amount of items. 
// Otherwise it will display nothing
if (chicken>0) {
  AmountChicken();} 
  else AmountOfChicken = "";
if (burger>0) {
  AmountBurger();} 
  else AmountOfBurgers = "";
if (iceCream>0) {
  AmountIceCream();} else 
    AmountOfIceCream = "";


//Functions

//quantity of items
function AmountChicken(){
AmountOfChicken = "Chicken x" + chicken + "<br>";
return AmountOfChicken;
}

function AmountBurger(){
AmountOfBurgers = "Burger x" + burger + "<br>";
return AmountOfBurgers;
}

function AmountIceCream(){
AmountOfIceCream = "Ice Cream x" + iceCream + "<br>";
return AmountOfIceCream;
}


//clearing order
function clearOrder() {
  localStorage.clear();
  OUTPUT.innerHTML = "Order cleared";
}

// getting results from form
function getFormInput() {
  var detailsOutput = document.getElementById("DetailsOutput");
  var userName = document.getElementById("nameField").value;
  var userMoney = Number(document.getElementById("moneyField").value);

// displaying receipt/"not enough money"
if (userMoney<10000.1){
  if (userMoney>-0.1){
    //not enough money
  if (userMoney<total) {
      detailsOutput.innerHTML = "You need $" + (total - userMoney) + " more.";
    //recipt
  } else {
    detailsOutput.innerHTML = "<h1>Receipt:</h1> Name: " + userName + "<br>Money: $" + userMoney + "<br>" + AmountOfChicken +  AmountOfIceCream + AmountOfBurgers + "<b>Total: </b>$" + total + "<br>Change: $" + (userMoney-total) + "<br>";
  }
}
}


}
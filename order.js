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

total = iceCream*3 + burger*6 + chicken*5

//Main Code

OUTPUT.innerHTML =
menuItems[0] + ": " + burger + " ($" + burger * 6 + ")" +
"<br>" +
menuItems[1] + ": " + chicken + " ($" + chicken * 5 + ")" +
"<br>" +
menuItems[2] + ": " + iceCream + " ($" + iceCream * 3 + ")";OUTPUT.innerHTML += "<br><b>Total: </b>$" + total


//Functions

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
      detailsOutput.innerHTML = "Sorry, you can't afford this.";

  } else {
    detailsOutput.innerHTML = "<h1>Receipt:</h1> Name: " + userName + "<br>Money: $" + userMoney + "<br>Total: $" + total + "<br>Change: $" + (userMoney-total);
  }
  
}

}
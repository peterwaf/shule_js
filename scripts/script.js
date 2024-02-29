document.getElementById("heading").style.color = "red";
document.getElementById("heading").style.textDecoration = "underline";

var firstName = "Tom";
var lastName = "Cruise";

document.getElementById("heading2").innerText = firstName + " "+ lastName;

// Uber charges 100 bob for the first 1km and 20 shillings per km afterwards
// Calculate how much a trip of 55km would cost
// Uber takes a commision of 20%, how much did the driver make ?

var normalFair = 20;
var km = 55;
var remainingKm = km - 1;
var firstFair = 100 * 1;
var fullFair = remainingKm * normalFair + firstFair;
var uberCommission = (20/100) * fullFair;
console.log("Full fair :"+fullFair );
console.log("Uber Commission :"+uberCommission );
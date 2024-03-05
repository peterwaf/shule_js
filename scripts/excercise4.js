let submit = document.getElementById("submit");
let output = document.getElementById("output");
function calculateDiscount(percentage, userAmount) {
    let discountOnlyAmount = (percentage / 100) * userAmount;
    let finalDiscount = userAmount - discountOnlyAmount;
    return finalDiscount;
}

submit.onclick = function () {
    let promocode = document.getElementById("promocode").value;
    let amount = document.getElementById("amount").value;
    let amountNumber = parseInt(amount);
    if (promocode == "KARIBU" && amountNumber <= 3950) {
        output.innerText = "Your discount is : " + calculateDiscount(18.345, amountNumber);
    }
    else if (promocode == "NAIROBI" && amountNumber >= 4000) {
        output.innerText = "Your discount is : " + calculateDiscount(30, amountNumber);
    }
    else if(typeof amount === "string" && amount.length === 0){
        output.innerText = "No Spend";
    }
    else {
        output.innerText = "Total Amount : "+ amountNumber;
    }
}

// console.log(calculateOffer(18.345,500))
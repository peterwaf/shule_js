let submit = document.getElementById("submit");
submit.onclick = function () {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let thirdNumber = document.getElementById("thirdNumber").value;
    let firstNumberInt = parseInt(firstNumber);
    let secondNumberInt = parseInt(secondNumber);
    let thirdNumberInt = parseInt(thirdNumber);
    let sum = firstNumberInt + secondNumberInt + thirdNumberInt;
    let output = document.getElementById("output");
    output.innerText = sum;
}


let cars = document.getElementById("cars");

cars.onchange = function () {
    let output2 = document.getElementById("output2");
    output2.innerText = cars.value;
}


document.getElementById("search").onkeyup = function () {
    let searchOutPut = document.getElementById("searchOutput");
    searchOutPut.innerText = document.getElementById("search").value;
}



let city1 = "Nairobi";
let city2 = "Eldoret";
let city3 = "Kisumu";

let delivery = document.getElementById("delivery");

userInput.onkeyup = function () {
    let userInput = document.getElementById("userInput").value;
    if (userInput == city1) {
        delivery.innerText = "Delivered"
    }
    else if (userInput == city2) {
        delivery.innerText = "Delivered"
    }
    else if (userInput == city3) {
        delivery.innerText = "Delivered"
    }
    else {
        delivery.innerText = "Error"
    }
}





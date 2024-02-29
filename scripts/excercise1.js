//distance between 2 points A (X_1,Y_1) and B (X_2,Y_2) e.g (2,2),(-2,-3)
var answer_Container = document.getElementById("answer");
var submitButton = document.getElementById("calculate")
var valueTrue = true;
var userValues = []

function validateInput(inputValue) {
    if (!inputValue) {
        valueTrue = false;
    }
}

submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    var x_2 = document.getElementById("x2").value;
    var x_1 = document.getElementById("x1").value;
    var y_2 = document.getElementById("y2").value;
    var y_1 = document.getElementById("y1").value;
    userValues.push(x_2, x_1, y_2, y_1)
    userValues.forEach(userValue => {
        validateInput(userValue)
    });

    if (valueTrue) {
        var firstValue = (x_2 - x_1) ** 2;
        var secondValue = (y_2 - y_1) ** 2;
        var distance = Math.sqrt(firstValue + secondValue);
        answer_Container.innerText = "The distance between point A and B points is: " + distance.toFixed(2);
    }
    else {
        answer_Container.innerHTML = "<p>Invalid input,Click Reload and re-enter values</p> <button onclick='window.location.reload();'>Reload</button>";
        valueTrue = true;
    }
})


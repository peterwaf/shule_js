const age = document.getElementById("age");
const submit = document.getElementById("submit");
let message = document.getElementById("message");

submit.onclick = function (ageNum) {
    ageNum = age.value;
    ageNumInt = parseInt(ageNum);
    if (ageNum <= 2) {
        message.innerText = "Age Group : Baby";
    }
    else if (isNaN(ageNum)) {
        message.innerText = "Must be a number";
        message.style.color = 'red';
    }
    else if (ageNum >= 3 && ageNum <= 12) {
        message.innerText = "Age Group : Child";
    }
    else if (ageNum >= 13 && ageNum <= 19) {
        message.innerText = "Age Group : Teenager";
    }
    else if (ageNum >= 20 && ageNum <= 35) {
        message.innerText = "Age Group : Young Adult";
    }
    else if (ageNum >= 36 && ageNum <= 59) {
        message.innerText = "Age Group : Middle Aged Adult";
    }
    else if (ageNum >= 60 && ageNum <= 99) {
        message.innerText = "Age Group : Old Adult";
    }
    else if (ageNum >= 100 && ageNum <= 120) {
        message.innerText = "Age Group : Legendary Old Adult";
    }
    else if (ageNum > 120) {
        message.innerText = "You must be out of space, visit your nearest government registry";
    }
    else {
        message.innerText = "Know your age group";
    }
}
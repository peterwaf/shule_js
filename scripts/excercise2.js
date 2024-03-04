var colorDiv = document.getElementById("colorDiv");
var openDiv = document.getElementById("open");
var closeDiv = document.getElementById("close");
openDiv.onclick = function(){
    colorDiv.style.display = "block";
}
closeDiv.onclick = function(){
    colorDiv.style.display = "none";
}
/*   JS basics and DOM
   1.Change the background color of a button when it is clicked.
   2.Create a text input and a button. When the button is clicked, display the text input value in an alert box.
   3.Create a list of items using the <ul> and <li> elements. Add a button next to each item that, when clicked, removes the item from the list.
   4.Create a div with a border and a button. When the button is clicked, toggle the visibility of the div.
   5.Create a table with multiple rows and columns. When a cell is clicked, change its background color.
   6.Create a button that, when clicked, creates a new paragraph element with text inside and appends it to the end of an existing div.
   7.Create a form with two text inputs and a button. When the button is clicked, concatenate the values of the two text inputs and display the result in an alert box.
   8.Create a select dropdown with multiple options. When an option is selected, display its value in an alert box.
   9.Create an image element and a button. When the button is clicked, change the image src to a different image.
   10.Create a button that, when clicked, creates a new div element with a border and appends it to the end of an existing div. */



/*1.Change the background color of a button when it is clicked.*/

const btnOne = document.querySelector("#btn-1");
btnOne.addEventListener("click", function () {
    this.style.backgroundColor = "yellow";
})

/* 2.Create a text input and a button. When the button is clicked, display the text input value in an alert box.
 */
const inputTextButton = document.querySelector("#input-text");
inputTextButton.addEventListener("click", function () {
    const inputTextData = document.querySelector("#input-text-data").value;
    inputTextData ? alert(inputTextData) : alert("Enter data")
})

/*3.Create a list of items using the <ul> and <li> elements.
Add a button next to each item that, when clicked,
removes the item from the list.*/

function removeItem(itemBtn) {
    let parentListItem = itemBtn.parentNode;
    parentListItem.remove();
}

/*4.Create a div with a border and a button.
When the button is clicked,
toggle the visibility of the div.*/

const borderDivButton = document.getElementById("border-div-button");
let borderDivVisible = true;
borderDivButton.addEventListener("click", function () {
    let borderDiv = document.querySelector(".border-div");
    borderDivVisible = !borderDivVisible;
    if (borderDivVisible) {
        borderDiv.style.display = "block";
    }
    else {
        borderDiv.style.display = "none";
    }

})

/*5.Create a table with multiple rows and columns.
When a cell is clicked, change its background color.*/

let tableCellRows = document.querySelectorAll("#people tr td,#people tr th");
for (let index = 0; index < tableCellRows.length; index++) {
    const tableCell = tableCellRows[index];
    tableCell.addEventListener("click",function(){
        this.style.backgroundColor = "Yellow";
    })
    
}

/*6.Create a button that, when clicked, creates
a new paragraph element with text inside and
appends it to the end of an existing div.*/

const paraDivButton = document.getElementById("para-div-button");
paraDivButton.addEventListener("click",function(){
    let para = document.createElement("p");
    para.textContent = "Lorem Ipsum";
    let parentDiv = this.parentNode;
    parentDiv.after(para);
})

/*7.Create a form with two text inputs and a button.
When the button is clicked, concatenate the values
of the two text inputs and display the result
in an alert box.*/



/*9.Create an image element and a button.
When the button is clicked, change the
image src to a different image.*/

const images = ["./images/pexels-james-wheeler-414612.jpg",
"./images/pexels-photo-20881595.jpeg",
"./images/pexels-manel-cusido-20957178.jpg",
"./images/pexels-pixabay-36478.jpg"]
let image_position = 0;
let imagebtn = document.getElementById("img-btn");
let imageSource = document.getElementById("img-id");
imageSource.src = images[image_position];
imagebtn.addEventListener("click",function(){
    imageSource.src = images[image_position += 1]
    if(image_position > images.length -1 ){
        image_position = 0;
        imageSource.src = images[image_position];
    }
})

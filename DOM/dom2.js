/*DOM SELECTING, MANIPULATING(STYLE,traversing,attributes,elements) 

1.Use JavaScript to select an element with the ID "header" from the DOM.

2.Write a function that selects all elements with the class "item" and changes their background color to yellow.

3.Implement a script that selects the first <ul> element in the document and appends a new <li> element with the text "New Item" to it.

4.Write JavaScript code to select the last child element of a <div> with the class "container" and change its font color to red.

5.Write code that selects all <a> elements within
a <nav> element and adds a class "active" to each of them.

6.Write JavaScript code to traverse the DOM from an element
with the ID "start" to its parent, and then to its next sibling.

7.Develop a code that finds all elements with the class "container" and removes the class "hidden" from their children elements.

10.Develop a code that selects all elements with the class "menu-item" and inserts a new <span> element with the text "New" before each of them.


These questions cover various aspects of JavaScript DOM manipulation, including selecting elements by ID, class, or tag name, traversing the DOM tree, and manipulating elements' attributes and properties.*/

/*1.Use JavaScript to select an element with the ID "header" from the DOM.*/

// const a_header = document.getElementById("header");
// console.log(a_header)

/*2.Write a function that selects all elements with the class "item" and changes
their background color to yellow.*/

// function changeBackground(className) {
//     let class_items = document.getElementsByClassName(className);
//     for (let index = 0; index < class_items.length; index++) {
//         let element = class_items[index];
//         element.style.backgroundColor = "yellow";
//     }
// }

// changeBackground("item")

/*3.Implement a script that selects the first
<ul> element in the document and appends a new
<li> element with the text "New Item" to it.*/

// let newItem = document.getElementsByTagName("ul")[0];
// let newLi = document.createElement("li");
// newLi.textContent = "New Item";
// newItem.appendChild(newLi)

/*4.Write JavaScript code to select the
last child element of a <div> with the class
"container" and change its font color to red.*/

// let lastChild = document.querySelector(".container").lastElementChild;
// lastChild.style.color = "red";

/*5.Write code that selects all <a> elements within
a <nav> element and adds a class "active" to each of them.*/

// let all_links = document.querySelectorAll("nav a");
// for (let index = 0; index < all_links.length; index++) {
//     const element = all_links[index];
//     element.setAttribute("class","active");
// }

/*6.Write JavaScript code to traverse the DOM from an element
with the ID "start" to its parent, and then to its next sibling.*/

// let parent_start = document.getElementById("start").parentElement;
// let parent_start_sibling = parent_start.nextElementSibling;
// console.log(parent_start_sibling)

/*7.Develop a code that finds all elements
with the class "container" and removes the class
"hidden" from their children elements.*/

// let allChildrenNodes = document.querySelectorAll(".container *");
// for (let index = 0; index < allChildrenNodes.length; index++) {
//     const element = allChildrenNodes[index];
//     element.classList.remove("hidden");
// }

/*8.Develop a code that selects all elements with the class "menu-item" and inserts a new <span> element with the text "New" before each of them.*/

// let allElements = document.getElementsByClassName("menu-item");
// for (let index = 0; index < allElements.length; index++) {
//     let element = allElements[index];
//     let parentNode = element.parentNode;
//     let span = document.createElement("span");
//     span.textContent = "New";
//     parentNode.insertBefore(span, element);
    
// }









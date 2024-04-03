// JAVASCRIPT OBJECTS.
// (object creation, accessing properties in an object, object methods, object constructor functions, and the use of Object.keys and Object.values)
/* 1.Create an object literal named
person with properties
 name, age, and gender,  
and assign appropriate values to them. */

// const person = {
//     name:"John Harmon",
//     age:42,
//     gender:"Male"
// }

// console.log(person)

/*2.Define an object called 
car using the new keyword with 
properties make, model, and year, 
and assign values to them.*/

// const car = new Object({
//     make: "Honda",
//     model: "Jazz",
//     year: 2016
// });

// console.log(car)

/*3.Add a method named greet to the person object that returns a greeting message  
  including the person's name.*/

// const person = {
//     name:"John Harmon",
//     age:42,
//     gender:"Male",
//     greet: function(){
//         return `Welcome ${this.name} !`
//     }
// }

// console.log(person.greet())

/*4.Create a constructor function Book
that takes parameters title, author, and 
pages, and assigns them to properties
of the book object created with new.*/


// function Book(title,author,pages){
//     this.title = title,
//     this.author = author,
//     this.pages = pages
// }

// const book1 = new Book("Dreams from my father","Barrack Obama",464)
// console.log(book1)

/*5.Add a method named calculateArea to the car object that calculates the area of  
 the car based on its length and width.*/

//  const car = new Object({
//     make: "Honda",
//     model: "Jazz",
//     year: 2016,
//     calculateArea: function (l,w){
//         return l * w;
//     }
// });

// console.log(car.calculateArea(5,1.5))

/*6.Define an object called student with properties name, age, and grade, and 
assign appropriate values to them using object literal notation.*/

// const student = {
//     name: "Peter Waf",
//     age: 18,
//     grade: "A-"
// };
// console.log(student)


/*7.Implement a constructor function Rectangle that takes parameters width and  
height and creates a rectangle object with these properties.*/

// function Rectangle(width,height){
//     this.width = width;
//     this.height = height;
// }

// const rect1 = new Rectangle(34,8);
// console.log(rect1.height);

/*8.Write a method named getFullName for the student object that returns the full  
 name by combining the firstName and lastName properties.*/

// const student = {
//     firstName: "Peter",
//     lastName:"Waf",
//     age: 18,
//     grade: "A-",
//     getFullName:function(){
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(student.getFullName())

/*9.Use Object.keys to retrieve an array of keys from
the person object and display  
them in the console.*/

// const person = {
//     name:"John Harmon",
//     age:42,
//     gender:"Male"
// }

// console.log(Object.keys(person))


/*10.Use Object.values to retrieve
an array of values from the car
object and display them in the console.*/

//  const car = new Object({
//     make: "Honda",
//     model: "Jazz",
//     year: 2016,
//     calculateArea: function (l,w){
//         return l * w;
//     }
// });

// console.log(Object.values(car))
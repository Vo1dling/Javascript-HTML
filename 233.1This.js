// Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)
// console.log(this);

//this will point to the window object because window is the only thing this keyword can refer to

// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// const myObj = {
//  name: "Timmy",
//  greet: () => {
//  console.log(`Hello ${this.name}`);
//  },
// };
// myObj.greet();

//Hello Timmy will be logged to the console because this.name = timmy

// Question 3:
// In your own words what will this point to and why?
// const myFuncDec = function () {
//  console.log(this);
// };

// Question 4:
// In your own words what will this point to and why?
// const myFuncArrow = () => {
//  console.log(this);
// };
// myFuncArrow();

//again this will point to the window object because window is the only thing this keyword can refer to

// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// document.querySelector(".element").addEventListener(() => {
//  console.log(this);
// });

//a) this will point to the window object because .element isn't an object
//b) addEventListener is missing the event its listening for

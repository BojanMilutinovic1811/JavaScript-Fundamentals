//= ===========================================================
// QUESTION 1  How would you check if a number is an integer?
//= ===========================================================

// function isInteger (someNum) {
//   return someNum % 1 === 0
// }
// console.log(isInteger(3))

//= ===========================================================
// QUESTION 2 What will the following code output?
//= ===========================================================

// (function () {
//   var a = (b = 5)
// })()
// console.log(b) ====> 5 because b is global without var

//= ===============================================================
// QUESTION 3 Write a function that would allow you to do this multiply(5)(6)
//= ===============================================================

// const multiply = numOne => numTwo => numOne * numTwo
// console.log(multiply(3)(4))

// function multiply (numOne) {
//   return function (numTwo) {
//     return numOne * numTwo
//   }
// }
// const multiplyByThree = multiply(3)
// console.log(multiplyByThree(5))

//= ===============================================================
// QUESTION 4 When would you use the bind function?
//= ===============================================================

// when you want to pass a specific object to a function that uses this keyword

// const person = { name: 'Bojan', lastName: 'Milutinovic' }

// function greeting () {
//   console.log(`hello ${this.name} ${this.lastName}`)
// }

// greeting.bind(person)()

//= ===============================================================
// QUESTION 5 What does 'use strict' do?
//= ===============================================================

// it prevents from some errors like declaring a variable without var

//= ===============================================================
// QUESTION 6 What is the difference between == and ===?
//= ===============================================================

// == compares by value while === compares by value and type

//= ===============================================================
// QUESTION 7 How would you add your own method to the array so that
// the following code works?
// var arr = [1, 2, 3, 4, 5];
// var avg = arr.average();
// console.log(avg);
//= ===============================================================

// var arr = [1, 2, 3, 4, 5, 1000]
// Array.prototype.average = function () {
//   const sum = this.reduce((prev, cur) => prev + cur)
//   const average = sum / this.length
//   return average
// }
// var avg = arr.average().toFixed(2)
// console.log(avg)

//= ===========================================================
// QUESTION 8  Explain what a callback function is and provide
// a simple example?
//= ===========================================================

// Callback is a function which is passed as an argument to another
// function and executed after some other operation is completed

// const posts = [{ title: 'post1' }, { title: 'post2' }]

// function addPost (posts, callback) {
//   setTimeout(() => {
//     posts.push({ title: 'post3' })
//     callback(posts)
//   }, 2000)
// }

// function printPosts (posts) {
//   setTimeout(() => {
//     console.log(posts)
//   }, 1000)
// }

// addPost(posts, printPosts)

//= ===========================================================
// QUESTION 9  What will the following code output?
// 0.001 + 0.002 === 0.003
//= ===========================================================

// console.log(0.1 + 0.2 === 0.3) ===> false

//= ===========================================================
// QUESTION 10  How would you create a private variable in js?
//= ===========================================================

// function privateVar () {
//   let someValue = 'some value'
//   return function () {
//     return someValue
//   }
// }
// let privateValue = privateVar()
// console.log(privateValue())

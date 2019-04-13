// function formatDate(userDate) {
//   // format from M/D/YYYY to YYYYMMDD
//   const dateArray = userDate.split("/").map(number => {
//     if (number.length < 2) {
//       return 0 + number;
//     } else {
//       return number;
//     }
//   });
//   const newDateFormat = `${dateArray[2] + dateArray[0] + dateArray[1]}`;
//   return newDateFormat;
// }

// console.log(formatDate("1/1/2014"));

// const someObj = {};
// someObj.name = "Bojan";
// someObj.lastName = "Milutinovic";

// function removeProperty(obj, prop) {
//   const properties = Object.keys(obj);
//   let propertyDeleted = false;
//   properties.forEach(property => {
//     if (property === prop) {
//       delete obj.property;
//       propertyDeleted = true;
//     }
//   });

//   return propertyDeleted;
// }

// console.log(removeProperty(someObj, "Bojan"));

// (function() {
//   var a = (b = 3);
// })();

// console.log("a defined? " + (typeof a !== "undefined"));
// console.log("b defined? " + (typeof b !== "undefined"));

// var myObject = {
//   foo: "bar",
//   func: function() {
//     var self = this;
//     console.log("outer func:  this.foo = " + this.foo);
//     console.log("outer func:  self.foo = " + self.foo);
//     (function() {
//       console.log("inner func:  this.foo = " + this.foo);
//       console.log("inner func:  self.foo = " + self.foo);
//     })();
//   }
// };
// myObject.func();

// function isPalindrome(someString) {
//   reversedString = someString
//     .toLowerCase()
//     .split("")
//     .reverse()
//     .join("");
//   return reversedString === someString.toLowerCase();
// }

// console.log(isPalindrome("Anas"));

// var length = 10;
// function fn() {
//   console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();
//     arguments[0]();
//   }
// };

// obj.method(fn, 1);

// console.log(typeof typeof 1);

// var foo = function foo() {
//   console.log(foo === foo);
// };

// function bar() {
//   return foo;
//   foo = 10;
//   function foo() {}
//   var foo = "11";
// }
// alert(typeof bar());
// console.log([] + [] + "foo".split(""));

// console.log("foo".split("") + []);

// console.log([1, 2, 3] + [1, 2, 3]);
// var bar = 1,
//   foo = {};

// foo: {
//   bar: 2;
//   baz: ++bar;
// }
// console.log(foo.bar);

function bubbleSort(arr) {
  var len = arr.length;
  for (var i = len - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}
bubbleSort([7, 5, 2, 4, 3, 9]); //[2, 3, 4, 5, 7, 9]
bubbleSort([9, 7, 5, 4, 3, 1]); //[1, 3, 4, 5, 7, 9]
bubbleSort([1, 2, 3, 4, 5, 6]); //[1, 2, 3, 4, 5, 6]

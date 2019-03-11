// Write a function that takes a number and returns array of its digits.

function arrayOfDigits (someNum) {
  let digits = someNum + ''
  const digitsArray = digits.split('')
  console.log(digitsArray)
}

arrayOfDigits(32342)

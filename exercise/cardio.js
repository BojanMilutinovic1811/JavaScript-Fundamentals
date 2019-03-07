// reverse string

// function reverseString (string) {
//   return string
//     .split('')
//     .reverse()
//     .join('')
// }

// function reverseString (string) {
//   let newString = ''

//   for (let i = string.length - 1; i >= 0; i--) {
//     newString += string[i]
//   }
//   return newString
// }

// function reverseString (string) {
//   let newString = ''
//   for (let character of string) {
//     newString = character + newString
//   }
//   return newString
// }

// function reverseString (string) {
//   return string.split('').reduce((newString, character) => character + newString)
// }

// console.log(reverseString('hello'))

function isPalindrome (string) {
  const reversed = string
    .split('')
    .reverse()
    .join('')
  if (string === reversed) {
    return true
  } else {
    return false
  }
}

console.log(isPalindrome('bojan'))

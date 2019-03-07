// Challenge
// Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.
// Sample Test Cases
// Input:"+d+=3=+s+"
// Output:"true"
// Input:"f++d+"
// Output:"false"

function simpleSymbol (symbolString) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  const lettersArray = letters.split('')
  let answers = []

  for (let i = 0; i < symbolString.length; i++) {
    // console.log(symbolString[i])
    // console.log('minus one', symbolString[i - 1] === symbolString[i + 1])
    if (lettersArray.indexOf(symbolString[i]) !== -1) {
      if (symbolString[i - 1] === symbolString[i + 1]) {
        answers.push('correct')
      } else {
        answers.push('incorrect')
      }
    }
  }

  if (answers.includes('incorrect')) {
    console.log(false)
  } else {
    console.log(true)
  }

  //   console.log(answer)
}

simpleSymbol('f++d+')

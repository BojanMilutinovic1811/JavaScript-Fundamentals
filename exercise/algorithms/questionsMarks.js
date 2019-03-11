// Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.
// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
// Sample Test Cases
// Input:"aa6?9"
// Output:"false"
// Input:"acc?7??sss?3rr1??????5"
// Output:"true"

function questionsMarks (someString) {
  const validCharacters = '1,2,3,4,5,6,7,8,9,0,?'
  const validArray = validCharacters.split('')
  const newString = someString
    .split('')
    .filter(character => validArray.indexOf(character) !== -1)
  for (let i = 0; i < newString.length; i++) {
    let counter = 0
    if (newString[i] === '?') {
      counter++
      let newIndex = i + 1
      for (let j = newIndex; j < newIndex + 3; j++) {
        if (newString[j] === '?') {
          counter++
        }
        console.log(counter)
        console.log(newString[i])
        if (counter === 3 && newString[i - 1] + newString[j + 1] < 10) {
          return true
        }
      }
    } else {
      return false
    }
  }
}

console.log(questionsMarks('acc?7??sss?3rr1??????5'))

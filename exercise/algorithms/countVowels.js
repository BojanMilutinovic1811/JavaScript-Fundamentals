// Write a function to count vowels in a provided string.

function countVowels (someString) {
  const vowels = 'aeiou'
  const vowelsString = vowels.split('')
  let vowelsCounter = 0
  for (let i = 0; i < someString.length; i++) {
    if (vowelsString.indexOf(someString[i].toLowerCase()) !== -1) {
      vowelsCounter++
    }
  }
  console.log(vowelsCounter)
}

countVowels('Hello my name is bojan')

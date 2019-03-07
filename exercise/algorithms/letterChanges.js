// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
// Input:"hello*3"
// Output:"Ifmmp*3"

// Input:"fun times!"
// Output:"gvO Ujnft!"

function letterChanges (someSentence) {
  validLetters = 'abcdefghijklmnopqrstuvwxyz'
  vowels = ['a', 'e', 'i', 'o', 'u']
  validLettersArray = validLetters.split('')
  allWords = someSentence.split(' ')
  validWords = []

  allWords.forEach(word => {
    let validWord = ''
    for (let i = 0; i < word.length; i++) {
      if (validLettersArray.indexOf(word[i].toLowerCase()) !== -1) {
        let character =
          validLettersArray[
            validLettersArray.indexOf(word[i].toLowerCase()) + 1
          ]

        if (!character) {
          character = 'a'
        }

        if (vowels.indexOf(character) !== -1) {
          validWord += character.toUpperCase()
        } else {
          validWord += character
        }
      } else {
        validWord += word[i]
      }
    }
    validWords.push(validWord)
  })

  console.log(validWords.join(' '))
}

letterChanges('fun times!')

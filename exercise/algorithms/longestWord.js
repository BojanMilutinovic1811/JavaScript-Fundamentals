// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

// first solution

function LongestWord (sen) {
  const allWords = sen.split(' ')
  const validLetters = 'abcdefghijklmnopqrtsuvwxyz'
  const validWords = []

  allWords.forEach(word => {
    let validWord = ''
    for (let i = 0; i < word.length; i++) {
      if (validLetters.split('').indexOf(word[i].toLowerCase()) !== -1) {
        validWord += word[i]
      }
    }
    validWords.push(validWord)
  })

  let longestWord = validWords[0]

  for (let i = 1; i < validWords.length; i++) {
    if (longestWord.length < validWords[i].length) {
      longestWord = validWords[i]
    }
  }

  // code goes here
  console.log(validWords)
  console.log(longestWord)
}

LongestWord('There she goes and it is23234243234234243 unbeliavable')

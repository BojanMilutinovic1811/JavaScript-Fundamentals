function reverseWords(someSentence) {
const words = someSentence.split(' ');

const reversedWords = words.map(word => {
    
    let newWord = [];
    for(let i = 0; i < word.length; i++) {
        newWord.unshift(word[i].toLowerCase())
    }
    
    return newWord.join('');
})

return reversedWords.join(' ')
}


console.log(reverseWords('Bojan Milutinovic'))
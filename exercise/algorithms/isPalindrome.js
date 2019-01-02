function isPalindrome(string) {

    let stringLowercase = string.toLowerCase();
    let stringDecoupled = stringLowercase.split('');
    let validatedLetters = [];
    let validLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')

    stringDecoupled.forEach(letter => {
        if(validLetters.indexOf(letter) > -1) {
            validatedLetters.push(letter)
        }
    })

    console.log(validatedLetters.join('') === validatedLetters.reverse().join(''))



}

isPalindrome('akaka')
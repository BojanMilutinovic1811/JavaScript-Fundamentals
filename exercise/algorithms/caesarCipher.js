function caesarCipher(str, num) {

    let newNum = num%26; 
    let strTolower = str.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrtsuvwxyz';
    let newString = []
    strTolower.split('').forEach(character => {
        let newCharacter;
        let currentPosition = alphabet.indexOf(character);
        if(currentPosition > -1) {
            let newPosition = currentPosition + newNum; 
            if(newPosition > 25) {
                newPosition = newPosition - 26;
            }
            if(newPosition < 0) {
                newPosition = 26 + newPosition
            }
            newCharacter = alphabet[newPosition]
            newString.push(newCharacter)
        } else {
            newString.push(character)
        }
    })
return newString.join('');

}

console.log(caesarCipher('bojan', 1));

function harmlessRansomeNote(textOne, textTwo) {
    let arrayOne = textOne.split(' ');
    let arrayTwo = textTwo.split(' ');
    let wordCounter = {};

    arrayOne.forEach(word => {
       if(!wordCounter[word]) {
           wordCounter[word] = 1
       } else {
           wordCounter[word]++
       }
    })

    let noteIsPossible = true;

    arrayTwo.forEach(word => {
        if(wordCounter[word]) {
            wordCounter[word]--
            if(wordCounter[word] < 0) {
                noteIsPossible = false
            }
        } else {
            noteIsPossible = false;
        }
    })

    console.log(noteIsPossible);
}


textOne = 'Hello there this is text one one more more time';
textTwo = 'Hello there this is text one more more more';

harmlessRansomeNote(textOne, textTwo);
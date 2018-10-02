class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait,10);
        this.type();
        this.isDeleting = false;
    }
    
    type() {
         
        //current index of word 
        const current = this.wordIndex % this.words.length; 
        
        //get full text of current word
        const fullTxt = this.words[current];

        // check if deleting 
        if(this.isDeleting) {
            //if true remove a character
             
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            //if false add a character 
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        //insert into the element
        this.txtElement.innerHTML = ` <span class='txt'>${this.txt}</span>`

        //set initial typespeed
        let typeSpeed = 300; 

        if(this.isDeleting) {
            typeSpeed /= 2; 
        }

        //if word is complete
        if(!this.isDeleting && this.txt === fullTxt) {
            //make a pause at the end
            typeSpeed = this.wait;
            this.isDeleting = true; 
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false; 
            this.wordIndex++; 
            typeSpeed = 500; 
        }


        setTimeout(() => this.type(), typeSpeed);
    }
}

// init on DOM load
document.addEventListener('DOMContentLoaded', init);

//init app

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
}
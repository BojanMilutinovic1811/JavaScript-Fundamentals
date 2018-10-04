
const synth = speechSynthesis,
      textForm = document.querySelector('form'),
      rate = document.getElementById('rate'),
      rateValue = document.getElementById('rate-value'),
      pitch = document.getElementById('pitch'),
      pitchValue = document.getElementById('pitch-value'),
      textInput = document.getElementById('text-input'),
      voiceSelect = document.getElementById('voice-select');

      console.log(pitch, pitchValue)

let voices = [];

const getVoices = () => {
    voices = synth.getVoices();
     
    voices.forEach(voice => {
        // create an option element
        const option = document.createElement('option');
        option.textContent = voice.name + `(${voice.lang})`;
        // set option attributes
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        // attach options
        voiceSelect.appendChild(option);

    })

}

getVoices();
synth.onvoiceschanged = getVoices;

const speak = () => {
    if(synth.speaking) {
        console.log('Already speaking...');
    }
    // validation
    if(textInput.value !== '') {
        const speakTxt = new SpeechSynthesisUtterance(textInput.value);

        speakTxt.onend = e => {console.log('Done speaking...');};

        speakTxt.onerror = e =>{console.log('Something went wrong...');};

        const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

        //loop through voices 
        voices.forEach(voice =>{
            if(voice.name === selectedVoice) {
                speakTxt.voice = voice
            }
        });

        speakTxt.rate = rate.value;
        speakTxt.pitch = pitch.value;

        synth.speak(speakTxt);
    }
}

// add event listeners

textForm.addEventListener('submit', e => {
    e.preventDefault();
    speak();
    textInput.blur();
});


rate.addEventListener('change', ()=> rateValue.textContent = rate.value);
pitch.addEventListener('change', ()=> pitchValue.textContent = pitch.value);

voiceSelect.addEventListener('change', () => speak())
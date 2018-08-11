let time = 5,
    score = 0,
    isPlaying;

const currentWord = document.getElementById('current-word'),
    start = document.querySelector('.btn-success')
    matchingWord = document.getElementById('matching-word'),
    gameStatus = document.getElementById('game-status'),
    displaytime = document.getElementById('time'),
    scoreDisplay = document.getElementById('score'),
    seconds = document.getElementById('seconds'),
    words = [
        'hat',
        'river',
        'lucky',
        'statue',
        'generate',
        'stubborn',
        'cocktail',
        'runaway',
        'joke',
        'developer',
        'establishment',
        'hero',
        'javascript',
        'nutrition',
        'revolver',
        'echo',
        'siblings',
        'investigate',
        'horrendous',
        'symptom',
        'laughter',
        'magic',
        'master',
        'space',
        'definition'
    ];

    window.addEventListener('load', startGame)

    function startGame() {
          
        showWord(words);
        setInterval(countdown, 1000);
        matchingWord.addEventListener('input', startMatch);
        setInterval(checkStatus, 50);
    }

    function checkStatus() {
        if (!isPlaying && time === 0) {
            gameStatus.innerHTML = 'Game Over!!!';
            score = -1;
          }
    }

    function startMatch() {

        if(matchWord()) {
            isPlaying = true;
            time = 5
            score++;
            matchingWord.value = '';
            showWord(words);
        } 
        if (score === -1) {
            scoreDisplay.innerHTML = 0;
          } else {
            scoreDisplay.innerHTML = score;
          }
    }

    function matchWord(){
        if (matchingWord.value === currentWord.textContent) {
            gameStatus.textContent = 'Correct!!!';
            return true;
        }
        else {
            gameStatus.textContent = '';
            return false;
        }
    }

    function countdown() {
        if(time > 0) {
            time--;
        } else {

            isPlaying = false;
                    }
        displaytime.textContent = time;
    }

    function showWord(words) {
        randomWordNum = Math.floor(Math.random()*words.length)
        currentWord.textContent = words[randomWordNum];
    }
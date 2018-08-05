let min = 1,
    max = 10,
    attemptsLeft = 3,
    winningNum = getWinningNumb(min, max);

const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      inputNum = document.getElementById('guess'),
      btn = document.getElementById('submit-btn'),
      message = document.getElementById('message');

      minNum.textContent = min;
      maxNum.textContent = max;

      game.addEventListener('mousedown', function (e) {
        if(e.target.className === 'play-again'){
            window.location.reload();
        }
      })

btn.addEventListener('click', ()=>{
    let guess = parseInt(inputNum.value);
    
    if(isNaN(guess) || guess < min || guess > max) {
        showMessage(`Please enter a number between ${min} and ${max}`, 'red');
        
    } else if(guess === winningNum){
        showMessage(`${winningNum} is corret answer. You win!`, 'green')
        inputNum.disabled = true; 
        inputNum.style.borderColor = 'green';
        
        btn.value = 'Play Again';
        btn.className += 'play-again'
        
        
    } else {
        attemptsLeft -= 1
        showMessage(`That is not correct. You have ${attemptsLeft} more attempts.`, 'red');
        clearInput();
       
        if (attemptsLeft === 0) {
            inputNum.disabled = true;
            showMessage(`Game over, you don't have any more attempts.  The correct answer was ${winningNum}`, 'red');
            btn.value = 'Play Again';
            btn.className += 'play-again'
        }
    }

})

function clearInput() {
    inputNum.value = ''
}
function showMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
    
}
function getWinningNumb(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min);
     
}
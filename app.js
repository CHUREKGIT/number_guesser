/*
Game Rules:
- Player have to guess a number between a min and max
- Player gets a cartain amount of guesses
- Notify player of guesses reamining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min  = 1,
    max  =10,
    winningNum = getWinningNum(min, max),
    guessesLeft = 3;
//UI ELEMENTS
const UIgame = document.getElementById('game')
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

// Assign min and max
minNum.textContent = min;
maxNum.textContent = max;


//Play agian event listnenr
UIgame.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})
//Listen for guess
guessBtn.addEventListener('click', function(){

    let guess = parseInt(guessInput.value);

//Validate
if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, `red`);
}

//Check if it is winning number
if(guess === winningNum){

    //Disable input
    guessInput.disabled = true;
    //Change border green
    guessInput.style.borderColor = 'green';
    guessInput.style.borderWidth = '10px';
    //Know the won
    setMessage(`Super! You won!`)
    gameOver()

} else {

    //Wrong number
        guessesLeft -= 1;

    if(guessesLeft <= 0){
        //GAME OVER - lost

        //Disable input
        guessInput.disabled = true;
        //Change border green
        guessInput.style.borderColor = 'red';
        guessInput.style.borderWidth = '10px';
        //Know the won
        setMessage(`You lose :(. Number was ${winningNum}`, `red`)

        gameOver();


    }else {
        //Game continues - answer wrong

    //Change border green
        guessInput.style.borderColor = 'red';
        guessInput.style.borderWidth = '10px';

        //Set Message
        setMessage(`${guess} is wrong number. You have still ${guessesLeft} chances`, `red`)
    }
}

})

//Set message function
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

//GameOver Function

//Play Again
function gameOver(){
    guessBtn.value = 'Play Again'

    guessBtn.className += 'play-again' 
}

//Get Winning Num
function getWinningNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
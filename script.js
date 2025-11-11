let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let numGuess = 0;
let playGame = true;

if(playGame){
    submit.addEventListener('click' , function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if( isNaN(guess) ){
        alert('Invalid guess , Enter a proper integer number');
    }
    else if ( guess<1 ){
        alert('The number cannot be less than 1');
    }
    else if ( guess>100 ){
        alert('The number cannot be greater than 100');
    }
    else{
        numGuess++
        displayGuess(guess);

        if(guess === randomNumber){
            displayMessage(`🎉Congratulations! Your guess ${randomNumber} was correct`)
            endGame();
        }
        else if(numGuess === 10){
            displayMessage(`😔Game Over . The Random Number was ${randomNumber}`)
            endGame();
        }
        else{
            if(guess < randomNumber){
                displayMessage(`📈Try a Higher number.`);
            }
            else {
                displayMessage(`📉Try a Lower number`);
            }
        }
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message){
    lowOrHigh.innerHTML =  `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    //prevent multiple new game button
    if(!document.querySelector('#newGame')){
        p.classList.add('button');
        p.innerHTML = `<button id="newGame">Start New Game</button>`;
        startOver.appendChild(p);
    }
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')

    newGameButton.addEventListener('click' , function(){
        randomNumber = parseInt(Math.random()*100 + 1);
        numGuess = 0;
        guessSlot.innerHTML = ''
        remaining.innerHTML =  `${10 - numGuess}`
        lowOrHigh.innerHTML = '';

        userInput.removeAttribute('disabled');
        userInput.focus();
        startOver.removeChild(p);

        playGame = true;
    });
}
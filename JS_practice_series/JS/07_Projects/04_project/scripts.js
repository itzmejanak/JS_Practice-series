let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
let h = document.querySelector("#ChnageMe");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    if(endGame = true){
      h.innerHTML = "Refresh the page";
      // alert("Refresh the page")
    }else{
      h.innerHTML = "Out of scope";
      // alert('Out of scope');
    }
    h.innerHTML = "PLease enter a valid number";
    // alert('PLease enter a valid number'); 
  } else if (guess < 1) {
    h.innerHTML = "PLease enter a number more than 1";
    // alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    h.innerHTML = "PLease enter a  number less than 100";
    // alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} | `;
  numGuess++;
  remaining.innerHTML = `${12 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `
  <h2 id="newGame" style="
    cursor: pointer;
    border-radius: 10px;
    background: linear-gradient(to top, rgb(9, 39, 18), #0cb647);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 5px 0;
    transition: transform 0.2s, box-shadow 0.2s;
  ">Start new Game</h2>
`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
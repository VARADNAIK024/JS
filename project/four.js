let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];
let numguess = 1;

let Playgame = true; //when u make game u need to add this variable
if (Playgame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault(); // whenever u use form u have to use this fun()
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateguess(guess);
  });
}

function validateguess(guess) {
  // see no between values in 1to100 / or values empty
  if (isNaN(guess)) {
    alert('please Enter Valid Number');
  } else if (guess < 1) {
    alert('Number is Smaller than 1');
  } else if (guess > 100) {
    alert('Number is Greater than 100');
  } else {
    prevguess.push(guess); //push in array
    if (numguess === 10) {
      displayGuess(guess);
      displaymessage(`Game Over ,  Random number was${randomNumber}`);
      EndGame();
    } else {
      displayGuess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  //will dis[play message low value ,hight val,equal val]
  if (guess === randomNumber) {
    displaymessage('you gueess it right');
    EndGame();
  }
  if (guess < randomNumber) {
    displaymessage('number is Low');
  }
  if (guess > randomNumber) {
    displaymessage('number is too Hig h');
  }
}

function displayGuess(guess) {
  //clean value // and update guess value
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numguess++;
  remaining.innerHTML = `${10 - numguess}`;
}

function displaymessage(message) {
  lowOrHi.innerHTML = `${message}`;
}

function EndGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', ' ');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "NewGame"> new Game</h2>`;
  startOver.appendChild(p);
  Playgame = false; // ussed to stop the game
  NewGame();
}

function NewGame() {
  const newgGameButton = document.querySelector('#newgame');
  newgGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numguess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    Playgame = true;
  });
}

//chai aur code code ---->

// let randomNumber = parseInt(Math.random() * 100 + 1);

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//   submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert('PLease enter a valid number');
//   } else if (guess < 1) {
//     alert('PLease enter a number more than 1');
//   } else if (guess > 100) {
//     alert('PLease enter a  number less than 100');
//   } else {
//     prevGuess.push(guess);
//     if (numGuess === 11) {
//       displayGuess(guess);
//       displayMessage(`Game Over. Random number was ${randomNumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNumber) {
//     displayMessage(`You guessed it right`);
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMessage(`Number is TOOO low`);
//   } else if (guess > randomNumber) {
//     displayMessage(`Number is TOOO High`);
//   }
// }

// function displayGuess(guess) {
//   userInput.value = '';
//   guessSlot.innerHTML += `${guess}, `;
//   numGuess++;
//   remaining.innerHTML = `${11 - numGuess} `;
// }

// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');
//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   startOver.appendChild(p);
//   playGame = false;
//   newGame();
// }

// function newGame() {
//   const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function (e) {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     prevGuess = [];
//     numGuess = 1;
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = `${11 - numGuess} `;
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);

//     playGame = true;
//   });
// }


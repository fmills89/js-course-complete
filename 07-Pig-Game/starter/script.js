'use strict';

// adding El represents a DOM element
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn-hold');

score0El.textContent = 0;
score1El.textContent = 0;
// hiding dice w/ classlist css hidden
diceEl.classList.add('hidden');

let currentScore = 0;

//rolling dice functionally
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll

  let diceRoll = Math.trunc(Math.random() * 6) + 1;

  console.log(diceRoll);

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceRoll}.png`;

  // 3. Check for rolled 1: If true, switch to next player
  if (diceRoll !== 1) {
    // Add dice to current score
    currentScore += diceRoll;
    current0El.textContent = currentScore;
  } else {
  }
});

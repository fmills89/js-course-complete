'use strict';

// generating random num between 1 - 20
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = number;

console.log(number);

// eventListener for 'click' on check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //error handling - displaying too high or too low on guesses
  if (!guess) {
    alert('Enter a real number.');
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🗣 Correct Number!';
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost! 💀';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost! 💀';
      document.querySelector('.score').textContent = 0;
    }
  }
});

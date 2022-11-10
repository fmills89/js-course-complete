'use strict';

const number = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = number;

console.log(number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //error handling
  if (!guess) {
    alert('Enter a real number.');
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🗣 Correct Number!';
  } else if (guess > number) {
    document.querySelector('.message').textContent = '📈 Too high!';
  } else if (guess < number) {
    document.querySelector('.message').textContent = '📉 Too low!';
  }
});

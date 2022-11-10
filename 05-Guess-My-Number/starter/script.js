'use strict';

document.querySelector('.message').textContent = '🤮 Correct';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //error handling
  if (!guess) {
    alert('Enter a real number.');
  }
});

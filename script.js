let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

document.querySelector('.wins').innerHTML = `Wins: ${score.wins}`;
document.querySelector('.losses').innerHTML = `Losses: ${score.losses}`;
document.querySelector('.ties').innerHTML = `Ties: ${score.ties}`;

function playGame (userMove) {
  const compMove = pickCompMove();
  const result = getResult(userMove, compMove);
  updateScore(result);
  console.log(`You: ${userMove}. Computer: ${compMove}. ${result}`);
  document.querySelector('.gameResult').innerHTML = `You picked: ${userMove}. Computer picked: ${compMove}. ${result}`;
}

function updateScore(result) {
  if (result === 'You win.') {
    score.wins++;
  } else if (result === 'You lose.') {
    score.losses++;
  } else if (result === 'Tie.') {
    score.ties++;
  }
  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('.wins').innerHTML = `Wins: ${score.wins}`;
  document.querySelector('.losses').innerHTML = `Losses: ${score.losses}`;
  document.querySelector('.ties').innerHTML = `Ties: ${score.ties}`;
}

function getResult (userMove, compMove) {
  if (userMove === 'Rock') {
    if(compMove === 'Rock') {
      return 'Tie.';
    } else if(compMove === 'Paper') {
      return 'You lose.';
    } else if(compMove === 'Scissor') {
      return 'You win.';
    }
  }
  else if (userMove === 'Paper') {
    if(compMove === 'Rock') {
      return 'You win.';
    } else if(compMove === 'Paper') {
      return 'Tie.';
    } else if(compMove === 'Scissor') {
      return 'You lose.';
    }
  }
  else if (userMove === 'Scissor'){
    if(compMove === 'Rock') {
      return 'You lose.';
    } else if(compMove === 'Paper') {
      return 'You win.';
    } else if(compMove === 'Scissor') {
      return 'Tie.';
    }
  }
}

function pickCompMove() {
  const move = Math.random();

  if(0 < move && move <= 0.3) {
    return 'Rock';
  } else if (0.3 < move && move <= 0.6) {
    return 'Paper';
  } else {
    return 'Scissor';
  }
}

function reset () {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  
  localStorage.removeItem('score');
  console.log('The game was reset');
  document.querySelector('.gameResult').innerHTML = 'The game was reset';
  document.querySelector('.wins').innerHTML = `Wins: ${score.wins}`;
  document.querySelector('.losses').innerHTML = `Losses: ${score.losses}`;
  document.querySelector('.ties').innerHTML = `Ties: ${score.ties}`;
}
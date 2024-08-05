let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};

updateScoreElement();

function playGame(playerMove) {
  let computerMove = pickComputerMove();  
  let result ='';

  if(playerMove === 'rock') {
    if(computerMove === 'rock'){
    result ='Tie.';
    } else if (computerMove === 'paper'){
      result ='You lose.';
    } else if (computerMove === 'scissors'){
      result = 'You win.';
    }
  } 

  if(playerMove === 'paper') {
    if(computerMove === 'rock'){
      result ='You win.';
    } else if (computerMove === 'paper'){
      result ='Tie.';
    } else if (computerMove === 'scissors') {
      result ='You lose.';
    }
  } 

  if(playerMove === 'scissors') {
    if (computerMove === 'rock'){
      result ='You lose.';
    } else if (computerMove === 'paper'){
      result ='You win.';
    } else if (computerMove === 'scissors'){
      result ='Tie.';
    }
  } 

  if (result === 'You win.') {
    score.wins++;
  } else if (result === 'You lose.') {
    score.loses++;
  } else if (result === 'Tie.'){
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateResultElement(result)
  updateMovesElement(playerMove, computerMove);
  updateScoreElement();

}

function updateResultElement(result) {
  document.querySelector('.js-result')
    .innerHTML = result;
}

function updateMovesElement(playerMove, computerMove) {
  document.querySelector('.js-moves')
  .innerHTML = `You
  <img class="move-icon" src="images/${playerMove}-emoji.png">
  <img class="move-icon" src="images/${computerMove}-emoji.png">
  Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}


function pickComputerMove() {
  const randomNumber = Math.random();
  let ComputerMove ='';

  if(randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'scissors';
  }
  return computerMove;
}

function resetScore(score) {
  for (const i in score)
  score[i] = 0;

  localStorage.removeItem('score');
  updateScoreElement();
}
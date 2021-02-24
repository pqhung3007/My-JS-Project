'use strict'
//Selecting elements 
const score0 = document.querySelector('#score-0');
const score1 = document.querySelector('#score-1');
const player0 = document.querySelector('.player-0');
const player1 = document.querySelector('.player-1');
const current0 = document.getElementById('current-0');
const current1 = document.getElementById('current-1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

//Starting condition
let scores, currentScore, activePlayer, playing;
const init = () => {
    scores = [0, 0];
    //these values will change after a each roll 
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    diceElement.classList.add('hidden')
    player0.classList.remove('player-winner');
    player1.classList.remove('player-winner');
    player0.classList.add('player-active');
    player1.classList.remove('player-active');


};
init();

const switchPlayer = () => {
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    //move white background to the other player
    player0.classList.toggle('player-active');
    player1.classList.toggle('player-active');

}
//Rolling dice Functionality
btnRoll.addEventListener('click', () => {
    if (playing) {
        //1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        //2. Display dice
        diceElement.classList.remove('hidden');
        diceElement.src = `dice_${dice}.png`;

        //3. Check for rolled 1
        if (dice !== 1) {
            //add dice to current score
            currentScore += dice;
            //wrap both current 0 and current 1 into 1 manipulation
            document.getElementById(`current-${activePlayer}`).textContent = currentScore;
        }
        //switch to next player
        else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', () => {
    if (playing) {
        //1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        //which means scores[1] = scores[1] + currentScore
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

        //2. Check if player's score is >= 30
        if (scores[activePlayer] >= 30) {
            //finish the game
            playing = false;
            diceElement.classList.add('hidden');
            document.querySelector(`.player-${activePlayer}`).classList.add('player-winner');
            document.querySelector(`.player-${activePlayer}`).classList.remove('player-active');
        }
        else {
            switchPlayer()
        }
        //switch to the next player
    }
})

btnNew.addEventListener('click', init);

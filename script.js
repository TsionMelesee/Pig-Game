'use strict';
const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')
const player = document.querySelectorAll('.player')
const hold = document.querySelector('.btn--hold')
const roll = document.querySelector('.btn--roll')
const score2 = document.querySelector('#score--1') 
const score1 = document.querySelector('#score--0')
let score = document.querySelectorAll('.score')
const dice = document.querySelector('.dice')
const label = document.querySelectorAll('.current-score')
const newGame = document.querySelector('.btn--new')
const current2 = document.querySelector('#current--1')
const current1 = document.querySelector('#current--0')

const img= ['dice-1.png', 'dice-2.png', 'dice-3.png','dice-4.png','dice-5.png','dice-6.png']
let activePlayer, current,  scores, playing
function init() {
    current = 0;
    activePlayer = 0;
    playing = true;
    scores = [0, 0];

    // Reset current scores
    document.querySelector(`#current--0`).textContent = current;
    document.querySelector(`#current--1`).textContent = current;

    // Reset overall scores
    document.querySelector(`#score--0`).textContent = 0;
    document.querySelector(`#score--1`).textContent = 0;

    // Remove winner classes
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');

    // Set active player to player 0
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
}
init()



roll.addEventListener('click', function(){
    if(playing){
    let num = Math.trunc(Math.random()*6)+1
    dice.classList.remove('hidden')
    dice.src = img[num-1]
            if(num!=1){

                current += num
                document.querySelector(`#current--${activePlayer}`).textContent = current
}
else {
    

   swichplayers()
   
}}}

)
hold.addEventListener('click', function(){
    if(playing){
    scores[activePlayer] += current
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]
    if(scores[activePlayer] >=100){
        playing = false
        dice.classList.add('hidden')
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    }
    else{
        swichplayers()
        
        
        
        
    }}
    
})
function swichplayers(){
    document.querySelector(`#current--${activePlayer}`).textContent = 0
    activePlayer = activePlayer === 0?  1 : 0
    current = 0
    player1.classList.toggle('player--active')
    player2.classList.toggle('player--active')

}

newGame.addEventListener('click', init)




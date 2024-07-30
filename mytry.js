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
let xoPlayer1 = 0;
let xoPlayer2 = 0;
score2.textContent = 0
score1.textContent = 0
const img= ['dice-1.png', 'dice-2.png', 'dice-3.png','dice-4.png','dice-5.png','dice-6.png']
hold.addEventListener('click', holdroll
);


function holdroll(){
    dice.classList.add('hidden')
    if(player1.classList.contains('player--active')){
        player1.classList.remove('player--active')
        player2.classList.add('player--active')
    }
    else if(player2.classList.contains('player--active')){
        player2.classList.remove('player--active')
    player1.classList.add('player--active')}

}
roll.addEventListener('click', function(){
    for(let i = 0; i<player.length; i++){
        if(player[i].classList.contains('player--active')){
            let  num = Math.trunc(Math.random()*6)+1
            if (i === 0) {
                xoPlayer1 += num;
                label[i].textContent = num;
                score[i].textContent = xoPlayer1;
            } else if (i === 1) {
                xoPlayer2 += num;
                label[i].textContent = num;
                score[i].textContent = xoPlayer2;
            }
       
        if(i = 1 && xoPlayer2 >= 100){
            alert(`Player  2 Won 🎉!!`)

        }
        else if(i = 0 && xoPlayer1 >= 100){
            alert(`Player  1 Won 🎉!!`)

        }
        else if(num == 1){
          
            holdroll()
            
            label[i].textContent = 0;
            score[i].textContent = 0
        

        } 
    
    }

    }
})



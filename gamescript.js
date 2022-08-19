
let playing = true;
//Selecting Elements :
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnROll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let value;
let currentScore;
let activePlayer;
let scores = [];

btnROll.addEventListener("click",function(){
    if(playing){
    value = Math.floor(Math.random()*6+1);
    dice.classList.remove("hidden");
    image(value);
    if(value!==1){
        currentScore+=value;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;

    }else{
        activePlayerChanger();
    }        
  }
});

function activePlayerChanger(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
        currentScore = 0;
        activePlayer = activePlayer=== 0? 1 : 0;
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
}

function image(value){
    var s = "dice-"+value+".png";
    document.querySelectorAll("img")[0].setAttribute("src",s);
}

//Hold button functionality
btnHold.addEventListener("click",function(){
    if(playing){
    //Add current score to active player score 
    scores[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    //Another Method
    // scores[activePlayer]+=currentScore;
    // if(activePlayer===1){
    //     score1El.textContent=scores[1];
    // }else{
    //     score0El.textContent=scores[0];
    // }


    //check score is < 100 or not
    if(scores[activePlayer]>=100){
        playing = false;
        dice.classList.add("hidden");

        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
    }else{
    activePlayerChanger();
    }

  } 
});

function initial(){
  scores = [0,0];
dice.classList.add("hidden");
 playing = true;
 value;
  currentScore=0;
  activePlayer=0;

    score0El.textContent = 0;
    score1El.textContent = 0;
  
    current0El.textContent = 0;
    current1El.textContent = 0; 
  
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
  
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");
  
}
initial();

btnNew.addEventListener("click",function(){
   initial();
});






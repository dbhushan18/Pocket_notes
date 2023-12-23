// Rules
const rule_btn = document.querySelector(".btn-rule");
const rules = document.querySelector("#rule");
const cross = document.querySelector('.close-btn');

rule_btn.addEventListener('click', () => {
    console.log('clicked');
    rules.classList.remove('hide');
    cross.classList.remove('hide');
});

cross.addEventListener('click', () => {
    console.log('clicked');
    rules.classList.add('hide');
    cross.classList.add('hide');
});

//Game 
const choices = ["rock", "paper", "scissor"];

function pcpick() {
  return choices[Math.floor(Math.random() * choices.length)];
}

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");

const nextbtn = document.querySelector('.next')

const playagain = document.querySelector(".play-again");

function win(){
    document.querySelector('#text1').innerHTML = "YOU WIN";
    document.querySelector('#text2').innerHTML = "AGAINST PC";
    nextbtn.classList.remove('hide');
    rule_btn.classList.add('changepos');
    playagain.innerHTML = "Play Again";
  }

function lose(){
  document.querySelector('#text1').innerHTML = "YOU LOST";
  document.querySelector('#text2').innerHTML = "AGAINST PC";
  playagain.innerHTML = "Play Again";
}

function tie(){
  document.querySelector('#text1').innerHTML = "TIE UP";
  document.querySelector('#text2').innerHTML = " ";
  playagain.innerHTML = 'REPLAY';
}

const rockuser = document.querySelector("#userwin1");
const scissoruser = document.querySelector("#userwin2");
const paperuser = document.querySelector("#userwin3");
const rockpc = document.querySelector("#pcwin1");
const scissorpc = document.querySelector("#pcwin2");
const paperpc = document.querySelector("#pcwin3");

// scores text change functions
let urScore = 0;
function newuserscore(user) {
  document.querySelector(".score_your").innerHTML = user;
}
let pcScore = 0;
function newpcscore(pc) {
  document.querySelector(".score_comp").innerHTML = pc;
}

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const print_text = document.querySelector('.print-result');
const text1 = document.querySelector('#text1');
const text2 =document.querySelector('#text2');
const game = document.querySelector('.game');
const urchoice = document.querySelector('#your-choice');
const pcchoice = document.querySelector('#pc-choice');

// play again changes

playagain.addEventListener("click", () => {
  playagain.classList.add('hide');
  nextbtn.classList.add('hide');
  print_text.classList.add('hide');
  game.classList.remove('hide');
  urchoice.classList.add('hide');
  pcchoice.classList.add('hide');

  rockuser.classList.remove("gradient");
  rockuser.classList.add('hide');

  scissoruser.classList.remove("gradient");
  scissoruser.classList.add('hide');

  paperuser.classList.remove("gradient");
  paperuser.classList.add('hide');

  rockpc.classList.remove("gradient");
  rockpc.classList.add('hide');

  scissorpc.classList.remove("gradient");
  scissorpc.classList.add('hide');

  paperpc.classList.remove("gradient");
  paperpc.classList.add('hide');
})

//after click
function clicked(){
  print_text.classList.remove('hide');
  text2.classList.remove('hide');
  left.classList.remove("hide");
  right.classList.remove("hide");
  playagain.classList.remove("hide");
  game.classList.add("hide");
  urchoice.classList.remove('hide');
  pcchoice.classList.remove('hide');
}

rock.addEventListener('click',()=>{
  computer = pcpick();
  rockuser.classList.remove("hide");
  clicked();
  switch(computer){
    case "scissor": {
      scissorpc.classList.remove('hide');
      rockuser.classList.add('gradient');
      win();
      urScore++;
      newuserscore(urScore);
      break;
    }
    case "paper": {
      paperpc.classList.remove('hide');
      paperpc.classList.add('gradient');
      lose();
      pcScore++;
      newpcscore(pcScore);
      break;
    }
    case "rock": {
      rockpc.classList.remove('hide');
      tie();
      break;
    }
  }
})

paper.addEventListener('click',()=>{
  computer = pcpick();
  paperuser.classList.remove("hide");
  clicked();
  switch(computer){
    case "rock": {
      rockpc.classList.remove('hide');
      paperuser.classList.add('gradient');
      win();
      urScore++;
      newuserscore(urScore);
      break;
    }
    case "scissor": {
      scissorpc.classList.remove('hide');
      scissorpc.classList.add('gradient');
      lose();
      pcScore++;
      newpcscore(pcScore);
      break;
    }
    case "paper": {
      paperpc.classList.remove('hide');
      tie();
      break;
    }
  }
})

scissor.addEventListener('click',()=>{
  computer = pcpick();
  scissoruser.classList.remove("hide");
  clicked();
  switch(computer){
    case "paper": {
      scissorpc.classList.remove('hide');
      scissoruser.classList.add('gradient');
      win();
      urScore++;
      newuserscore(urScore);
      break;
    }
    case "rock": {
      rockpc.classList.remove('hide');
      rockpc.classList.add('gradient');
      lose();
      pcScore++;
      newpcscore(pcScore);
      break;
    }
    case "scissor": {
      scissorpc.classList.remove('hide');
      tie();
      break;
    }
  }
})



//Hurray page(next button)

const next = document.querySelector('.next');
const header = document.querySelector('.header');
const play = document.querySelector('.play');
const container2 = document.querySelector('.container2');

next.addEventListener('click', () => {
  container2.classList.remove('hide');
  next.classList.add('hide');
  game.classList.add('hide');
  left.classList.add('hide');
  right.classList.add('hide');
  playagain.classList.add('hide');
  header.classList.add('hide');
  print_text.classList.add('hide');
})

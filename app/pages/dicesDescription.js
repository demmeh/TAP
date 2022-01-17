import document from 'document';

let buttonDiceRoll = null;
let diceLeft = null;
let diceRight = null;

export function destroy() {
  console.log('destroy index page');
  buttonDiceRoll = null;
  diceLeft = null;
  diceRight = null;
}

export function init() {
  console.log('init index page');
  buttonDiceRoll = document.getElementById('dicesDescription-svg');
  diceLeft = document.getElementById('diceLeft');
  diceRight = document.getElementById('diceRight');
  
  diceLeft.href="./resources/images/dobbelstenen-" + Math.floor((Math.random()*6)+1) + ".png";
  diceRight.href="./resources/images/dobbelstenen-" + Math.floor((Math.random()*6)+1) + ".png";

  buttonDiceRoll.onclick = () => {
    diceLeft.href="./resources/images/dobbelstenen-" + Math.floor((Math.random()*6)+1) + ".png";
    diceRight.href="./resources/images/dobbelstenen-" + Math.floor((Math.random()*6)+1) + ".png";
  };
}

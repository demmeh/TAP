import document from 'document';
import { switchPage } from '../navigation';

let buttonRandom = null;
let imageRandom = null;
let randomNumber = 1;

export function destroy() {
  console.log('destroy index page');
  buttonRandom = null;
  imageRandom = null;
}

export function init() {
  console.log('init index page');
  buttonRandom = document.getElementById('higherOrLowerGame-svg');
  imageRandom = document.getElementById('higherOrLowerRandom');

  drawCard()

  buttonRandom.onclick = () => {
  drawCard()
  };

}
function drawCard(){
  let newRandomNumber
  do{
    newRandomNumber = Math.floor((Math.random()*13)+1);
  } while(randomNumber === newRandomNumber);
  randomNumber = newRandomNumber;
  imageRandom.href="./resources/images/kaarten-" + randomNumber + ".png";
}

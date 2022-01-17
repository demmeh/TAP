import document from 'document';
import { switchPage } from '../navigation';

let buttonRandom = null;
let imageRandom = null;
let randomNumber = 1;

export function destroy() {
  buttonRandom = null;
  imageRandom = null;
}

export function init() {
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

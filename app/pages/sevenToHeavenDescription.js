import document from 'document';
import { switchPage } from '../navigation';

let buttonReplace = null;
let buttonBack = null;

export function destroy() {
  buttonReplace = null;
  buttonBack = null;
}

export function init() {
  buttonReplace = document.getElementById('sevenToHeavenDescription-svg');
  buttonBack = document.getElementById('sevenToHeavenDescription-back')

  buttonReplace.onclick = () => {
    switchPage('replace', true);
  };
  buttonBack.onclick = () => {
    switchPage('index');
  };
}

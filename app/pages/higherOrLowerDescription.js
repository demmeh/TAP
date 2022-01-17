import document from 'document';
import { switchPage } from '../navigation';

let buttonReplace = null;
let buttonBack = null;

export function destroy() {
  buttonReplace = null;
  buttonBack = null;
}

export function init() {
  buttonReplace = document.getElementById('higherOrLowerDescription-svg');
  buttonBack = document.getElementById('higherOrLowerDescription-back')

  buttonReplace.onclick = () => {
    switchPage('higherOrLowerGame', true);
  };
  buttonBack.onclick = () => {
    switchPage('index');
  };

}

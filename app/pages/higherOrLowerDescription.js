import document from 'document';
import { switchPage } from '../navigation';

let buttonReplace = null;
let buttonBack = null;

export function destroy() {
  console.log('destroy index page');
  buttonReplace = null;
  buttonBack = null;
}

export function init() {
  console.log('init index page');
  buttonReplace = document.getElementById('higherOrLowerDescription-svg');
  buttonBack = document.getElementById('higherOrLowerDescription-back')

  buttonReplace.onclick = () => {
    switchPage('higherOrLowerGame', true);
  };
  buttonBack.onclick = () => {
    switchPage('index');
  };

}

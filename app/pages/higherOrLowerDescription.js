import document from 'document';
import { switchPage } from '../navigation';

let buttonReplace = null;

function doSomething() {
  console.log('hallo index');
}

export function destroy() {
  console.log('destroy index page');
  buttonReplace = null;
}

export function init() {
  console.log('init index page');
  buttonReplace = document.getElementById('higherOrLowerDescription-svg');

  buttonReplace.onclick = () => {
    switchPage('replace', true);
  };

  doSomething();
}

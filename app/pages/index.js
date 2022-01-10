import document from 'document';
import { switchPage } from '../navigation';

let buttonHigherOrLowerDescription = null;

function doSomething() {
  console.log('hallo index');
}

export function destroy() {
  console.log('destroy index page');
  buttonHigherOrLowerDescription = null;
}

export function init() {
  console.log('init index page');
  buttonHigherOrLowerDescription = document.getElementById('higherOrLowerDescription-btn');

  buttonHigherOrLowerDescription.onclick = () => {
    switchPage('higherOrLowerDescription', true);
  };

  doSomething();
}

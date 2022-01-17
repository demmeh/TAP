import document from 'document';
import { switchPage } from '../navigation';

let buttonHigherOrLowerDescription = null;
let buttonSevenToHeaven = null;

export function destroy() {
  console.log('destroy index page');
  buttonHigherOrLowerDescription = null;
  buttonSevenToHeaven = null;
}

export function init() {
  console.log('init index page');
  buttonHigherOrLowerDescription = document.getElementById('higherOrLowerDescription-btn');
  buttonSevenToHeaven = document.getElementById('sevenToHeavenDescription-btn')

  buttonHigherOrLowerDescription.onclick = () => {
    switchPage('higherOrLowerDescription', true);
  };
  buttonSevenToHeaven.onclick = () => {
    switchPage('sevenToHeavenDescription', true);
  };
}

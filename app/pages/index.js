import document from 'document';
import { switchPage } from '../navigation';

let buttonHigherOrLowerDescription = null;
let buttonSevenToHeaven = null;
let buttonDicesDescription = null;
let buttonNeverHaveIEverDescription = null;

export function destroy() {
  buttonHigherOrLowerDescription = null;
  buttonSevenToHeaven = null;
  buttonDicesDescription = null;
  buttonNeverHaveIEverDescription = null;
}

export function init() {
  buttonHigherOrLowerDescription = document.getElementById('higherOrLowerDescription-btn');
  buttonSevenToHeaven = document.getElementById('sevenToHeavenDescription-btn')
  buttonDicesDescription = document.getElementById('dicesDescription-btn')
  buttonNeverHaveIEverDescription = document.getElementById('neverHaveIEverDescription-btn')

  buttonHigherOrLowerDescription.onclick = () => {
    switchPage('higherOrLowerDescription', true);
  };
  buttonSevenToHeaven.onclick = () => {
    switchPage('sevenToHeavenDescription', true);
  };
  buttonDicesDescription.onclick = () => {
    switchPage('dicesDescription', true);
  };
  buttonNeverHaveIEverDescription.onclick = () => {
    switchPage('neverHaveIEverDescription', true);
  };
}

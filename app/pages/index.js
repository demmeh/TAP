import document from 'document';
import { switchPage } from '../navigation';

let buttonHigherOrLowerDescription = null;
let buttonSevenToHeaven = null;
let buttonDicesDescription = null;
let buttonTruthOrDareDescription =null;

export function destroy() {
  console.log('destroy index page');
  buttonHigherOrLowerDescription = null;
  buttonSevenToHeaven = null;
  buttonDicesDescription = null;
  buttonTruthOrDareDescription =null;
}

export function init() {
  console.log('init index page');
  buttonHigherOrLowerDescription = document.getElementById('higherOrLowerDescription-btn');
  buttonSevenToHeaven = document.getElementById('sevenToHeavenDescription-btn')
  buttonDicesDescription = document.getElementById('dicesDescription-btn')
  buttonTruthOrDareDescription = document.getElementById('truthOrDareDescription-btn')

  buttonHigherOrLowerDescription.onclick = () => {
    switchPage('higherOrLowerDescription', true);
  };
  buttonSevenToHeaven.onclick = () => {
    switchPage('sevenToHeavenDescription', true);
  };
  buttonDicesDescription.onclick = () => {
    switchPage('dicesDescription', true);
  };
  buttonTruthOrDareDescription.onclick = () => {
    switchPage('truthOrDareDescription', true);
  };
}

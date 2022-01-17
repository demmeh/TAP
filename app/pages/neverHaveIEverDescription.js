import document from 'document';
import { switchPage } from '../navigation';

let buttonReplace = null;
let buttonBack = null;

export function destroy() {
  buttonReplace = null;
  buttonBack = null;
}

export function init() {
  buttonReplace = document.getElementById('neverHaveIEverDescription-svg');
  buttonBack = document.getElementById('neverHaveIEverDescription-back')

  buttonReplace.onclick = () => {
    switchPage('neverHaveIEverGame', true);
  };
  buttonBack.onclick = () => {
    switchPage('index');
  };

}

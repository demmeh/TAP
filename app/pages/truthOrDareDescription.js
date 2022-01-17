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
  buttonReplace = document.getElementById('truthOrDareDescription-svg');
  buttonBack = document.getElementById('truthOrDareDescription-back')

  buttonReplace.onclick = () => {
    switchPage('truthOrDareGame', true);
  };
  buttonBack.onclick = () => {
    switchPage('index');
  };

}

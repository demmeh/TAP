import document from 'document';
import { switchPage } from '../navigation';

let button = null;

export function destroy() {
  console.log('destroy replace page');
  button = null;
}

export function init() {
  console.log('init replace page');
  button = document.getElementById('back-button');
  button.onclick = () => {
    destroy();
    switchPage('index');
  };
}

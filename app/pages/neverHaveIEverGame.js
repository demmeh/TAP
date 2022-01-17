import document from 'document';
import { readFileSync } from "fs";
import { switchPage } from '../navigation';

let buttonReplace = null;
let countQuestions = null;
let header = null;
let question = null;

export function destroy() {
  buttonReplace = null;
  countQuestions = null;
  header = null;
  question = null;

}

export function init() {
  buttonReplace = document.getElementById('neverHaveIEverGame-svg');
  header = document.getElementById('neverHaveIEverHeader');
  question = document.getElementById('neverHaveIEverQuestion');

  let text = readFileSync("./resources/files/vragen.txt", "utf-8")
  countQuestions = text.split("\n").length;


  buttonReplace.onclick = () => {
   findQuestion();
  };

  findQuestion();
}

function findQuestion(){
  let text = readFileSync("./resources/files/vragen.txt", "utf-8");
  let randomQuestion = Math.floor(Math.random()*countQuestions);
  let questionText = text.split("\n")[randomQuestion];
  header.text = "Vraag " + (randomQuestion + 1) + ":";
  question.text = questionText;
}

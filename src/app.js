import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  const excuseElement = document.getElementById('excuse');

  const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  let finalExcuse = `${getRandomItem(who)} ${getRandomItem(action)} ${getRandomItem(what)} ${getRandomItem(when)}`;

  excuseElement.textContent = finalExcuse;
};

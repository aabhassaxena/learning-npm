import axios from 'axios';

const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");
const basketLeft = document.getElementById("apple-count-basket-left");
const basketRight = document.getElementById("apple-count-basket-right");

let appleCountBasketLeft = document.getElementById(
  "apple-count-basket-left"
).innerText;
let appleCountBasketRight = document.getElementById(
  "apple-count-basket-right"
).innerText;

buttonLeft.addEventListener("click", () => {
  if (appleCountBasketRight > 0) {
    appleCountBasketLeft++;
    appleCountBasketRight--;
    basketLeft.innerText = appleCountBasketLeft;
    basketRight.innerText = appleCountBasketRight;
  }
});
buttonRight.addEventListener("click", () => {
  if (appleCountBasketLeft > 0) {
    appleCountBasketLeft--;
    appleCountBasketRight++;
    basketLeft.innerText = appleCountBasketLeft;
    basketRight.innerText = appleCountBasketRight;
  }
});

//=============================================================================//
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//fetch data and show in console
//use axios using cdn
// axios("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
//   console.log(response.data)
// );
//use axios after downloading
//use axios using npm - check if axios is available in global space
//create npm project running in browser, add it to git
//.gitignore - node modules

//1. Make caraousel using swiper js

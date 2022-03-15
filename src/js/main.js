"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below
console.log(`Hello world!`);

const thisDay = new Date();
var actualDay = new Date();
var nextDay = new Date().setDate(actualDay.getDate() + 1);
var prevDay = new Date().setDate(actualDay.getDate() - 1);
console.log(`Today is ${thisDay.toDateString()}`);
console.log(new Date(prevDay).toDateString()); 
console.log(new Date(nextDay).toDateString()); 



const addBottle = document.querySelector('.addButton--JS');
const removeBottle = document.querySelector('.removeButton--JS');
const prevButton = document.querySelector('.prevButton--JS');
const nextButton = document.querySelector('.nextButton--JS');
var bottle = 0;
if (localStorage.getItem(thisDay.toDateString()) === null) {
  localStorage.setItem(thisDay.toDateString(), bottle);
  } else {
    bottle = +localStorage.getItem(thisDay.toDateString());
  }

addBottle.addEventListener('click', function(){
   ++bottle
   console.log(bottle)
   localStorage.setItem(thisDay.toDateString(), bottle.toString());
});

removeBottle.addEventListener('click', function(){
  if (bottle > 0)
  --bottle
  console.log(bottle)
  localStorage.setItem(thisDay.toDateString(), bottle.toString());
});

prevButton.addEventListener('click', function(){
  actualDay = prevDay;
  console.log(new Date(actualDay).toDateString())
})
console.log(actualDay.toDateString())
// switch (bottle) {
//   case 0:
//     console.log('nie piłeś dziś wody');
//     break;
//   case 1:
//     console.log(`wypiłeś dziś ${bottle} butelke wody!`);
//   break;
//   case 2:
//     console.log(`wypiłeś dziś ${bottle} butelki wody!`);
//   break;
//   case 3:
//     console.log(`wypiłeś dziś ${bottle} butelki wody!`);
//   break;
//   case 4:
//     console.log(`wypiłeś dziś ${bottle} butelki wody!`);
//   break;
//   case 5:
//     console.log(`wypiłeś dziś ${bottle} butelek wody!`);
//   break;
//   case 6:
//     console.log(`wypiłeś dziś ${bottle} butelek wody!`);
//   break;
// }
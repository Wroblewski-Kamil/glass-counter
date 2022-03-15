"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

console.log(`Hello world!`);

var thisDay = new Date();
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

if (localStorage.getItem(actualDay.toDateString()) === null) {
  bottle = 0;
  localStorage.setItem(actualDay.toDateString(), bottle);
} else {
  bottle = +localStorage.getItem(actualDay.toDateString());
}


prevButton.addEventListener('click', function () {
  actualDay = new Date(new Date().setDate(actualDay.getDate() - 1));
  console.log(new Date(actualDay).toDateString());
  if (localStorage.getItem(actualDay.toDateString()) === null) {
    bottle = 0;
    localStorage.setItem(actualDay.toDateString(), bottle);
  } else {
    bottle = +localStorage.getItem(actualDay.toDateString());
  }

});

nextButton.addEventListener('click', function () {
  actualDay = new Date(new Date().setDate(actualDay.getDate() + 1));
  console.log(new Date(actualDay).toDateString());
  console.log(thisDay.toDateString());
  console.log(actualDay.toDateString());

  if (localStorage.getItem(actualDay.toDateString()) === null) {
    bottle = 0;
    localStorage.setItem(actualDay.toDateString(), bottle);
  } else {
    bottle = +localStorage.getItem(actualDay.toDateString());
  }

});

addBottle.addEventListener('click', function () {
  if (actualDay.toDateString() == thisDay.toDateString()) {
    ++bottle;
    localStorage.setItem(actualDay.toDateString(), bottle.toString());
  } else 
  alert(`You can't add glass in other days!`)
});

removeBottle.addEventListener('click', function () {
  if (actualDay.toDateString() == thisDay.toDateString()) {
    if (bottle > 0)
      --bottle;
    localStorage.setItem(actualDay.toDateString(), bottle.toString());
  } else 
  alert(`You can't remove glass in other days!`)
});





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
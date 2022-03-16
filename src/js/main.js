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

const addBottle = document.querySelector('.addButton--JS');
const removeBottle = document.querySelector('.removeButton--JS');
const prevButton = document.querySelector('.prevButton--JS');
const nextButton = document.querySelector('.nextButton--JS');
var bottle = 0;

var thisDay = new Date();
var actualDay = new Date();
var nextDay = new Date().setDate(actualDay.getDate() + 1);
var prevDay = new Date().setDate(actualDay.getDate() - 1);
console.log(`Today is ${thisDay.toDateString()}`);
console.log(new Date(prevDay).toDateString());
console.log(new Date(nextDay).toDateString());


var days = 0;
document.querySelector('.dateBox--JS').innerHTML = actualDay.toDateString();
document.querySelector('.dateChecker--JS').innerHTML = `Actual date.`;
addBottle.style.background = "#24c7e1";

function Check(days){
  document.querySelector('.dateBox--JS').innerHTML = actualDay.toDateString();
if (days == 0){
  document.querySelector('.dateChecker--JS').innerHTML = `Actual date.`;
  addBottle.style.background = "#24c7e1";
} else if (days == 1){
  document.querySelector('.dateChecker--JS').innerHTML = `${days} day forward.`;
  addBottle.style.background = "red";
} else if (days >= 2){
  document.querySelector('.dateChecker--JS').innerHTML = `${days} days forward.`;
  addBottle.style.background = "red";
} else if (days == -1) {
  document.querySelector('.dateChecker--JS').innerHTML = `${Math.abs(days)} day ago.`;
  addBottle.style.background = "red";
} else if (days <= 0) {
  document.querySelector('.dateChecker--JS').innerHTML = `${Math.abs(days)} days ago.`;
  addBottle.style.background = "red";
}};




const fill1 = document.querySelector('.fill__1');
const fill2 = document.querySelector('.fill__2');
const fill3 = document.querySelector('.fill__3');
const fill4 = document.querySelector('.fill__4');
const fill5 = document.querySelector('.fill__5');
const fill6 = document.querySelector('.fill__6');

function counter(bottle){
  if (bottle > 0){
  document.querySelector('.counter--JS').innerHTML = bottle;
  } else{ 
  document.querySelector('.counter--JS').innerHTML = '';
  }
}

function color(bottle) {
  if (bottle == 0) {
    fill1.style.fill = "none";
    fill2.style.fill = "none";
    fill3.style.fill = "none";
    fill4.style.fill = "none";
    fill5.style.fill = "none";
    fill6.style.fill = "none";
  } else if (bottle == 1) {
    fill1.style.fill = "#24c7e1";
    fill2.style.fill = "none";
    fill3.style.fill = "none";
    fill4.style.fill = "none";
    fill5.style.fill = "none";
    fill6.style.fill = "none";
  } else if (bottle == 2) {
    fill1.style.fill = "#24c7e1";
    fill2.style.fill = "#24c7e1";
    fill3.style.fill = "none";
    fill4.style.fill = "none";
    fill5.style.fill = "none";
    fill6.style.fill = "none";
  } else if (bottle == 3) {
    fill1.style.fill = "#24c7e1";
    fill2.style.fill = "#24c7e1";
    fill3.style.fill = "#24c7e1";
    fill4.style.fill = "none";
    fill5.style.fill = "none";
    fill6.style.fill = "none";
  } else if (bottle == 4) {
    fill1.style.fill = "#24c7e1";
    fill2.style.fill = "#24c7e1";
    fill3.style.fill = "#24c7e1";
    fill4.style.fill = "#24c7e1";
    fill5.style.fill = "none";
    fill6.style.fill = "none";
  } else if (bottle == 5) {
    fill1.style.fill = "#24c7e1";
    fill2.style.fill = "#24c7e1";
    fill3.style.fill = "#24c7e1";
    fill4.style.fill = "#24c7e1";
    fill5.style.fill = "#24c7e1";
    fill6.style.fill = "none";
  } else if (bottle >= 6) {
    fill1.style.fill = "#24c7e1";
    fill2.style.fill = "#24c7e1";
    fill3.style.fill = "#24c7e1";
    fill4.style.fill = "#24c7e1";
    fill5.style.fill = "#24c7e1";
    fill6.style.fill = "#24c7e1";
  }
}




if (localStorage.getItem(actualDay.toDateString()) === null) {
  bottle = 0;
  localStorage.setItem(actualDay.toDateString(), bottle);
  color(bottle);
  counter(bottle)
} else {
  bottle = +localStorage.getItem(actualDay.toDateString());
  color(bottle);
  counter(bottle)
}


prevButton.addEventListener('click', function () {
  actualDay = new Date(new Date().setDate(actualDay.getDate() - 1));
  --days;
  Check(days);
  if (localStorage.getItem(actualDay.toDateString()) === null) {
    bottle = 0;
    localStorage.setItem(actualDay.toDateString(), bottle);
    color(bottle);
    counter(bottle)
  } else {
    bottle = +localStorage.getItem(actualDay.toDateString());
    color(bottle);
    counter(bottle)
  }
});

nextButton.addEventListener('click', function () {
  actualDay = new Date(new Date().setDate(actualDay.getDate() + 1));
  ++days;
  Check(days);
  if (localStorage.getItem(actualDay.toDateString()) === null) {
    bottle = 0;
    localStorage.setItem(actualDay.toDateString(), bottle);
    color(bottle);
    counter(bottle)
  } else {
    bottle = +localStorage.getItem(actualDay.toDateString());
    color(bottle);
    counter(bottle)
  }
});

addBottle.addEventListener('click', function () {
  if (actualDay.toDateString() == thisDay.toDateString()) {
    ++bottle;
    localStorage.setItem(actualDay.toDateString(), bottle.toString());
    color(bottle);
    counter(bottle)
  } else
    alert(`You can't add glass in other days!`)
});

removeBottle.addEventListener('click', function () {
  if (actualDay.toDateString() == thisDay.toDateString()) {
    if (bottle > 0)
      --bottle;
    localStorage.setItem(actualDay.toDateString(), bottle.toString());
    color(bottle);
    counter(bottle)
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
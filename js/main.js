!function(t){var n={};function e(l){if(n[l])return n[l].exports;var c=n[l]={i:l,l:!1,exports:{}};return t[l].call(c.exports,c,c.exports,e),c.l=!0,c.exports}e.m=t,e.c=n,e.d=function(t,n,l){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:l})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(e.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var c in t)e.d(l,c,function(n){return t[n]}.bind(null,c));return l},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function () {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function (err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\nconsole.log(`Hello world!`);\r\n\r\nvar thisDay = new Date();\r\nvar actualDay = new Date();\r\nvar nextDay = new Date().setDate(actualDay.getDate() + 1);\r\nvar prevDay = new Date().setDate(actualDay.getDate() - 1);\r\nconsole.log(`Today is ${thisDay.toDateString()}`);\r\nconsole.log(new Date(prevDay).toDateString());\r\nconsole.log(new Date(nextDay).toDateString());\r\n\r\n\r\n\r\nconst addBottle = document.querySelector('.addButton--JS');\r\nconst removeBottle = document.querySelector('.removeButton--JS');\r\nconst prevButton = document.querySelector('.prevButton--JS');\r\nconst nextButton = document.querySelector('.nextButton--JS');\r\nvar bottle = 0;\r\n\r\nif (localStorage.getItem(actualDay.toDateString()) === null) {\r\n  bottle = 0;\r\n  localStorage.setItem(actualDay.toDateString(), bottle);\r\n} else {\r\n  bottle = +localStorage.getItem(actualDay.toDateString());\r\n}\r\n\r\n\r\nprevButton.addEventListener('click', function () {\r\n  actualDay = new Date(new Date().setDate(actualDay.getDate() - 1));\r\n  console.log(new Date(actualDay).toDateString());\r\n  if (localStorage.getItem(actualDay.toDateString()) === null) {\r\n    bottle = 0;\r\n    localStorage.setItem(actualDay.toDateString(), bottle);\r\n  } else {\r\n    bottle = +localStorage.getItem(actualDay.toDateString());\r\n  }\r\n\r\n});\r\n\r\nnextButton.addEventListener('click', function () {\r\n  actualDay = new Date(new Date().setDate(actualDay.getDate() + 1));\r\n  console.log(new Date(actualDay).toDateString());\r\n  console.log(thisDay.toDateString());\r\n  console.log(actualDay.toDateString());\r\n\r\n  if (localStorage.getItem(actualDay.toDateString()) === null) {\r\n    bottle = 0;\r\n    localStorage.setItem(actualDay.toDateString(), bottle);\r\n  } else {\r\n    bottle = +localStorage.getItem(actualDay.toDateString());\r\n  }\r\n\r\n});\r\n\r\naddBottle.addEventListener('click', function () {\r\n  if (actualDay.toDateString() == thisDay.toDateString()) {\r\n    ++bottle;\r\n    localStorage.setItem(actualDay.toDateString(), bottle.toString());\r\n  } else \r\n  alert(`You can't add glass in other days!`)\r\n});\r\n\r\nremoveBottle.addEventListener('click', function () {\r\n  if (actualDay.toDateString() == thisDay.toDateString()) {\r\n    if (bottle > 0)\r\n      --bottle;\r\n    localStorage.setItem(actualDay.toDateString(), bottle.toString());\r\n  } else \r\n  alert(`You can't remove glass in other days!`)\r\n});\r\n\r\n\r\n\r\n\r\n\r\n// switch (bottle) {\r\n//   case 0:\r\n//     console.log('nie piłeś dziś wody');\r\n//     break;\r\n//   case 1:\r\n//     console.log(`wypiłeś dziś ${bottle} butelke wody!`);\r\n//   break;\r\n//   case 2:\r\n//     console.log(`wypiłeś dziś ${bottle} butelki wody!`);\r\n//   break;\r\n//   case 3:\r\n//     console.log(`wypiłeś dziś ${bottle} butelki wody!`);\r\n//   break;\r\n//   case 4:\r\n//     console.log(`wypiłeś dziś ${bottle} butelki wody!`);\r\n//   break;\r\n//   case 5:\r\n//     console.log(`wypiłeś dziś ${bottle} butelek wody!`);\r\n//   break;\r\n//   case 6:\r\n//     console.log(`wypiłeś dziś ${bottle} butelek wody!`);\r\n//   break;\r\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7Ozs7OztBQU1EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XHJcblxyXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2V3b3JrZXIuanMnKS50aGVuKGZ1bmN0aW9uIChyZWdpc3RyYXRpb24pIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XHJcbiAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcclxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBwbGFjZSB5b3VyIGNvZGUgYmVsb3dcclxuXHJcbmNvbnNvbGUubG9nKGBIZWxsbyB3b3JsZCFgKTtcclxuXHJcbnZhciB0aGlzRGF5ID0gbmV3IERhdGUoKTtcclxudmFyIGFjdHVhbERheSA9IG5ldyBEYXRlKCk7XHJcbnZhciBuZXh0RGF5ID0gbmV3IERhdGUoKS5zZXREYXRlKGFjdHVhbERheS5nZXREYXRlKCkgKyAxKTtcclxudmFyIHByZXZEYXkgPSBuZXcgRGF0ZSgpLnNldERhdGUoYWN0dWFsRGF5LmdldERhdGUoKSAtIDEpO1xyXG5jb25zb2xlLmxvZyhgVG9kYXkgaXMgJHt0aGlzRGF5LnRvRGF0ZVN0cmluZygpfWApO1xyXG5jb25zb2xlLmxvZyhuZXcgRGF0ZShwcmV2RGF5KS50b0RhdGVTdHJpbmcoKSk7XHJcbmNvbnNvbGUubG9nKG5ldyBEYXRlKG5leHREYXkpLnRvRGF0ZVN0cmluZygpKTtcclxuXHJcblxyXG5cclxuY29uc3QgYWRkQm90dGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEJ1dHRvbi0tSlMnKTtcclxuY29uc3QgcmVtb3ZlQm90dGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZUJ1dHRvbi0tSlMnKTtcclxuY29uc3QgcHJldkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2QnV0dG9uLS1KUycpO1xyXG5jb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRCdXR0b24tLUpTJyk7XHJcbnZhciBib3R0bGUgPSAwO1xyXG5cclxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFjdHVhbERheS50b0RhdGVTdHJpbmcoKSkgPT09IG51bGwpIHtcclxuICBib3R0bGUgPSAwO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGFjdHVhbERheS50b0RhdGVTdHJpbmcoKSwgYm90dGxlKTtcclxufSBlbHNlIHtcclxuICBib3R0bGUgPSArbG9jYWxTdG9yYWdlLmdldEl0ZW0oYWN0dWFsRGF5LnRvRGF0ZVN0cmluZygpKTtcclxufVxyXG5cclxuXHJcbnByZXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgYWN0dWFsRGF5ID0gbmV3IERhdGUobmV3IERhdGUoKS5zZXREYXRlKGFjdHVhbERheS5nZXREYXRlKCkgLSAxKSk7XHJcbiAgY29uc29sZS5sb2cobmV3IERhdGUoYWN0dWFsRGF5KS50b0RhdGVTdHJpbmcoKSk7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFjdHVhbERheS50b0RhdGVTdHJpbmcoKSkgPT09IG51bGwpIHtcclxuICAgIGJvdHRsZSA9IDA7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShhY3R1YWxEYXkudG9EYXRlU3RyaW5nKCksIGJvdHRsZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJvdHRsZSA9ICtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhY3R1YWxEYXkudG9EYXRlU3RyaW5nKCkpO1xyXG4gIH1cclxuXHJcbn0pO1xyXG5cclxubmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICBhY3R1YWxEYXkgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldERhdGUoYWN0dWFsRGF5LmdldERhdGUoKSArIDEpKTtcclxuICBjb25zb2xlLmxvZyhuZXcgRGF0ZShhY3R1YWxEYXkpLnRvRGF0ZVN0cmluZygpKTtcclxuICBjb25zb2xlLmxvZyh0aGlzRGF5LnRvRGF0ZVN0cmluZygpKTtcclxuICBjb25zb2xlLmxvZyhhY3R1YWxEYXkudG9EYXRlU3RyaW5nKCkpO1xyXG5cclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oYWN0dWFsRGF5LnRvRGF0ZVN0cmluZygpKSA9PT0gbnVsbCkge1xyXG4gICAgYm90dGxlID0gMDtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGFjdHVhbERheS50b0RhdGVTdHJpbmcoKSwgYm90dGxlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYm90dGxlID0gK2xvY2FsU3RvcmFnZS5nZXRJdGVtKGFjdHVhbERheS50b0RhdGVTdHJpbmcoKSk7XHJcbiAgfVxyXG5cclxufSk7XHJcblxyXG5hZGRCb3R0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKGFjdHVhbERheS50b0RhdGVTdHJpbmcoKSA9PSB0aGlzRGF5LnRvRGF0ZVN0cmluZygpKSB7XHJcbiAgICArK2JvdHRsZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGFjdHVhbERheS50b0RhdGVTdHJpbmcoKSwgYm90dGxlLnRvU3RyaW5nKCkpO1xyXG4gIH0gZWxzZSBcclxuICBhbGVydChgWW91IGNhbid0IGFkZCBnbGFzcyBpbiBvdGhlciBkYXlzIWApXHJcbn0pO1xyXG5cclxucmVtb3ZlQm90dGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIGlmIChhY3R1YWxEYXkudG9EYXRlU3RyaW5nKCkgPT0gdGhpc0RheS50b0RhdGVTdHJpbmcoKSkge1xyXG4gICAgaWYgKGJvdHRsZSA+IDApXHJcbiAgICAgIC0tYm90dGxlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYWN0dWFsRGF5LnRvRGF0ZVN0cmluZygpLCBib3R0bGUudG9TdHJpbmcoKSk7XHJcbiAgfSBlbHNlIFxyXG4gIGFsZXJ0KGBZb3UgY2FuJ3QgcmVtb3ZlIGdsYXNzIGluIG90aGVyIGRheXMhYClcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gc3dpdGNoIChib3R0bGUpIHtcclxuLy8gICBjYXNlIDA6XHJcbi8vICAgICBjb25zb2xlLmxvZygnbmllIHBpxYJlxZsgZHppxZsgd29keScpO1xyXG4vLyAgICAgYnJlYWs7XHJcbi8vICAgY2FzZSAxOlxyXG4vLyAgICAgY29uc29sZS5sb2coYHd5cGnFgmXFmyBkemnFmyAke2JvdHRsZX0gYnV0ZWxrZSB3b2R5IWApO1xyXG4vLyAgIGJyZWFrO1xyXG4vLyAgIGNhc2UgMjpcclxuLy8gICAgIGNvbnNvbGUubG9nKGB3eXBpxYJlxZsgZHppxZsgJHtib3R0bGV9IGJ1dGVsa2kgd29keSFgKTtcclxuLy8gICBicmVhaztcclxuLy8gICBjYXNlIDM6XHJcbi8vICAgICBjb25zb2xlLmxvZyhgd3lwacWCZcWbIGR6acWbICR7Ym90dGxlfSBidXRlbGtpIHdvZHkhYCk7XHJcbi8vICAgYnJlYWs7XHJcbi8vICAgY2FzZSA0OlxyXG4vLyAgICAgY29uc29sZS5sb2coYHd5cGnFgmXFmyBkemnFmyAke2JvdHRsZX0gYnV0ZWxraSB3b2R5IWApO1xyXG4vLyAgIGJyZWFrO1xyXG4vLyAgIGNhc2UgNTpcclxuLy8gICAgIGNvbnNvbGUubG9nKGB3eXBpxYJlxZsgZHppxZsgJHtib3R0bGV9IGJ1dGVsZWsgd29keSFgKTtcclxuLy8gICBicmVhaztcclxuLy8gICBjYXNlIDY6XHJcbi8vICAgICBjb25zb2xlLmxvZyhgd3lwacWCZcWbIGR6acWbICR7Ym90dGxlfSBidXRlbGVrIHdvZHkhYCk7XHJcbi8vICAgYnJlYWs7XHJcbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);
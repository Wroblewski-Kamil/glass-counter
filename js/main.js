!function(l){var t={};function e(c){if(t[c])return t[c].exports;var n=t[c]={i:c,l:!1,exports:{}};return l[c].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=l,e.c=t,e.d=function(l,t,c){e.o(l,t)||Object.defineProperty(l,t,{enumerable:!0,get:c})},e.r=function(l){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},e.t=function(l,t){if(1&t&&(l=e(l)),8&t)return l;if(4&t&&"object"==typeof l&&l&&l.__esModule)return l;var c=Object.create(null);if(e.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:l}),2&t&&"string"!=typeof l)for(var n in l)e.d(c,n,function(t){return l[t]}.bind(null,n));return c},e.n=function(l){var t=l&&l.__esModule?function(){return l.default}:function(){return l};return e.d(t,"a",t),t},e.o=function(l,t){return Object.prototype.hasOwnProperty.call(l,t)},e.p="",e(e.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\r\n\r\n// service worker registration - remove if you\'re not going to use it\r\n\r\nif (\'serviceWorker\' in navigator) {\r\n  window.addEventListener(\'load\', function () {\r\n    navigator.serviceWorker.register(\'serviceworker.js\').then(function (registration) {\r\n      // Registration was successful\r\n      console.log(\'ServiceWorker registration successful with scope: \', registration.scope);\r\n    }, function (err) {\r\n      // registration failed :(\r\n      console.log(\'ServiceWorker registration failed: \', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\nconsole.log(`Hello world!`);\r\n\r\nconst addBottle = document.querySelector(\'.addButton--JS\');\r\nconst removeBottle = document.querySelector(\'.removeButton--JS\');\r\nconst prevButton = document.querySelector(\'.prevButton--JS\');\r\nconst nextButton = document.querySelector(\'.nextButton--JS\');\r\nvar bottle = 0;\r\n\r\nvar thisDay = new Date();\r\nvar actualDay = new Date();\r\nvar nextDay = new Date().setDate(actualDay.getDate() + 1);\r\nvar prevDay = new Date().setDate(actualDay.getDate() - 1);\r\nconsole.log(`Today is ${thisDay.toDateString()}`);\r\nconsole.log(new Date(prevDay).toDateString());\r\nconsole.log(new Date(nextDay).toDateString());\r\n\r\n\r\nvar days = 0;\r\ndocument.querySelector(\'.dateBox--JS\').innerHTML = actualDay.toDateString();\r\ndocument.querySelector(\'.dateChecker--JS\').innerHTML = `Actual date.`;\r\naddBottle.style.background = "#24c7e1";\r\n\r\nfunction Check(days) {\r\n  document.querySelector(\'.dateBox--JS\').innerHTML = actualDay.toDateString();\r\n  if (days == 0) {\r\n    document.querySelector(\'.dateChecker--JS\').innerHTML = `Actual date.`;\r\n    addBottle.style.background = "#24c7e1";\r\n  } else if (days == 1) {\r\n    document.querySelector(\'.dateChecker--JS\').innerHTML = `${days} day forward.`;\r\n    addBottle.style.background = "red";\r\n  } else if (days >= 2) {\r\n    document.querySelector(\'.dateChecker--JS\').innerHTML = `${days} days forward.`;\r\n    addBottle.style.background = "red";\r\n  } else if (days == -1) {\r\n    document.querySelector(\'.dateChecker--JS\').innerHTML = `${Math.abs(days)} day ago.`;\r\n    addBottle.style.background = "red";\r\n  } else if (days <= 0) {\r\n    document.querySelector(\'.dateChecker--JS\').innerHTML = `${Math.abs(days)} days ago.`;\r\n    addBottle.style.background = "red";\r\n  }\r\n};\r\n\r\n\r\n\r\n\r\nconst fill1 = document.querySelector(\'.fill__1\');\r\nconst fill2 = document.querySelector(\'.fill__2\');\r\nconst fill3 = document.querySelector(\'.fill__3\');\r\nconst fill4 = document.querySelector(\'.fill__4\');\r\nconst fill5 = document.querySelector(\'.fill__5\');\r\nconst fill6 = document.querySelector(\'.fill__6\');\r\n\r\nfunction counter(bottle) {\r\n  if (bottle > 0) {\r\n    document.querySelector(\'.counter--JS\').innerHTML = bottle;\r\n  } else {\r\n    document.querySelector(\'.counter--JS\').innerHTML = \'\';\r\n  }\r\n}\r\n\r\nfunction color(bottle) {\r\n  if (bottle == 0) {\r\n    fill1.style.fill = "none";\r\n    fill2.style.fill = "none";\r\n    fill3.style.fill = "none";\r\n    fill4.style.fill = "none";\r\n    fill5.style.fill = "none";\r\n    fill6.style.fill = "none";\r\n  } else if (bottle == 1) {\r\n    fill1.style.fill = "#24c7e1";\r\n    fill2.style.fill = "none";\r\n    fill3.style.fill = "none";\r\n    fill4.style.fill = "none";\r\n    fill5.style.fill = "none";\r\n    fill6.style.fill = "none";\r\n  } else if (bottle == 2) {\r\n    fill1.style.fill = "#24c7e1";\r\n    fill2.style.fill = "#24c7e1";\r\n    fill3.style.fill = "none";\r\n    fill4.style.fill = "none";\r\n    fill5.style.fill = "none";\r\n    fill6.style.fill = "none";\r\n  } else if (bottle == 3) {\r\n    fill1.style.fill = "#24c7e1";\r\n    fill2.style.fill = "#24c7e1";\r\n    fill3.style.fill = "#24c7e1";\r\n    fill4.style.fill = "none";\r\n    fill5.style.fill = "none";\r\n    fill6.style.fill = "none";\r\n  } else if (bottle == 4) {\r\n    fill1.style.fill = "#24c7e1";\r\n    fill2.style.fill = "#24c7e1";\r\n    fill3.style.fill = "#24c7e1";\r\n    fill4.style.fill = "#24c7e1";\r\n    fill5.style.fill = "none";\r\n    fill6.style.fill = "none";\r\n  } else if (bottle == 5) {\r\n    fill1.style.fill = "#24c7e1";\r\n    fill2.style.fill = "#24c7e1";\r\n    fill3.style.fill = "#24c7e1";\r\n    fill4.style.fill = "#24c7e1";\r\n    fill5.style.fill = "#24c7e1";\r\n    fill6.style.fill = "none";\r\n  } else if (bottle >= 6) {\r\n    fill1.style.fill = "#24c7e1";\r\n    fill2.style.fill = "#24c7e1";\r\n    fill3.style.fill = "#24c7e1";\r\n    fill4.style.fill = "#24c7e1";\r\n    fill5.style.fill = "#24c7e1";\r\n    fill6.style.fill = "#24c7e1";\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\nif (localStorage.getItem(actualDay.toDateString()) === null) {\r\n  bottle = 0;\r\n  localStorage.setItem(actualDay.toDateString(), bottle);\r\n  color(bottle);\r\n  counter(bottle)\r\n} else {\r\n  bottle = +localStorage.getItem(actualDay.toDateString());\r\n  color(bottle);\r\n  counter(bottle)\r\n}\r\n\r\n\r\nprevButton.addEventListener(\'click\', function () {\r\n  actualDay = new Date(new Date().setDate(actualDay.getDate() - 1));\r\n  --days;\r\n  Check(days);\r\n  if (localStorage.getItem(actualDay.toDateString()) === null) {\r\n    bottle = 0;\r\n    localStorage.setItem(actualDay.toDateString(), bottle);\r\n    color(bottle);\r\n    counter(bottle)\r\n  } else {\r\n    bottle = +localStorage.getItem(actualDay.toDateString());\r\n    color(bottle);\r\n    counter(bottle)\r\n  }\r\n});\r\n\r\nnextButton.addEventListener(\'click\', function () {\r\n  actualDay = new Date(new Date().setDate(actualDay.getDate() + 1));\r\n  ++days;\r\n  Check(days);\r\n  if (localStorage.getItem(actualDay.toDateString()) === null) {\r\n    bottle = 0;\r\n    localStorage.setItem(actualDay.toDateString(), bottle);\r\n    color(bottle);\r\n    counter(bottle)\r\n  } else {\r\n    bottle = +localStorage.getItem(actualDay.toDateString());\r\n    color(bottle);\r\n    counter(bottle)\r\n  }\r\n});\r\n\r\naddBottle.addEventListener(\'click\', function () {\r\n  if (actualDay.toDateString() == thisDay.toDateString()) {\r\n    ++bottle;\r\n    localStorage.setItem(actualDay.toDateString(), bottle.toString());\r\n    color(bottle);\r\n    counter(bottle)\r\n  } else\r\n    alert(`You can\'t add glass in other days!`)\r\n});\r\n\r\nremoveBottle.addEventListener(\'click\', function () {\r\n  if (actualDay.toDateString() == thisDay.toDateString()) {\r\n    if (bottle > 0)\r\n      --bottle;\r\n    localStorage.setItem(actualDay.toDateString(), bottle.toString());\r\n    color(bottle);\r\n    counter(bottle)\r\n  } else\r\n    alert(`You can\'t remove glass in other days!`)\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// switch (bottle) {\r\n//   case 0:\r\n//     console.log(\'nie piłeś dziś wody\');\r\n//     break;\r\n//   case 1:\r\n//     console.log(`wypiłeś dziś ${bottle} butelke wody!`);\r\n//   break;\r\n//   case 2:\r\n//     console.log(`wypiłeś dziś ${bottle} butelki wody!`);\r\n//   break;\r\n//   case 3:\r\n//     console.log(`wypiłeś dziś ${bottle} butelki wody!`);\r\n//   break;\r\n//   case 4:\r\n//     console.log(`wypiłeś dziś ${bottle} butelki wody!`);\r\n//   break;\r\n//   case 5:\r\n//     console.log(`wypiłeś dziś ${bottle} butelek wody!`);\r\n//   break;\r\n//   case 6:\r\n//     console.log(`wypiłeś dziś ${bottle} butelek wody!`);\r\n//   break;\r\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw4REFBOEQsS0FBSztBQUNuRTtBQUNBLEdBQUc7QUFDSCw4REFBOEQsS0FBSztBQUNuRTtBQUNBLEdBQUc7QUFDSCw4REFBOEQsZUFBZTtBQUM3RTtBQUNBLEdBQUc7QUFDSCw4REFBOEQsZUFBZTtBQUM3RTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7OztBQVFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XHJcblxyXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2V3b3JrZXIuanMnKS50aGVuKGZ1bmN0aW9uIChyZWdpc3RyYXRpb24pIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XHJcbiAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcclxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBwbGFjZSB5b3VyIGNvZGUgYmVsb3dcclxuXHJcbmNvbnNvbGUubG9nKGBIZWxsbyB3b3JsZCFgKTtcclxuXHJcbmNvbnN0IGFkZEJvdHRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRCdXR0b24tLUpTJyk7XHJcbmNvbnN0IHJlbW92ZUJvdHRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmVCdXR0b24tLUpTJyk7XHJcbmNvbnN0IHByZXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldkJ1dHRvbi0tSlMnKTtcclxuY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0QnV0dG9uLS1KUycpO1xyXG52YXIgYm90dGxlID0gMDtcclxuXHJcbnZhciB0aGlzRGF5ID0gbmV3IERhdGUoKTtcclxudmFyIGFjdHVhbERheSA9IG5ldyBEYXRlKCk7XHJcbnZhciBuZXh0RGF5ID0gbmV3IERhdGUoKS5zZXREYXRlKGFjdHVhbERheS5nZXREYXRlKCkgKyAxKTtcclxudmFyIHByZXZEYXkgPSBuZXcgRGF0ZSgpLnNldERhdGUoYWN0dWFsRGF5LmdldERhdGUoKSAtIDEpO1xyXG5jb25zb2xlLmxvZyhgVG9kYXkgaXMgJHt0aGlzRGF5LnRvRGF0ZVN0cmluZygpfWApO1xyXG5jb25zb2xlLmxvZyhuZXcgRGF0ZShwcmV2RGF5KS50b0RhdGVTdHJpbmcoKSk7XHJcbmNvbnNvbGUubG9nKG5ldyBEYXRlKG5leHREYXkpLnRvRGF0ZVN0cmluZygpKTtcclxuXHJcblxyXG52YXIgZGF5cyA9IDA7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlQm94LS1KUycpLmlubmVySFRNTCA9IGFjdHVhbERheS50b0RhdGVTdHJpbmcoKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGVDaGVja2VyLS1KUycpLmlubmVySFRNTCA9IGBBY3R1YWwgZGF0ZS5gO1xyXG5hZGRCb3R0bGUuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzI0YzdlMVwiO1xyXG5cclxuZnVuY3Rpb24gQ2hlY2soZGF5cykge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlQm94LS1KUycpLmlubmVySFRNTCA9IGFjdHVhbERheS50b0RhdGVTdHJpbmcoKTtcclxuICBpZiAoZGF5cyA9PSAwKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZUNoZWNrZXItLUpTJykuaW5uZXJIVE1MID0gYEFjdHVhbCBkYXRlLmA7XHJcbiAgICBhZGRCb3R0bGUuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzI0YzdlMVwiO1xyXG4gIH0gZWxzZSBpZiAoZGF5cyA9PSAxKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZUNoZWNrZXItLUpTJykuaW5uZXJIVE1MID0gYCR7ZGF5c30gZGF5IGZvcndhcmQuYDtcclxuICAgIGFkZEJvdHRsZS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZWRcIjtcclxuICB9IGVsc2UgaWYgKGRheXMgPj0gMikge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGVDaGVja2VyLS1KUycpLmlubmVySFRNTCA9IGAke2RheXN9IGRheXMgZm9yd2FyZC5gO1xyXG4gICAgYWRkQm90dGxlLnN0eWxlLmJhY2tncm91bmQgPSBcInJlZFwiO1xyXG4gIH0gZWxzZSBpZiAoZGF5cyA9PSAtMSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGVDaGVja2VyLS1KUycpLmlubmVySFRNTCA9IGAke01hdGguYWJzKGRheXMpfSBkYXkgYWdvLmA7XHJcbiAgICBhZGRCb3R0bGUuc3R5bGUuYmFja2dyb3VuZCA9IFwicmVkXCI7XHJcbiAgfSBlbHNlIGlmIChkYXlzIDw9IDApIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlQ2hlY2tlci0tSlMnKS5pbm5lckhUTUwgPSBgJHtNYXRoLmFicyhkYXlzKX0gZGF5cyBhZ28uYDtcclxuICAgIGFkZEJvdHRsZS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZWRcIjtcclxuICB9XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBmaWxsMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxsX18xJyk7XHJcbmNvbnN0IGZpbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbGxfXzInKTtcclxuY29uc3QgZmlsbDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsbF9fMycpO1xyXG5jb25zdCBmaWxsNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxsX180Jyk7XHJcbmNvbnN0IGZpbGw1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbGxfXzUnKTtcclxuY29uc3QgZmlsbDYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsbF9fNicpO1xyXG5cclxuZnVuY3Rpb24gY291bnRlcihib3R0bGUpIHtcclxuICBpZiAoYm90dGxlID4gMCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50ZXItLUpTJykuaW5uZXJIVE1MID0gYm90dGxlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRlci0tSlMnKS5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbG9yKGJvdHRsZSkge1xyXG4gIGlmIChib3R0bGUgPT0gMCkge1xyXG4gICAgZmlsbDEuc3R5bGUuZmlsbCA9IFwibm9uZVwiO1xyXG4gICAgZmlsbDIuc3R5bGUuZmlsbCA9IFwibm9uZVwiO1xyXG4gICAgZmlsbDMuc3R5bGUuZmlsbCA9IFwibm9uZVwiO1xyXG4gICAgZmlsbDQuc3R5bGUuZmlsbCA9IFwibm9uZVwiO1xyXG4gICAgZmlsbDUuc3R5bGUuZmlsbCA9IFwibm9uZVwiO1xyXG4gICAgZmlsbDYuc3R5bGUuZmlsbCA9IFwibm9uZVwiO1xyXG4gIH0gZWxzZSBpZiAoYm90dGxlID09IDEpIHtcclxuICAgIGZpbGwxLnN0eWxlLmZpbGwgPSBcIiMyNGM3ZTFcIjtcclxuICAgIGZpbGwyLnN0eWxlLmZpbGwgPSBcIm5vbmVcIjtcclxuICAgIGZpbGwzLnN0eWxlLmZpbGwgPSBcIm5vbmVcIjtcclxuICAgIGZpbGw0LnN0eWxlLmZpbGwgPSBcIm5vbmVcIjtcclxuICAgIGZpbGw1LnN0eWxlLmZpbGwgPSBcIm5vbmVcIjtcclxuICAgIGZpbGw2LnN0eWxlLmZpbGwgPSBcIm5vbmVcIjtcclxuICB9IGVsc2UgaWYgKGJvdHRsZSA9PSAyKSB7XHJcbiAgICBmaWxsMS5zdHlsZS5maWxsID0gXCIjMjRjN2UxXCI7XHJcbiAgICBmaWxsMi5zdHlsZS5maWxsID0gXCIjMjRjN2UxXCI7XHJcbiAgICBmaWxsMy5zdHlsZS5maWxsID0gXCJub25lXCI7XHJcbiAgICBmaWxsNC5zdHlsZS5maWxsID0gXCJub25lXCI7XHJcbiAgICBmaWxsNS5zdHlsZS5maWxsID0gXCJub25lXCI7XHJcbiAgICBmaWxsNi5zdHlsZS5maWxsID0gXCJub25lXCI7XHJcbiAgfSBlbHNlIGlmIChib3R0bGUgPT0gMykge1xyXG4gICAgZmlsbDEuc3R5bGUuZmlsbCA9IFwiIzI0YzdlMVwiO1xyXG4gICAgZmlsbDIuc3R5bGUuZmlsbCA9IFwiIzI0YzdlMVwiO1xyXG4gICAgZmlsbDMuc3R5bGUuZmlsbCA9IFwiIzI0YzdlMVwiO1xyXG4gICAgZmlsbDQuc3R5bGUuZmlsbCA9IFwibm9uZVwiO1xyXG4gICAgZmlsbDUuc3R5bGUuZmlsbCA9IFwibm9uZVwiO1xyXG4gICAgZmlsbDYuc3R5bGUuZmlsbCA9IFwibm9uZVwiO1xyXG4gIH0gZWxzZSBpZiAoYm90dGxlID09IDQpIHtcclxuICAgIGZpbGwxLnN0eWxlLmZpbGwgPSBcIiMyNGM3ZTFcIjtcclxuICAgIGZpbGwyLnN0eWxlLmZpbGwgPSBcIiMyNGM3ZTFcIjtcclxuICAgIGZpbGwzLnN0eWxlLmZpbGwgPSBcIiMyNGM3ZTFcIjtcclxuICAgIGZpbGw0LnN0eWxlLmZpbGwgPSBcIiMyNGM3ZTFcIjtcclxuICAgIGZpbGw1LnN0eWxlLmZpbGwgPSBcIm5vbmVcIjtcclxuICAgIGZpbGw2LnN0eWxlLmZpbGwgPSBcIm5vbmVcIjtcclxuICB9IGVsc2UgaWYgKGJvdHRsZSA9PSA1KSB7XHJcbiAgICBmaWxsMS5zdHlsZS5maWxsID0gXCIjMjRjN2UxXCI7XHJcbiAgICBmaWxsMi5zdHlsZS5maWxsID0gXCIjMjRjN2UxXCI7XHJcbiAgICBmaWxsMy5zdHlsZS5maWxsID0gXCIjMjRjN2UxXCI7XHJcbiAgICBmaWxsNC5zdHlsZS5maWxsID0gXCIjMjRjN2UxXCI7XHJcbiAgICBmaWxsNS5zdHlsZS5maWxsID0gXCIjMjRjN2UxXCI7XHJcbiAgICBmaWxsNi5zdHlsZS5maWxsID0gXCJub25lXCI7XHJcbiAgfSBlbHNlIGlmIChib3R0bGUgPj0gNikge1xyXG4gICAgZmlsbDEuc3R5bGUuZmlsbCA9IFwiIzI0YzdlMVwiO1xyXG4gICAgZmlsbDIuc3R5bGUuZmlsbCA9IFwiIzI0YzdlMVwiO1xyXG4gICAgZmlsbDMuc3R5bGUuZmlsbCA9IFwiIzI0YzdlMVwiO1xyXG4gICAgZmlsbDQuc3R5bGUuZmlsbCA9IFwiIzI0YzdlMVwiO1xyXG4gICAgZmlsbDUuc3R5bGUuZmlsbCA9IFwiIzI0YzdlMVwiO1xyXG4gICAgZmlsbDYuc3R5bGUuZmlsbCA9IFwiIzI0YzdlMVwiO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFjdHVhbERheS50b0RhdGVTdHJpbmcoKSkgPT09IG51bGwpIHtcclxuICBib3R0bGUgPSAwO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGFjdHVhbERheS50b0RhdGVTdHJpbmcoKSwgYm90dGxlKTtcclxuICBjb2xvcihib3R0bGUpO1xyXG4gIGNvdW50ZXIoYm90dGxlKVxyXG59IGVsc2Uge1xyXG4gIGJvdHRsZSA9ICtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhY3R1YWxEYXkudG9EYXRlU3RyaW5nKCkpO1xyXG4gIGNvbG9yKGJvdHRsZSk7XHJcbiAgY291bnRlcihib3R0bGUpXHJcbn1cclxuXHJcblxyXG5wcmV2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIGFjdHVhbERheSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuc2V0RGF0ZShhY3R1YWxEYXkuZ2V0RGF0ZSgpIC0gMSkpO1xyXG4gIC0tZGF5cztcclxuICBDaGVjayhkYXlzKTtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oYWN0dWFsRGF5LnRvRGF0ZVN0cmluZygpKSA9PT0gbnVsbCkge1xyXG4gICAgYm90dGxlID0gMDtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGFjdHVhbERheS50b0RhdGVTdHJpbmcoKSwgYm90dGxlKTtcclxuICAgIGNvbG9yKGJvdHRsZSk7XHJcbiAgICBjb3VudGVyKGJvdHRsZSlcclxuICB9IGVsc2Uge1xyXG4gICAgYm90dGxlID0gK2xvY2FsU3RvcmFnZS5nZXRJdGVtKGFjdHVhbERheS50b0RhdGVTdHJpbmcoKSk7XHJcbiAgICBjb2xvcihib3R0bGUpO1xyXG4gICAgY291bnRlcihib3R0bGUpXHJcbiAgfVxyXG59KTtcclxuXHJcbm5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgYWN0dWFsRGF5ID0gbmV3IERhdGUobmV3IERhdGUoKS5zZXREYXRlKGFjdHVhbERheS5nZXREYXRlKCkgKyAxKSk7XHJcbiAgKytkYXlzO1xyXG4gIENoZWNrKGRheXMpO1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhY3R1YWxEYXkudG9EYXRlU3RyaW5nKCkpID09PSBudWxsKSB7XHJcbiAgICBib3R0bGUgPSAwO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYWN0dWFsRGF5LnRvRGF0ZVN0cmluZygpLCBib3R0bGUpO1xyXG4gICAgY29sb3IoYm90dGxlKTtcclxuICAgIGNvdW50ZXIoYm90dGxlKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBib3R0bGUgPSArbG9jYWxTdG9yYWdlLmdldEl0ZW0oYWN0dWFsRGF5LnRvRGF0ZVN0cmluZygpKTtcclxuICAgIGNvbG9yKGJvdHRsZSk7XHJcbiAgICBjb3VudGVyKGJvdHRsZSlcclxuICB9XHJcbn0pO1xyXG5cclxuYWRkQm90dGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIGlmIChhY3R1YWxEYXkudG9EYXRlU3RyaW5nKCkgPT0gdGhpc0RheS50b0RhdGVTdHJpbmcoKSkge1xyXG4gICAgKytib3R0bGU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShhY3R1YWxEYXkudG9EYXRlU3RyaW5nKCksIGJvdHRsZS50b1N0cmluZygpKTtcclxuICAgIGNvbG9yKGJvdHRsZSk7XHJcbiAgICBjb3VudGVyKGJvdHRsZSlcclxuICB9IGVsc2VcclxuICAgIGFsZXJ0KGBZb3UgY2FuJ3QgYWRkIGdsYXNzIGluIG90aGVyIGRheXMhYClcclxufSk7XHJcblxyXG5yZW1vdmVCb3R0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKGFjdHVhbERheS50b0RhdGVTdHJpbmcoKSA9PSB0aGlzRGF5LnRvRGF0ZVN0cmluZygpKSB7XHJcbiAgICBpZiAoYm90dGxlID4gMClcclxuICAgICAgLS1ib3R0bGU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShhY3R1YWxEYXkudG9EYXRlU3RyaW5nKCksIGJvdHRsZS50b1N0cmluZygpKTtcclxuICAgIGNvbG9yKGJvdHRsZSk7XHJcbiAgICBjb3VudGVyKGJvdHRsZSlcclxuICB9IGVsc2VcclxuICAgIGFsZXJ0KGBZb3UgY2FuJ3QgcmVtb3ZlIGdsYXNzIGluIG90aGVyIGRheXMhYClcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBzd2l0Y2ggKGJvdHRsZSkge1xyXG4vLyAgIGNhc2UgMDpcclxuLy8gICAgIGNvbnNvbGUubG9nKCduaWUgcGnFgmXFmyBkemnFmyB3b2R5Jyk7XHJcbi8vICAgICBicmVhaztcclxuLy8gICBjYXNlIDE6XHJcbi8vICAgICBjb25zb2xlLmxvZyhgd3lwacWCZcWbIGR6acWbICR7Ym90dGxlfSBidXRlbGtlIHdvZHkhYCk7XHJcbi8vICAgYnJlYWs7XHJcbi8vICAgY2FzZSAyOlxyXG4vLyAgICAgY29uc29sZS5sb2coYHd5cGnFgmXFmyBkemnFmyAke2JvdHRsZX0gYnV0ZWxraSB3b2R5IWApO1xyXG4vLyAgIGJyZWFrO1xyXG4vLyAgIGNhc2UgMzpcclxuLy8gICAgIGNvbnNvbGUubG9nKGB3eXBpxYJlxZsgZHppxZsgJHtib3R0bGV9IGJ1dGVsa2kgd29keSFgKTtcclxuLy8gICBicmVhaztcclxuLy8gICBjYXNlIDQ6XHJcbi8vICAgICBjb25zb2xlLmxvZyhgd3lwacWCZcWbIGR6acWbICR7Ym90dGxlfSBidXRlbGtpIHdvZHkhYCk7XHJcbi8vICAgYnJlYWs7XHJcbi8vICAgY2FzZSA1OlxyXG4vLyAgICAgY29uc29sZS5sb2coYHd5cGnFgmXFmyBkemnFmyAke2JvdHRsZX0gYnV0ZWxlayB3b2R5IWApO1xyXG4vLyAgIGJyZWFrO1xyXG4vLyAgIGNhc2UgNjpcclxuLy8gICAgIGNvbnNvbGUubG9nKGB3eXBpxYJlxZsgZHppxZsgJHtib3R0bGV9IGJ1dGVsZWsgd29keSFgKTtcclxuLy8gICBicmVhaztcclxuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')}]);
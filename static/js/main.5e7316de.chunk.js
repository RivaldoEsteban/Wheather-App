(this["webpackJsonpwheather-app"]=this["webpackJsonpwheather-app"]||[]).push([[0],{19:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(11),i=t.n(c),o=(t(19),t(2)),s=t.n(o),d=t(4),l=t(3),u=t(5),p=t(6);var h,m=function(){var e=new Date,n=e.getDate(),t=e.getDay(),a=e.getMonth()+1,r="",c="";return 0===t&&(r="Domingo"),1===t&&(r="Lunes"),2===t&&(r="Martes"),3===t&&(r="Miercoles"),4===t&&(r="Jueves"),5===t&&(r="Viernes"),6===t&&(r="Sabado"),1===a&&(c="Enero"),2===a&&(c="Febrero"),3===a&&(c="Marzo"),4===a&&(c="Abril"),5===a&&(c="Mayo"),6===a&&(c="Junio"),7===a&&(c="Julio"),8===a&&(c="Agosto"),9===a&&(c="Septiembre"),10===a&&(c="Octubre"),11===a&&(c="Noviembre"),12===a&&(c="Diciembre"),"".concat(r," ").concat(n," de ").concat(c)},b=t(1),g=p.a.div(h||(h=Object(u.a)(['\n  display: flex;\n  width: 17rem;\n  height: 5.62rem;\n  margin: auto;\n  position: absolute;\n  bottom: calc(1.25rem + 360px);\n  background: linear-gradient(90deg, #536976 0%, #292e49 100%);\n  color: var(--white);\n  padding: 1rem 1.5rem;\n  box-sizing: border-box;\n  gap: 1rem;\n  border-radius: 0.5rem;\n  left: calc(50% - (17rem / 2));\n  * {\n    margin: 0;\n  }\n  .current-date-right {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: center;\n  }\n  .degreesCelsius {\n    font: 400 normal 50px/43px "Nunito", sans-serif;\n    display: flex;\n    align-items: center;\n  }\n  .day {\n    font: var(--caption-caption);\n    margin-block-end: 0.75rem;\n  }\n  .country {\n    font: var(--caption-caption);\n    display: flex;\n    gap: 0.25rem;\n  }\n  .country img {\n    vertical-align: middle;\n    object-fit: cover;\n  }\n'])));var f=function(e){var n=e.weather,t=m();console.log(t);var a=Math.floor(n.main.temp-273.15),r="".concat(n.sys.country," ").concat(n.name);return Object(b.jsxs)(g,{children:[Object(b.jsxs)("div",{className:"degreesCelsius",children:[a,"\xb0"]}),Object(b.jsxs)("div",{className:"current-date-right",children:[Object(b.jsx)("p",{className:"day",children:t}),Object(b.jsxs)("div",{className:"country",children:[Object(b.jsx)("img",{src:"".concat("/Wheather-App","/icons/lugar.png"),alt:"point"}),Object(b.jsx)("p",{children:r})]})]})]})};var j,x=function(e){var n=(new Date).getDay()+e,t="";return 0===n?"Domingo":1===n?"Lunes":2===n?"Martes":3===n?"Mi\xe9rcoles":4===n?"Jueves":5===n?"Viernes":6===n?"S\xe1bado":t},v=p.a.div(j||(j=Object(u.a)(['\n  position: absolute;\n  bottom: -290px;\n  height: 360px;\n  width: 100%;\n  background: var(--bg);\n  color: var(--white);\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  padding: 1.75rem 0 1rem;\n  box-sizing: border-box;\n  .component {\n    bottom: 0;\n  }\n  * {\n    margin: 0;\n  }\n  ::before {\n    content: "";\n    width: 4rem;\n    height: 0.5rem;\n    background: var(--white);\n    border-radius: 0.25rem;\n    position: absolute;\n    right: calc(50% - 2rem);\n    top: 0.5rem;\n    cursor: pointer;\n  }\n  .weather-temperature {\n    display: flex;\n    gap: 1rem;\n    overflow: auto;\n    scroll-snap-type: x mandatory;\n    padding: 0 1rem;\n    margin: 2rem 0 1rem;\n    box-sizing: border-box;\n  }\n  .weather-data {\n    border: 3px solid transparent;\n    scroll-snap-align: center;\n    background: var(--black);\n    padding: 1rem 12px;\n    border-radius: 60px;\n    width: 65px;\n    align-items: center;\n    justify-content: center;\n    text-transform: capitalize;\n    font: var(--body2-regular);\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    box-sizing: border-box;\n    height: 130px;\n  }\n  .weather-data.is-active {\n    border: 3px solid var(--primary);\n  }\n  .weather-day-container {\n    display: flex;\n    gap: 1.5rem;\n    padding: 0 1rem;\n    justify-content: space-between;\n  }\n  .weather-day {\n    font: var(--body1-bold);\n    padding-bottom: 0.5rem;\n    text-transform: capitalize;\n    cursor: pointer;\n  }\n  .weather-day.is-active {\n    color: var(--primary);\n    border-bottom: 4px solid var(--primary);\n  }\n  .weather-more-info {\n    display: flex;\n    justify-content: space-between;\n    padding: 1rem;\n  }\n  .weather-more-info div p {\n    color: var(--white);\n    text-transform: capitalize;\n    font: var(--body1-regular);\n  }\n  .weather-more-info div p b {\n    color: var(--white);\n    font: var(--body1-bold);\n    text-transform: none;\n  }\n  .info {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .info b {\n    padding-left: 5px;\n  }\n'])));var w=function(e){var n=e.weather,t=e.weatherForecast,r=Object(a.useState)([!1,""]),c=Object(l.a)(r,2),i=c[0],o=c[1],s=Math.floor(n.main.temp_min-273.15),d=Math.floor(n.main.temp_max-273.15),u=n.main.humidity,p=(3.6*n.wind.speed).toFixed(2),h=t.list.slice(0,8),m=t.list.slice(8,16),g=t.list.slice(16,24),f=t.list.slice(24,32),j=t.list.slice(32,40),w=Object(a.useState)(h),y=Object(l.a)(w,2),O=y[0],k=y[1];function N(e,n){k(n),document.querySelectorAll(".weather-day").forEach((function(e){e.classList.remove("is-active")})),document.getElementById("element".concat(e)).classList.add("is-active")}return Object(b.jsxs)(v,{onClick:function(){document.getElementById("Weather").style.bottom=0},id:"Weather",children:[Object(b.jsxs)("div",{className:"weather-day-container",children:[Object(b.jsx)("h2",{className:"weather-day",id:"element0",onClick:function(){N("0",h)},children:x(0)}),Object(b.jsx)("h2",{className:"weather-day",id:"element1",onClick:function(){N("1",m)},children:x(1)}),Object(b.jsx)("h2",{className:"weather-day",id:"element2",onClick:function(){N("2",g)},children:x(2)}),Object(b.jsx)("h2",{className:"weather-day",id:"element3",onClick:function(){N("3",f)},children:x(3)}),Object(b.jsx)("h2",{className:"weather-day",id:"element4",onClick:function(){N("4",j)},children:x(4)})]}),Object(b.jsx)("div",{className:"weather-temperature",children:O.map((function(e){var n=Math.floor(e.main.temp-273.15),t=e.weather[0].main.toLowerCase(),a=new Date(e.dt_txt),r=a.getHours(),c=a.getMinutes(),i="".concat(r.toString().padStart(2,"00"),":").concat(c.toString().padStart(2,"00"));return Object(b.jsxs)("div",{className:"weather-data",id:e.dt_txt,onClick:function(){!function(e){console.log(e);var n=document.getElementById(e.dt_txt);o([!0,e]),n.classList.contains("is-active")?n.classList.remove("is-active"):n.classList.add("is-active")}(e)},children:[Object(b.jsx)("p",{children:i}),Object(b.jsx)("img",{src:"".concat("/Wheather-App","/icons/").concat(t,".svg"),alt:""}),Object(b.jsxs)("p",{className:"degrees-celsius",children:[n,"\xb0"]})]},e.dt_txt)}))}),Object(b.jsxs)("div",{className:"weather-more-info",children:[Object(b.jsxs)("div",{className:"info left",children:[Object(b.jsxs)("p",{children:["m\xe1x:",Object(b.jsxs)("b",{children:[i[0]?Math.floor(n.main.temp_max-273.15):d,"\xb0"]})]}),Object(b.jsxs)("p",{children:["viento:",Object(b.jsxs)("b",{children:[i[0]?(3.6*n.wind.speed).toFixed(2):p,"Km-h"]})]})]}),Object(b.jsxs)("div",{className:"info right",children:[Object(b.jsxs)("p",{children:["min:",Object(b.jsxs)("b",{children:[i[0]?Math.floor(i[1].main.temp_min-273.15):s,"\xb0"]})]}),Object(b.jsxs)("p",{children:["humedad:",Object(b.jsxs)("b",{children:[i[0]?n.main.humidity:u,"%"]})]})]})]})]})},y="091ec36883705339db6f4e5fbef580dc",O="https://api.openweathermap.org/data/2.5";function k(){return(k=Object(d.a)(s.a.mark((function e(n,t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/weather?lat=").concat(n,"&lon=").concat(t,"&appid=").concat(y));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("no jalo el fetch");case 5:return e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(e,n){return k.apply(this,arguments)};var M=function(e,n,t){var a=document.getElementById("app"),r=e.weather[0].main.toLowerCase();if(setTimeout((function(){if(19===(new Date).getHours())return t(!0)}),100),"drizzle"===r){if(n)return a.style.backgroundImage="url(".concat("/Wheather-App","/images/drizzle-night.jpg)");a.style.backgroundImage="url(".concat("/Wheather-App","/images/drizzle.jpg)")}if("clear"===r){if(n)return a.style.backgroundImage="url(".concat("/Wheather-App","/images/clear-night.jpg)");a.style.backgroundImage="url(".concat("/Wheather-App","/images/clear.jpg)")}if("wind"===r){if(n)return a.style.backgroundImage="url(".concat("/Wheather-App","/images/wind-night.jpg)");a.style.backgroundImage="url(".concat("/Wheather-App","/images/wind.jpg)")}if("clouds"===r){if(n)return a.style.backgroundImage="url(".concat("/Wheather-App","/images/clouds-night.jpg)");a.style.backgroundImage="url(".concat("/Wheather-App","/images/clouds.jpg)")}},S="091ec36883705339db6f4e5fbef580dc",z="https://api.openweathermap.org/data/2.5";function C(){return(C=Object(d.a)(s.a.mark((function e(n,t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(z,"/forecast?lat=").concat(n,"&lon=").concat(t,"&appid=").concat(S));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("fetch fallido de la funcion getWeatherForecastFor5Days");case 5:return e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D,A=function(e,n){return C.apply(this,arguments)},I=p.a.div(D||(D=Object(u.a)(["\n  height: 100vh;\n  width: 100vw;\n  background-image: url(","/images/clear-day.jpg);\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n"])),"/Wheather-App"),W=new Date;W.getDay(),W.getDate(),W.getMonth();var F=function(){var e=Object(a.useState)(""),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),o=i[0],u=i[1],p=Object(a.useState)(!1),h=Object(l.a)(p,2),m=h[0],g=h[1],j=Object(a.useState)(!1),x=Object(l.a)(j,2),v=x[0],y=x[1];return m&&M(t,v,y),Object(a.useEffect)((function(){"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(){var e=Object(d.a)(s.a.mark((function e(n){var t,a,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.coords.latitude,a=n.coords.longitude,e.next=4,N(t,a);case 4:return c=e.sent,e.next=7,A(t,a);case 7:i=e.sent,r(c),u(i),g(!0);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()):alert("el usuario no dio acceso a su ubicaci\xf3n")}),[]),Object(b.jsxs)(I,{id:"app",children:[m?Object(b.jsx)(f,{weather:t}):"cargando",m?Object(b.jsx)(w,{weather:t,weatherForecast:o}):""]})},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),L()}},[[24,1,2]]]);
//# sourceMappingURL=main.5e7316de.chunk.js.map
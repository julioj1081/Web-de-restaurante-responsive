//podemos poner var o let no pondermos el document.ready main()
//pondremos el js al final del footer para que corra
//primero las imagenes y despues los js
let btnMenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');
btnMenu.addEventListener('click', function(){
  'use strict';
  //usamos classList para añadir una clase en css 
  menu.classList.toggle('mostrar');
});

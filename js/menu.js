//Animar el Menu
let btnMenu = document.getElementById(`btnmenu`);
let menu = document.getElementById(`menu`);
//Colocar la clase "showMenu" al Menu para que se despligue
btnMenu.addEventListener(`click`, function(){
  `use strict`;
  menu.classList.toggle(`showMenu`); // Agregar o quitar (.toggle) la clase "showMenu"
});

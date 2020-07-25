// Crear una Array con todas las imagenes de la galeria
let images = document.querySelectorAll(`.gallery__img`);
// Cargar direccion del modal
let modal = document.querySelector(`#modal`);
// Cargar direccion de la imagen
let img = document.querySelector(`#modal__img`);
// Cargar direccion del boton
let btn = document.querySelector(`#modal__btn`);

for (let i = 0; i < images.length; i++){
  images[i].addEventListener(`click`, function(e){
    modal.classList.toggle("modal--show");
    // Obtener la ruta de la imagen pulsada "click" utilizando el parametro "e"
    let src = e.target.src;
    // Cargar la imagen correspondiente
    img.setAttribute("src", src);
  });
};

btn.addEventListener(`click`, function(){
  modal.classList.toggle("modal--show");
});

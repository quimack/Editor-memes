const body = document.querySelector('#body');
const modoClaro = document.querySelector('#modoClaro');
const modoOscuro = document.querySelector('#modoOscuro');
const botonImagen = document.querySelector('#botonImagen');
const botonTexto = document.querySelector('#botonTexto');
const panelTexto = document.querySelector('#panelTexto');
const cerrarPanelImagen = document.querySelector('#cerrarPanelImagen');
const panelImagen = document.querySelector('#panelImagen');
const panelMeme = document.querySelector('#panelMeme');
const aside = document.querySelector('#aside');
const urlImg = document.querySelector('#urlImg');
const imgMeme = document.querySelector('#imgMeme');
const brillo = document.querySelector('#controlBrillo');
const opacidad = document.querySelector('#controlOpacidad');
const contraste = document.querySelector('#controlContraste');
const desenfoque = document.querySelector('#controlDesenfoque');

imgMeme.src = "https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560";

//IR A MODO OSCURO 
modoClaro.addEventListener('click', () => {
   body.classList.toggle('dark');
   body.classList.toggle('light');
    modoClaro.classList.toggle('oculto');
    modoOscuro.classList.toggle('oculto');
});
//IR A MODO CLARO 
modoOscuro.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    modoClaro.classList.toggle('oculto');
    modoOscuro.classList.toggle('oculto');
});

//ABRIR PANEL IMAGEN
botonImagen.addEventListener('click', () => {
    aside.classList.remove('oculto')
    panelImagen.classList.remove('oculto');
    panelMeme.classList.add('oculto');
});

//CERRAR PANEL IMAGEN
cerrarPanelImagen.addEventListener('click', () => {
    aside.classList.add('oculto');
    panelMeme.classList.remove('oculto');
});

//ABRIR PANEL TEXTO

botonTexto.addEventListener('click', () => {
    panelMeme.classList.add('oculto');
    aside.classList.remove('oculto');
    panelImagen.classList.add('oculto');
    panelTexto.classList.remove('oculto');
   
});

//CERRAR PANEL TEXTO

cerrarPanelTexto.addEventListener('click', () => {
    panelMeme.classList.remove('oculto')
    aside.classList.add('oculto')
    panelTexto.classList.add('oculto')
}); 



//    FUNCIONALIDADES PANEL IMAGEN

//URL
urlImg.addEventListener('change', () => {
    imgMeme.src = urlImg.value
});

//FILTROS
const actualizarFiltros = () => {
    imgMeme.style.filter = `brillo(${brillo.value}) opacidad(${opacidad.value}) contraste(${contraste.value}%) desenfoque(${desenfoque.value}px)`;
  }

  brillo.addEventListener("change", actualizarFiltros);

  opacidad.addEventListener("change", actualizarFiltros);

  contraste.addEventListener("change", actualizarFiltros);

  desenfoque.addEventListener("change", actualizarFiltros);


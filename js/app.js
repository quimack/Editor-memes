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
    panelTexto.classList.remove('oculto');
    panelImagen.classList.add('oculto');
})









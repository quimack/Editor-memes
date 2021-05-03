const body = document.querySelector('#body');
//BOTONES Y PANELES
const modoClaro = document.querySelector('#modoClaro');
const modoOscuro = document.querySelector('#modoOscuro');
const botonImagen = document.querySelector('#botonImagen');
const botonTexto = document.querySelector('#botonTexto');
const panelTexto = document.querySelector('#panelTexto');
const cerrarPanelImagen = document.querySelector('#cerrarPanelImagen');
const panelImagen = document.querySelector('#panelImagen');
const panelMeme = document.querySelector('#panelMeme');
const aside = document.querySelector('#aside');
//URL - IMAGEN
const urlImg = document.querySelector('#urlImg');
const imgMeme = document.querySelector('#imgMeme');
//INPUTS FILTROS:
const brillo = document.querySelector('#controlBrillo');
const opacidad = document.querySelector('#controlOpacidad');
const contraste = document.querySelector('#controlContraste');
const desenfoque = document.querySelector('#controlDesenfoque');
const grises = document.querySelector('#controlGrises');
const sepia = document.querySelector('#controlSepia');
const hue = document.querySelector('#controlHue');
const saturado = document.querySelector('#controlSaturado');
const negativo = document.querySelector('#controlNegativo');
//DESCARGA IMAGEN
const botonDescarga = document.getElementById('botonDescarga');
const contenedorMeme = document.getElementById('contenedorMeme');
//INPUTS TEXTO Y MODIFICADORES
const topText = document.querySelector('#topText');
const bottomText = document.querySelector('#bottomText');
const topTextMeme = document.querySelector('#topTextMeme');
const bottomTextMeme = document.querySelector('#bottomTextMeme');
const fuenteTexto = document.querySelector('#fuenteTexto');
const tamañoFuente = document.querySelector('#tamañoFuente');
const colorTexto = document.querySelector('#colorTexto');
const fondoTexto = document.querySelector('#fondoTexto');
const fondoTextoTransparente = document.querySelector('#fondoTextoTransparente');

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
    imgMeme.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) contrast(${contraste.value}%) blur(${desenfoque.value}px)
    grayscale(${grises.value}) sepia(${sepia.value}) hue-rotate(${hue.value}) saturate(${saturado.value}) invert(${negativo.value})`;
  }

  brillo.addEventListener("change", actualizarFiltros);
  opacidad.addEventListener("change", actualizarFiltros);
  contraste.addEventListener("change", actualizarFiltros);
  desenfoque.addEventListener("change", actualizarFiltros);
  grises.addEventListener("change", actualizarFiltros);
  sepia.addEventListener("change", actualizarFiltros);
  hue.addEventListener("change", actualizarFiltros);
  saturado.addEventListener("change", actualizarFiltros);
  negativo.addEventListener("change", actualizarFiltros);

// FUNCIONALIDADES PANEL TEXTO
topText.addEventListener('input', () =>{
    topTextMeme.textContent = topText.value;
});

bottomText.addEventListener('input', () =>{
    bottomTextMeme.textContent = bottomText.value;
});

fuenteTexto.addEventListener('change', () => {
    topTextMeme.style.fontFamily = fuenteTexto.value;
    bottomTextMeme.style.fontFamily = fuenteTexto.value;
});

tamañoFuente.addEventListener('change', () => {
    topTextMeme.style.fontSize = `${tamañoFuente.value}px`;
    bottomTextMeme.style.fontSize = `${tamañoFuente.value}px`;
});

colorTexto.addEventListener('change' , () => {
    topTextMeme.style.color = colorTexto.value;
    bottomTextMeme.style.color = colorTexto.value;
});

fondoTexto.addEventListener('change', () => {
        topTextMeme.style.backgroundColor = fondoTexto.value;
        bottomTextMeme.style.backgroundColor = fondoTexto.value;
});

fondoTextoTransparente.addEventListener('input', () => {
    topTextMeme.style.backgroundColor = "transparent";
    bottomTextMeme.style.backgroundColor = "transparent";
});







//DESCARGA IMAGEN - NO FUNCIONA

botonDescarga.addEventListener('click', () => {
    domtoimage.toBlob(contenedorMeme)
    .then(function (blob) {
    window.saveAs(blob, 'meme.png');
  });
});


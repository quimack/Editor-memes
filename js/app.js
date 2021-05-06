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
const reestablecerFiltros = document.querySelector('#reestablecerFiltros');

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
urlImg.addEventListener('input', () => {
    imgMeme.src = urlImg.value
});                 

//FILTROS
const actualizarFiltros = () => {
    imgMeme.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) contrast(${contraste.value}%) blur(${desenfoque.value}px)
    grayscale(${grises.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturado.value}%) invert(${negativo.value})`;
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

reestablecerFiltros.addEventListener('click', () =>{
    brillo.value = 1;
    opacidad.value = 1;
    contraste.value = 100;
    desenfoque.value = 0;
    grises.value = 0;
    sepia.value = 0;
    hue.value = 0;
    saturado.value = 100;
    negativo.value = 1;
    actualizarFiltros();
});


// FUNCIONALIDADES PANEL TEXTO
topText.addEventListener('input', () =>{
    topTextMeme.innerText = topText.value;
});

bottomText.addEventListener('input', () =>{
    bottomTextMeme.innerText = bottomText.value;
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

const botonDescarga = document.getElementById('botonDescarga');
const contenedorMeme = document.getElementById('contenedorMeme');

botonDescarga.addEventListener('click', () => {
    console.log('entre al a funcion');
    domtoimage.toBlob(contenedorMeme)
    .then(function (blob) {
    window.saveAs(blob, 'meme.png');
  });
});

console.log(contenedorMeme);
//DECLARACIÓN DE VARIABLES:
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
const imgMeme = document.querySelector('#imagen-meme');
const btnFondoImagen = document.querySelector('#fondoImg');
//INPUTS FILTROS Y MODIFICADORES
const modoDeMezcla = document.querySelector('#modoDeMezcla');
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
const sinTextoSuperior = document.querySelector('#sinTextoSuperior');
const bottomText = document.querySelector('#bottomText');
const sinTextoInferior = document.querySelector('#sinTextoInferior');
const topTextMeme = document.querySelector('#topTextMeme');
const bottomTextMeme = document.querySelector('#bottomTextMeme');
const fuenteTexto = document.querySelector('#fuenteTexto');
const tamañoFuente = document.querySelector('#tamañoFuente');
const textAlignLeft = document.querySelector('#textAlignLeft');
const textAlignCenter = document.querySelector('#textAlignCenter');
const textAlignRight = document.querySelector('#textAlignRight');
const colorTexto = document.querySelector('#colorTexto');
const fondoTexto = document.querySelector('#fondoTexto');
const fondoTextoTransparente = document.querySelector('#fondoTextoTransparente');
const contornoTextoNinguno = document.querySelector('#contornoTextoNinguno');
const contornoTextoClaro = document.querySelector('#contornoTextoClaro');
const contornoTextoOscuro = document.querySelector('#contornoTextoOscuro');
const espaciadoTexto = document.querySelector('#espaciadoTexto');
const interlineadoTexto = document.querySelector('#interlineadoTexto');

//FUNCIONALIDADES:
//IR A MODO OSCURO 
modoClaro.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    modoClaro.classList.toggle('oculto');
    modoOscuro.classList.toggle('oculto');
    modoClaro.classList.toggle('oculto-escritorio');
    modoOscuro.classList.toggle('oculto-escritorio');
    
});

//IR A MODO CLARO 
modoOscuro.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    modoClaro.classList.toggle('oculto');
    modoOscuro.classList.toggle('oculto');
    modoClaro.classList.toggle('oculto-escritorio');
    modoOscuro.classList.toggle('oculto-escritorio');
});

//ABRIR PANEL IMAGEN
botonImagen.addEventListener('click', () => {
    aside.classList.remove('oculto')
    panelImagen.classList.remove('oculto');
    panelMeme.classList.add('oculto');
    //PARA EL MODO ESCRITORIO:
    panelImagen.classList.remove('oculto-escritorio');
    panelTexto.classList.add('oculto-escritorio');
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
    //PARA EL MODO ESCRITORIO:
    panelImagen.classList.add('oculto-escritorio');
    panelTexto.classList.remove('oculto-escritorio');
   
});
//CERRAR PANEL TEXTO
cerrarPanelTexto.addEventListener('click', () => {
    panelMeme.classList.remove('oculto')
    aside.classList.add('oculto')
    panelTexto.classList.add('oculto')
}); 

//    FUNCIONALIDADES PANEL IMAGEN:
//URL
urlImg.addEventListener('input', () => {
    imgMeme.style.backgroundImage = `url("${urlImg.value}")`;
});                 
//FONDO IMAGEN 
btnFondoImagen.addEventListener('change', () => {
    imgMeme.style.backgroundColor = btnFondoImagen.value;
})
//MODO MEZCLA
modoDeMezcla.addEventListener('change', () =>{
    console.log('me funca')
    imgMeme.style.backgroundBlendMode = modoDeMezcla.value;
})
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
    negativo.value = 0;
    actualizarFiltros();
});

// FUNCIONALIDADES PANEL TEXTO
topText.addEventListener('input', () =>{
    topTextMeme.innerText = topText.value;
});

sinTextoSuperior.addEventListener('change', () =>{
    if(sinTextoSuperior.checked){
        topTextMeme.classList.add('oculto');
        topTextMeme.classList.add('oculto-escritorio');
    }else{
        topTextMeme.classList.remove('oculto');
        topTextMeme.classList.remove('oculto-escritorio');
    }
});

sinTextoInferior.addEventListener('change', () =>{
    if(sinTextoInferior.checked){
        bottomTextMeme.classList.add('oculto');
        bottomTextMeme.classList.add('oculto-escritorio');
    }else{
        bottomTextMeme.classList.remove('oculto');
        bottomTextMeme.classList.remove('oculto-escritorio');
    }
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

textAlignLeft.addEventListener('click', () => {
    topTextMeme.style.textAlign = 'left';
    bottomTextMeme.style.textAlign = 'left';
});

textAlignCenter.addEventListener('click', () => {
    topTextMeme.style.textAlign = 'center';
    bottomTextMeme.style.textAlign = 'center';
});

textAlignRight.addEventListener('click', () => {
    topTextMeme.style.textAlign = 'right';
    bottomTextMeme.style.textAlign = 'right';
});

colorTexto.addEventListener('change' , () => {
    topTextMeme.style.color = colorTexto.value;
    bottomTextMeme.style.color = colorTexto.value;
});

fondoTexto.addEventListener('change', () => {
        topTextMeme.style.backgroundColor = fondoTexto.value;
        bottomTextMeme.style.backgroundColor = fondoTexto.value;
});

fondoTextoTransparente.addEventListener('change', () => {
    if(fondoTextoTransparente.checked){
        topTextMeme.style.backgroundColor = 'transparent';
        bottomTextMeme.style.backgroundColor = 'transparent';
        topTextMeme.style.position = 'absolute';
        bottomTextMeme.style.position = 'absolute';
    }else{
        topTextMeme.style.backgroundColor = fondoTexto.value;
        bottomTextMeme.style.backgroundColor = fondoTexto.value;
        topTextMeme.style.position = 'static';
        bottomTextMeme.style.position = 'static';
    };
});

contornoTextoNinguno.addEventListener('click', () => {
    topTextMeme.style.textShadow = 'none';
    bottomTextMeme.style.textShadow = 'none';
});

contornoTextoClaro.addEventListener('click', () => {
    topTextMeme.style.textShadow = '2px 2px #FFF, -2px 2px #FFF, 2px -2px #FFF, -2px -2px #FFF';
    bottomTextMeme.style.textShadow = '2px 2px #FFF, -2px 2px #FFF, 2px -2px #FFF, -2px -2px #FFF';
});

contornoTextoOscuro.addEventListener('click', () => {
    topTextMeme.style.textShadow = '2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000';
     bottomTextMeme.style.textShadow = '2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000';
});

espaciadoTexto.addEventListener('change', () => {
    const ingresoInputEspaciado = espaciadoTexto.value;
    topTextMeme.style.padding = `${ingresoInputEspaciado}px 50px`; 
    bottomTextMeme.style.padding = `${ingresoInputEspaciado}px 50px`; 
});

interlineadoTexto.addEventListener('change', () => {
    topTextMeme.style.lineHeight = interlineadoTexto.value;
    bottomTextMeme.style.lineHeight = interlineadoTexto.value;
});
//DESCARGA IMAGEN
const botonDescarga = document.getElementById('botonDescarga');
const contenedorMeme = document.getElementById('contenedorMeme');

botonDescarga.addEventListener('click', () => {
    console.log('entre al a funcion');
    domtoimage.toBlob(contenedorMeme)
    .then(function (blob) {
    window.saveAs(blob, 'meme.png');
  });
});
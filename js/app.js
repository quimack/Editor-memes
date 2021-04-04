const modoClaro = document.querySelector('#modoClaro');
const modoOscuro = document.querySelector('#modoOscuro');

modoClaro.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    modoClaro.classList.toggle('oculto');
    modoOscuro.classList.toggle('oculto');
});

console.log(modoOscuro.classList.contains('oculto'));

modoOscuro.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    modoClaro.classList.toggle('oculto');
    modoOscuro.classList.toggle('oculto');
});






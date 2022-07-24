//Global Variables
const boton = document.querySelector(".button");

//Functions
eventListeners();
function eventListeners(){
    boton.addEventListener("click",consejoRandom);
    consejoRandom();
}

function consejoRandom(){
    const url = "https://api.adviceslip.com/advice";
    fetch(url)
    .then( respuesta => respuesta.json())
    .then(resultado => imprimirConsejo(resultado.slip));
}
function imprimirConsejo(consejorandom){

    const consejonumero = document.querySelector(".card__paragraph");
    const consejo = document.querySelector(".card__advice");

    const {id,advice} = consejorandom;

    consejonumero.textContent = `Advice #${id}`;
    consejo.innerHTML =  `"${advice}"`;
}
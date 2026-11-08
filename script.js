const numero = document.querySelector("#numero");
const botonSumar = document.querySelector("#botonSumar");
const botonRestar = document.querySelector("#botonRestar");
const botonReiniciar = document.querySelector("#botonReiniciar");
const VALOR_INICIAL = 0;
let contador = VALOR_INICIAL;

numero.textContent = contador;

function sumar() {
  contador++;
  numero.textContent = contador;
}

function restar() {
  contador--;
  numero.textContent = contador;
}

function reiniciar() {
  contador = VALOR_INICIAL;
  numero.textContent = contador;
}

botonSumar.addEventListener("click", sumar);
botonRestar.addEventListener("click", restar);
botonReiniciar.addEventListener("click", reiniciar);

let counter = 1500; // Fase 1: 25 min = 1500 segundos
let timerId = null;

function count() {
if (counter > 0) {
counter--;

// Fase 2: Mostrar minutos y segundos separados
let minutes = Math.floor(counter / 60);
let seconds = counter % 60;

if (seconds < 10) {
seconds = '0' + seconds;
}
if (minutes < 10) {
minutes = '0' + minutes;
}


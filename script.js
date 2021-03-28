/*
Author: Guilherme Fontanella
Version 0.1
*/

var hora = 00;
var minuto = 00;
var segundo = 0;
var milesimos = 0;

function inicioRelogio() {
    milesimos++
    document.getElementById("milesimos").innerHTML = milesimos;
    
    if(milesimos >= 99) {
        milesimos = 00;
        segundo++;
        document.getElementById("segundos").innerHTML = segundo;
    }
    if(segundo >= 59) {
        segundo = 0;
        minuto++;
        document.getElementById("minutos").innerHTML = minuto;
    }
    if(minuto >= 59) {
        minuto = 00;
        hora++;
        document.getElementById("horas").innerHTML = minuto;
    }   
};

function start() {
    setInterval(inicioRelogio, 10);
}

function stop() {
};

function zero() {
};

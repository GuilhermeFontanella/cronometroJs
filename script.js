/*
Author: Guilherme Fontanella
Version 1.0
*/

var hora = 00;
var minuto = 00;
var segundo = 0;
var centesimos = 0;
var intervalo;
var ligado = false;

function inicioRelogio() {
    centesimos++
    ligado = true;
    document.getElementById("centesimos").innerHTML = centesimos;
    if(centesimos >= 99) {
        centesimos = 00;
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
        document.getElementById("horas").innerHTML = horas;
    }   
};

function start() {
    if(!ligado) {
        this.intervalo = setInterval(inicioRelogio, 10);
    }
}

function stop() {
    this.ligado = false;
    clearInterval(intervalo);
    return intervalo = null;    
};

function zero() { 
    hora = 0;
    minuto = 0;
    segundo = 0;
    centesimos = 0;
    document.getElementById("horas").innerHTML = "00";
    document.getElementById("minutos").innerHTML = "00";
    document.getElementById("segundos").innerHTML = "00";
    document.getElementById("centesimos").innerHTML = "00";
};





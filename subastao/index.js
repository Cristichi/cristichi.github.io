var tbE1;
var tbE2;

var btnE1;
var btnE2;
var inE1;
var inE2;

var puntosE1 = 0;
var puntosE2 = 0;

function cargado() {
    tbE1 = document.getElementById("tbE1");
    tbE2 = document.getElementById("tbE2");

    btnE1 = document.getElementById("btnE1");
    btnE2 = document.getElementById("btnE2");
    inE1 = document.getElementById("inE1");
    inE2 = document.getElementById("inE2");
    
    inE1.value = "";
    inE2.value = "";

    console.log("Ole aparcao")
}

function ganarE1() {
    const puntos = parseInt(inE1.value);

    if (Number.isInteger(puntos)) {
        var row = tbE1.insertRow(-1);

        var ganado = row.insertCell(0);
        var total = row.insertCell(1);

        ganado.innerHTML = puntos;
        puntosE1 = puntosE1 + puntos;
        total.innerHTML = puntosE1;

        inE1.value = "";
    }
}

function ganarE2() {
    const puntos = parseInt(inE2.value);

    if (Number.isInteger(puntos)) {
        var row = tbE2.insertRow(-1);

        var ganado = row.insertCell(0);
        var total = row.insertCell(1);

        ganado.innerHTML = puntos;
        puntosE2 = puntosE2 + puntos;
        total.innerHTML = puntosE2;

        inE2.value = "";
    }
}

function masE1(cantidad) {
    const puntos = parseInt(inE1.value);
    var resultado = 0;
    
    if (Number.isInteger(puntos)) {
        resultado = puntos + cantidad
    } else {
        resultado = cantidad
    }
    if (resultado >= 50){
        inE1.value = resultado;
    } else {
        inE1.value = 50;
    }
}

function masE2(cantidad) {
    const puntos = parseInt(inE2.value);
    var resultado = 0;
    
    if (Number.isInteger(puntos)) {
        resultado = puntos + cantidad
    } else {
        resultado = cantidad
    }
    if (resultado >= 50){
        inE2.value = resultado;
    } else {
        inE2.value = 50;
    }
}
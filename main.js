let contador = document.getElementById("contador")
let aumentar = document.getElementById("aumentar")
let diminuir = document.getElementById("diminuir")

let contadorJs = 0
 function aumentarNumero(){
        updateDisplay(++contadorJs)       
}
function diminuirNumero(){
    updateDisplay(--contadorJs)
}
function updateDisplay(val) {
    document.getElementById("contador").innerHTML = val;
}


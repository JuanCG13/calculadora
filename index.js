// var numero = '100000101010'
// var separador = numero.split('*')
// var resultado = 1

// for (var i = 0; i < separador.length; i ++)
// {
    //     resultado = parseFloat(separador[i]) * resultado
    
    
    
    // console.log(numero)
    
    // numero = numero.substr('1')
    
    // console.log(numero)




var vista = document.getElementById('casilla').value = ''
var validaciones = ['+', '-', 'x', '/']


function del() {

    pos = vista.length - 1
    borrar = vista.substring(0,pos)
    vista = document.getElementById('casilla').value = borrar

    console.log('entro')

}


function valpunto(cadena) {
    // esta funcion se utiliza para que no se repitan los puntos 

    var valor = true
    for (var i = 0; i < cadena.length; i++) {
        if (cadena.charAt(i) == '.' && cadena.charAt(i + 1) == '.') {
            valor = false
            break
        }
    }

    if (valor == false) {
        return valor
    }
    else {
        return valor
    }
}

function verificacion(cadena) {
    var cont = 0

    //aca en este for se anida otro for para preguntar si la cadena tiene 
    //adentro los caracteres del array para que no se repitan

    for (var j = 0; j < validaciones.length; j++) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena.charAt(i) == validaciones[j]) {
                cont += 1
            }
        }
    }

    if (cont == 1) {
        return false
    }
    else {
        return true
    }
}


function uno() {
    valor = 0

    valor = document.getElementById('boton1').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function dos() {
    valor = 0

    valor = document.getElementById('boton2').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function tres() {
    valor = 0

    valor = document.getElementById('boton3').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function cuatro() {
    valor = 0

    valor = document.getElementById('boton4').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function cinco() {
    valor = 0

    valor = document.getElementById('boton5').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function seis() {
    valor = 0

    valor = document.getElementById('boton6').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function siete() {
    valor = 0

    valor = document.getElementById('boton7').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function ocho() {
    valor = 0

    valor = document.getElementById('boton8').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function nueve() {
    valor = 0

    valor = document.getElementById('boton9').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function cero() {
    valor = 0

    valor = document.getElementById('boton0').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function punto() {

    valor = 0

    valor = document.getElementById('botonpunto').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function reset() {
    vista = document.getElementById('casilla').value = ''
}


// funciones para las operaciones

function suma() {

    if (verificacion(vista) == true) {

        valor = 0

        valor = document.getElementById('suma').value

        vista = document.getElementById('casilla').value += valor

        console.log(valor)
    }
}

function resta() {
    if (verificacion(vista) == true) {
        valor = 0

        valor = document.getElementById('resta').value

        vista = document.getElementById('casilla').value += valor

        console.log(valor)
    }
}

function multi() {
    if (verificacion(vista) == true) {
        valor = 0

        valor = document.getElementById('multi').value

        vista = document.getElementById('casilla').value += valor

        console.log(valor)
    }
}

function div() {
    if (verificacion(vista) == true) {
        valor = 0

        valor = document.getElementById('div').value

        vista = document.getElementById('casilla').value += valor

        console.log(valor)
    }
}

function result() {
    var numero = vista
    var suma = 0
    var resultado = 0

    // en este for se preguntan el tipo de operaciones a ejecutar
    // y luego al final se imprime el resultado

    if (valpunto(numero) == false) {
        alert('Error usted ingreso mas de un punto')
    }
    else {

        for (var i = 0; i < numero.length; i++) {

            if (numero.charAt(i) == '+') {
                suma = numero.split('+')

                for (var j = 0; j < suma.length; j++) {
                    resultado = parseInt(suma[j]) + resultado
                }

            }
            if (numero.charAt(i) == '/') {
                resultado = 1
                suma = numero.split('/')

                for (var j = suma.length - 1; j >= 0; j--) {
                    resultado = parseFloat(suma[j]) / resultado
                }

            }

            if (numero.charAt(i) == '-') {
                suma = numero.split('-')

                for (var j = 0; j < suma.length; j++) {
                    resultado = - (resultado)
                    resultado = resultado - parseFloat(suma[j])
                }
            }

            if (numero.charAt(i) == 'x') {
                resultado = 1
                suma = numero.split('x')

                for (var j = 0; j < suma.length; j++) {
                    resultado = parseFloat(suma[j]) * resultado
                }

            }
        }

        console.log(resultado)
        vista = document.getElementById('casilla').value = resultado
    }




}



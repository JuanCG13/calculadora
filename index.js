// var numero = '1200*1300*2'
// var separador = numero.split('*')
// var resultado = 1

// for (var i = 0; i < separador.length; i ++)
// {
//     resultado = parseInt(separador[i]) * resultado
    
// }

// console.log(resultado)






var vista = document.getElementById('casilla').value


function uno ()
{
    valor = 0

    valor = document.getElementById('boton1').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function dos ()
{
    valor = 0

    valor = document.getElementById('boton2').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function tres ()
{
    valor = 0

    valor = document.getElementById('boton3').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function cuatro ()
{
    valor = 0

    valor = document.getElementById('boton4').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function cinco ()
{
    valor = 0

    valor = document.getElementById('boton5').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function seis ()
{
    valor = 0

    valor = document.getElementById('boton6').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function siete ()
{
    valor = 0

    valor = document.getElementById('boton7').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function ocho ()
{
    valor = 0

    valor = document.getElementById('boton8').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function nueve ()
{
    valor = 0

    valor = document.getElementById('boton9').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function cero ()
{
    valor = 0

    valor = document.getElementById('boton0').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function reset()
{
    vista = document.getElementById('casilla').value = ''
}


// funciones para las operaciones

function suma()
{
    valor = 0

    valor = document.getElementById('suma').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function resta()
{
    valor = 0

    valor = document.getElementById('resta').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function multi()
{
    valor = 0

    valor = document.getElementById('multi').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function div()
{
    valor = 0

    valor = document.getElementById('div').value

    vista = document.getElementById('casilla').value += valor

    console.log(valor)
}

function result()
{
    var numero = vista
    var suma = 0

    for(var i = 0; i < numero.length; i++)
    {
        if(parseInt(numero.charCodeAt(i)) > 48 && parseInt(numero.charCodeAt(i)) < 58  )
        {
            console.log(numero.charCodeAt(i))
            // suma = parseInt(numero.charAt(i-1)) + parseInt(numero.charAt(i+1))
        }
        if(numero.charAt(i) == '+' )
        {
            console.log('suma')
        }
        if(numero.charAt(i) == '-' )
        {
            console.log('resta')
        }
        if(numero.charAt(i) == 'x' )
        {
            console.log('multiplicacion')
        }
        if(numero.charAt(i) == '/' )
        {
            console.log('division')
        }
    }
    // var separador = numero.split('+')
    // var resultado = 0

    // for (var i = 0; i < separador.length; i ++)
    // {
    //     resultado = parseInt(separador[i]) + resultado
        
    // }

    // vista = document.getElementById('casilla').value = resultado

    // console.log(resultado)
    

}



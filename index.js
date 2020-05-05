// var numero = '1200*1300*2'
// var separador = numero.split('*')
// var resultado = 1

// for (var i = 0; i < separador.length; i ++)
// {
//     resultado = parseInt(separador[i]) * resultado
    
// }

// console.log(resultado)






var vista = document.getElementById('casilla').value

function verificacion (cadena)
{
    var cont = 0
    for(var i = 0; i < cadena.length; i ++)
    {
        if(cadena.charCodeAt(i) >= 42 && cadena.charCodeAt(i) <= 47  || cadena.charCodeAt(i) == 120)
        {
            cont += 1
        }
    }

    if (cont == 1)
    {
        return false
    }
    else 
    {
        return true
    }
}


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

    if (verificacion(vista) == true)
    {

        valor = 0
    
        valor = document.getElementById('suma').value
    
        vista = document.getElementById('casilla').value += valor
    
        console.log(valor)
    }
}

function resta()
{
    if (verificacion(vista) == true)
    {
        valor = 0
    
        valor = document.getElementById('resta').value
    
        vista = document.getElementById('casilla').value += valor
    
        console.log(valor)
    }
}

function multi()
{
    if (verificacion(vista) == true)
    {
        valor = 0
    
        valor = document.getElementById('multi').value
    
        vista = document.getElementById('casilla').value += valor
    
        console.log(valor)
    }
}

function div()
{
    if (verificacion(vista) == true)
    {
        valor = 0
    
        valor = document.getElementById('div').value
    
        vista = document.getElementById('casilla').value += valor
    
        console.log(valor)
    }
}

function result()
{
    var numero = vista
    var suma = 0
    var resultado = 0

    for(var i = 0; i < numero.length; i ++)
    {
        if(numero.charAt(i) == '+')
        {
            suma = numero.split('+')
            
            for(var j = 0; j < suma.length; j ++ )
            {
                resultado = parseInt(suma[j]) + resultado
            }
            
        }
    }
    for(var i = 0; i < numero.length; i ++)
    {
        if(numero.charAt(i) == '/')
        {
            resultado = 1
            suma = numero.split('/')
            
            for(var j = suma.length - 1; j >= 0 ; j -- )
            {
                resultado = parseFloat(suma[j]) / resultado
            }
            
        }
    }

    for(var i = 0; i < numero.length; i ++)
    {
        if(numero.charAt(i) == '-')
        {
            suma = numero.split('-')
            
            for(var j = 0; j < suma.length; j ++ )
            {
                resultado = - (resultado)
                resultado = resultado - parseFloat(suma[j])
            }
        }
    }

    for(var i = 0; i < numero.length; i ++)
    {
        if(numero.charAt(i) == 'x')
        {
            resultado = 1
            suma = numero.split('x')
            
            for(var j = 0; j < suma.length; j ++ )
            {
                resultado = parseInt(suma[j]) * resultado
            }
            
        }
    }

    
    console.log(resultado) 
    vista = document.getElementById('casilla').value = resultado
    // var separador = numero.split('+')
    // var resultado = 0

    // for (var i = 0; i < separador.length; i ++)
    // {
    //     resultado = parseInt(separador[i]) + resultado
    
    // }
    
    // vista = document.getElementById('casilla').value = resultado

    // console.log(resultado)
    

}



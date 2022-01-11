// Comentario de una linea

/* Comentario 
muiltiliena*/
/*
alert ("estoy vivo!!");

console.log ("Este es un mensaje para la consola");

var nombre = "Ernesto Alonso ";
var apellidos = "Silva Lopez ";
var edad =  26 ;

console.log(nombre,apellidos,edad);

alert("Mi nombre es "+ nombre );

alert ("Mi Nombre es " + nombre + apellidos + edad)

// otro ejemplo de como mostrar variables en consola

var numero1 =5;
var numero2 = 7;
var resultado = numero1 + numero2;

console.log("El resultado de la suma es  "  + resultado);

alert(resultado); */

/*


// Declaracio  Funcion

function saludar(){

    alert ("Hola A Todos");
}

saludar();

//expresion de funcion

var cantar = function(){
    alert ("A mi me gusta cantar");
}
cantar();


//funcion sin parametros
function sumar (){
    var numero1 = 5;
    var numero2 =6;
    var suma = numero1 + numero2;
    alert ("La suma de la funcion sin parametros es: " + suma)
}

sumar();


//funcion con parametros
function restar (num1,num2,resta){
    var num1 = 6;
    var num2 = 8;
    var resta = num1 - num2;
    alert ("La resta de la funcion con parametros es " + resta);
    }
    restar();

// otra funcion con parametros

function cuadrado (cuadrado){
    var rescuadrado = cuadrado * cuadrado;
    alert ("El Cuadrado del numero es: " + rescuadrado);
    }
    
    cuadrado(4);


    function Operaciones (num1, num2, num3, suma, resta, multi){
        var suma = num1 + num2 + num3;
        var resta = num1 - num2 - num3;
        var multi = num1 * num2 * num3;

        alert("La suma es: " + suma + ", la resta es: " + resta + " y la multiplicacion es: " + multi)

    }

    Operaciones (5,6,7);

    */

/*
    // Funcion Promter 

    function Prompter(){
        var respuesta = prompt("Buenos Dias, cual es tu nombre?");
        alert ("Es un gusto saludarte " + respuesta)
    }
    Prompter();



    function areacuadrado() {
        var datoingresado = prompt("ingresa un numero ");
        var resultado = datoingresado * datoingresado;
        alert ("El area del cuadrado es  " + resultado + "  por lo que el numero que ingresaste es " + datoingresado);
    }
    areacuadrado();

*/

function confirmacion(){
    var pregunta = confirm("Deseas visitar google.com y buscar fotos de perritos?")
    if (pregunta){
    alert("Te enviare rapidamente")
    window.location = "https://www.google.com/search?q=fotos+perritos&client=opera&hs=tPj&sxsrf=AOaemvILrorFSbc2zaxS7xUQfuz1qYYO3g:1641842553888&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj9gM6R9Kf1AhVQXc0KHcHoDVgQ_AUoAXoECAEQAw&biw=1920&bih=939&dpr=1"
    }
    else{
        alert ("No hay problema, nos vemos luego")
    }
}  


//getelemntid

function cambiarcolor(nuevocolor){
    var elem = document.getElementById ("parrafo");
    elem.style.color = nuevocolor;
    }


    function Accion (Tipo){
        var elem = document.getElementById ("DivBotones");
        if (Tipo == "Ocultar")
        elem.style.display = 'none';
        else
        elem.style.display = '';
    }
    

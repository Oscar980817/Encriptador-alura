//Ponemos las variables de los objetos html que vamos a utilizar con su respectivo id

let texto = document.getElementById("mensajeNormal");

const botonEncriptar = document.getElementById("botonEncriptar");

const botonDeSencriptar = document.getElementById("desencriptar");

const ocultarMensaje = document.getElementById("ocultar");

const mostrarMensaje = document.getElementById("areaMostrar");

const btnCopiar = document.getElementById("copiarMostrar");

let textoEncriptado = document.getElementById("textoEncriptado");

function encriptar(texto){
    //declaramos la variable donde se va a guardar el valor tras cada iteracion del for
    let = iteracionTexto = "";

    //utilizamos el parametro de texto y lo utilizamos para saber cuantas veces debe hacer la iteracion, que sera igual al numero de caracteres del texto
    for (let i = 0; i < texto.length;i++ ){

        //utilizamos las condicionales, las cuales dicen que si encuentra cierto caracter remplaze el caracter encontrado en la iteracion que va por la palabra para encriptar
        if (texto[i] == "a"){
            iteracionTexto = iteracionTexto +  "ai";
        } else if(texto[i] == "e"){
            iteracionTexto = iteracionTexto +  "enter";
        }else if(texto[i] == "i"){
            iteracionTexto = iteracionTexto +  "imes";
        } else if(texto[i] == "o"){
            iteracionTexto = iteracionTexto +  "ober";
        } else if(texto[i] == "u"){
            iteracionTexto = iteracionTexto +  "ufat";
            // si no encuentra niguno de los caracteres no reemplaza el caracter del texo, solo lo concatena
        } else{
            iteracionTexto = iteracionTexto + texto[i]
        }
    }
    return (iteracionTexto);
}

function mensajeEncriptado(){
    //cuando se llame la funcion ocultara el div inicial y se pondran los elementos del otro div
    ocultarMensaje.style.display = "none";
    mostrarMensaje.style.display = "block";
    //la variable texto encriptado le agregamos el valor de texto.value , con el innerText que es el texto a encriptar, ya con la funcion la cual encriptara el texto, y como se muestra el otro div mostrara los caracteres ya encriptados
    textoEncriptado.innerText = encriptar(texto.value); //el iner text agrega el valor que se le indique a la variable
    return textoEncriptado
}

botonEncriptar.addEventListener("click",mensajeEncriptado); // llamamos la funcion el click en el boton encriptar

function mensajeDeSencriptado(){
    let textoDesencriptado = document.getElementById("textoEncriptado");
    textoDesencriptado.innerText = texto.value;
    return textoDesencriptado
}

botonDeSencriptar.addEventListener("click", mensajeDeSencriptado);

function copiar(){
    //navigator nos permite ingresar a las opciones de naegador, posteriormente le damos clipboar para coper, con write.text y seleccionamos que queremos copear, ademas el texto si se escribia en mayuscula se copea igual por ende utlice lowercase para que el texto salga en minuscula
    navigator.clipboard.writeText(textoEncriptado.textContent.toLocaleLowerCase());
}

btnCopiar.addEventListener("click",copiar);


/*`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`*/

//variables
const textArea = document.querySelector("#textoOriginal");
const textEncriptado = document.querySelector("#textoEncriptado");
const limpiarArea = document.querySelector("#sinMensaje")

// 'la letra "e" es convertida en "enter"
// 'la letra "i" es convertida en "imes"
// 'la letra "a" es convertida en "ai"
// 'la letra "o" es convertida en "ober"
// 'la letra "u" es convertida en "ufat"

//creamos la funcion de accion de encriptado
function btnEncriptar(){
    const msjEncriptado = encriptarTexto(textArea.value);
    textEncriptado.value = msjEncriptado;
    textArea.value = "";
    textEncriptado.style.backgroundImage = "none";
    limpiarArea.innerHTML = "";

}
//creamos la funcion de accion desencriptado
function btnDesencriptar(){
    const msjDesencriptado = desencriptarTexto(textArea.value);
    textEncriptado.value = msjDesencriptado;
    textArea.value = "";
    textEncriptado.style.backgroundImage = "none";
    limpiarArea.innerHTML = "";
}

//funcion copiar texto.
function btnCopiarTexto(){
    let texto = document.getElementById("textoEncriptado");
    texto.select();
    texto.setSelectionRange(0, 99999);

    //copiar en el porta papeles.
    navigator.clipboard.writeText(texto.value);

    //avisamo al usuario que se copio.
    alert("El texto se copio correctamente");
}

//creamos la funcion para encriptar.
function encriptarTexto(textoEncriptado){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoEncriptado.includes(matrizCodigo[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return textoEncriptado
}

//funcion desencriptar

function desencriptarTexto(textoDesencriptado){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoDesencriptado.includes(matrizCodigo[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return textoDesencriptado
}

const btnEncriptar = document.querySelector("#btn-encriptar"); 
const entrada = document.querySelector("#textarea");
const salida = document.querySelector("#salida");
const btnCopiar = document.querySelector("#btn-copiar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");

const sectionOutputPresentacion = document.querySelector(".section-output-presentacion");
const sectionOutputEncriptacion = document.querySelector(".section-output-encriptacion");

btnEncriptar.addEventListener("click", () => encriptarDatos() );
btnDesencriptar.addEventListener("click", () => desencriptarDatos());
btnCopiar.addEventListener("click", () => copiarDatos() );

function encriptarDatos() {        
    let texto = entrada.value;
    let textoMinusculas = texto.toLowerCase();
    let textoEncriptado = textoMinusculas.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat")        
    sectionOutputPresentacion.style.display = "none";        
    sectionOutputEncriptacion.style.display = "flex";
    salida.textContent = textoEncriptado;    
}

function desencriptarDatos() {       
    let texto = entrada.value;
    let textoMinusculas = texto.toLowerCase();
    let textoEncriptado = textoMinusculas.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u")        
    sectionOutputPresentacion.style.display = "none";        
    sectionOutputEncriptacion.style.display = "flex";
    salida.textContent = textoEncriptado;  

}

function copiarDatos() {    
    navigator.clipboard.writeText(salida.textContent);
    entrada.value = ""; 
}











               


// btnCopiar.addEventListener("click", () => copiarDatos() );





// const copiarDatos = () => { 
   
// }   




























// const desencriptarDatos = ( copiarDatos) => {

//     desencriptar = copiarDatos.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u")

    
// }



    
    






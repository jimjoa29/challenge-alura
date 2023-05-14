const entrada = document.querySelector("#textarea");
const salida = document.querySelector("#salida");
const sectionOutputPresentacion = document.querySelector(".section-output-presentacion");
const sectionOutputEncriptacion = document.querySelector(".section-output-encriptacion");
const validacion = document.querySelector("#validacion");
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");


               

btnEncriptar.addEventListener("click", () => {
    encriptarDatos()      
});

// btnDesencriptar.addEventListener("click", () => {
//     desencriptarDatos()
// });

const encriptarDatos = () => {        
    let texto = entrada.value
    let textoMinusculas = texto.toLowerCase()
    let textoEncriptado = textoMinusculas.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat")        
    mostrarDatosEncriptados(textoEncriptado)
}

const mostrarDatosEncriptados = (textoEncriptado) => {
    console.log(textoEncriptado)

    sectionOutputPresentacion.style.display = "none";        
    sectionOutputEncriptacion.style.display = "flex";
    salida.textContent = textoEncriptado;
}


    
    






const btnEncriptar = document.querySelector("#btn-encriptar");
const entrada = document.querySelector("#textarea");
const salida = document.querySelector("#salida");
const btnCopiar = document.querySelector("#btn-copiar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");

const sectionOutputPresentacion = document.querySelector(
  ".section-output-presentacion"
);
const sectionOutputEncriptacion = document.querySelector(
  ".section-output-encriptacion"
);

btnEncriptar.addEventListener("click", () => encriptarDatos());
btnDesencriptar.addEventListener("click", () => desencriptarDatos());
btnCopiar.addEventListener("click", () => copiarDatos());

function encriptarDatos() {
  if (!entrada.value == "") {
    let texto = entrada.value;
    let textoMinusculas = texto.toLowerCase();
    let textoEncriptado = textoMinusculas
      .replace(/e/gim, "enter")
      .replace(/i/gim, "imes")
      .replace(/a/gim, "ai")
      .replace(/o/gim, "ober")
      .replace(/u/gim, "ufat");
    sectionOutputPresentacion.style.display = "none";
    sectionOutputEncriptacion.style.display = "flex";
    salida.textContent = textoEncriptado;
  } else {
    alert("Incresa una cadena de texto por favor");
  }
}

function desencriptarDatos() {
  if (!entrada.value == "") {
    let texto = entrada.value;
    let textoMinusculas = texto.toLowerCase();
    let textoEncriptado = textoMinusculas
      .replace(/enter/gim, "e")
      .replace(/imes/gim, "i")
      .replace(/ai/gim, "a")
      .replace(/ober/gim, "o")
      .replace(/ufat/gim, "u");
    sectionOutputPresentacion.style.display = "none";
    sectionOutputEncriptacion.style.display = "flex";
    salida.textContent = textoEncriptado;
  } else {
    alert("Incresa una cadena de texto por favor");
  }
}

function copiarDatos() {
  navigator.clipboard.writeText(salida.textContent);
  entrada.value = "";
}


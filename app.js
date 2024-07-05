//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"




//funcion para encriptar texto
function  textValue () {
   


    let valorInput = document.getElementById('encripter').value;


    const remplazos = { 
      "e": "enter",
      "i": "imes",
      "a": "ai",
      "o": "ober",
      "u": "ufat",

}
     let textoEncriptado = '';


   for (let i = 0; i < valorInput.length; i++) {
    let texto = valorInput[i];
    

    textoEncriptado += remplazos[texto] || texto;
   }

document.getElementById('desencriptar').innerText = textoEncriptado;



  
  }
 
   
    // funcion para desencriptar el texto
  function desencriptarTexto() {
    // Obtener el texto encriptado del elemento HTML
    let textoEncriptado = document.getElementById("desencriptar").innerText;

    // Definimos los reemplazos inversos
    const reemplazosInversos = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    let textoDesencriptado = textoEncriptado;

    // Usamos replace con cada par de reemplazo inverso
    for (let reemplazo in reemplazosInversos) {
        textoDesencriptado = textoDesencriptado.split(reemplazo).join(reemplazosInversos[reemplazo]);
    }

    // Mostrar el texto desencriptado
    document.getElementById("desencriptar").innerText = textoDesencriptado;
}




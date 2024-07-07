//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"




//funcion para encriptar texto
function  textValue () {
   


    let valorInput = document.getElementById('encripter').value.toLowerCase();



    

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
    let textoEncriptado = document.getElementById("encripter").value.toLowerCase();

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


function copyText() {
  const textToCopy = document.getElementById("desencriptar").innerText;

    //uso esta condicional en caso de que el id desencriptar este vacio envie un error alert o de lo contrario envie una alerta de que se copio con exito
   if (textToCopy === "") {
    alert('Error no se a copiado el texto')
   } else {
     // Usa la API del portapapeles para escribir el texto
  navigator.clipboard.writeText(textToCopy)

  .then(() => {
    alert('El texto se a copiado con exito!')
  
  })
  .catch(err => {
    console.error('Error al copiar el texto: ', err);
  });
   }
 

}
 

function reset() {
  
document.getElementById('encripter').value = "";
 document.getElementById('desencriptar').innerText = "";


}


function filtrarTexto(texto) {
  return texto.replace(/[^a-z\s]/gi, '');
}

document.getElementById('encripter').addEventListener('input', () => {
  let texto = document.getElementById('encripter').value;
  texto = filtrarTexto(texto);
  document.getElementById('encripter').value = texto;
});
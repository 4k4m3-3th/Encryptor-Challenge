function encriptar(palabra) {
  palabra = palabra.toLowerCase();
  let palabraEncriptada = "";
  for (let i = 0; i < palabra.length; i++) {
    switch (palabra[i]) {
      case "e":
        palabraEncriptada += "enter";
        break;
      case "i":
        palabraEncriptada += "imes";
        break;
      case "a":
        palabraEncriptada += "ai";
        break;
      case "o":
        palabraEncriptada += "ober";
        break;
      case "u":
        palabraEncriptada += "ufat";
        break;
      default:
        palabraEncriptada += palabra[i];
    }
  }
  return palabraEncriptada;
}

function desencriptar(palabra) {
  palabra = palabra.toLowerCase();
  let palabraDesencriptada = "";
  for (let i = 0; i < palabra.length; i++) {
    switch (palabra[i]) {
      case "e":
        if (palabra[i + 1] === "n" && palabra[i + 2] === "t" && palabra[i + 3] === "e" && palabra[i + 4] === "r") {
          palabraDesencriptada += "e";
          i += 4;
          break;
        }
      case "i":
        if (palabra[i + 1] === "m" && palabra[i + 2] === "e" && palabra[i + 3] === "s") {
          palabraDesencriptada += "i";
          i += 3;
          break;
        }
      case "a":
        if (palabra[i + 1] === "i") {
          palabraDesencriptada += "a";
          i++;
          break;
        }
      case "o":
        if (palabra[i + 1] === "b" && palabra[i + 2] === "e" && palabra[i + 3] === "r") {
          palabraDesencriptada += "o";
          i += 3;
          break;
        }
      case "u":
        if (palabra[i + 1] === "f" && palabra[i + 2] === "a" && palabra[i + 3] === "t") {
          palabraDesencriptada += "u";
          i += 3;
          break;
        }
      default:
        palabraDesencriptada += palabra[i];
    }
  }
  return palabraDesencriptada;
}

function copiarAlPortapapeles() {
  var textoACopiar = document.getElementById("resultado").innerHTML;
  navigator.clipboard.writeText(textoACopiar);
}
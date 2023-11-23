let texto = prompt("Escribe un texto", "texto aquí");

var mayusculas = false;
var minusculas = false;

for (let i = 0; i < texto.length; i++) {
  assci = texto.charCodeAt(i);

  if (
    (assci >= 65 && assci <= 90) ||
    (assci >= 97 && assci <= 122)
  ) {
    if (texto[i] == texto[i].toUpperCase()) {
      mayusculas = true;
    }

    if (texto[i] == texto[i].toLowerCase()) {
      minusculas = true;
    }
  }
}

texto_may = mayusculas ? "" : "no";
texto_min = minusculas ? "" : "no";
alert(
  "el texto " +
    texto_may +
    " tiene mayusculas y " +
    texto_min +
    " tiene minusculas."
);

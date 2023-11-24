let ar_temp = [];
let ar_temp_inversa = [];

let texto = prompt("Escribe un texto", "texto aquí");
for (let i = 0; i < texto.length; i++) {
  ascci = texto.charCodeAt(i);
  if ((ascci >= 65 && ascci <= 90) || (ascci >= 97 && ascci <= 122)) {
    ar_temp.push(texto[i].toUpperCase());
    ar_temp_inversa.push(texto[i].toUpperCase());
  }
}

ar_temp_inversa = ar_temp_inversa.reverse();
let palindromo = true;
for (let i = 0; i < ar_temp.length; i++) {
  if (ar_temp[i] != ar_temp_inversa[i]) {
    palindromo = false;
  }
}

if (ar_temp.length > 1) {
  if (palindromo) {
    alert("es palindromo");
  } else {
    alert("no es un palindromo");
  }
} else {
  alert("No hay suficientes letras");
}

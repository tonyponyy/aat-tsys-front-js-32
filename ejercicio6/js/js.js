var letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];
let validation = false;
while (!validation) {
  let DNI = prompt("Inserte su dni", "12345678P");
  letra = DNI.slice(-1)
  num = DNI.slice(0, -1)
  console.log("letra " + letra);
  if (DNI.length != 9 || !isNaN(letra)) {
    alert("formato incorrecto, escriba 8 numeros seguidos de una letra");
  } else {
    if (letras[num % 23] == letra.toUpperCase()) {
      validation = true;
    } else {
      alert("El dni es invalido.");
    }
  }
}
alert("DNI Valido !");

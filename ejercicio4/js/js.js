let ar = [true, 5, false, "hola", "adios", 2];

let texto_mayor_num = 0;
let texto_mayor = "";

for (let i = 0; i < ar.length; i++) {
  if (typeof ar[i] === "string") {
    if (ar[i].length > texto_mayor_num) {
      texto_mayor_num = ar[i].length;
      texto_mayor = ar[i];
    }
  }
  if (typeof ar[i] === "boolean") {
    console.log("el valor en la posición " + i + " es " + ar[i]);
  }
  if (typeof ar[i] === "number") {
    for (let j = 0; j < ar.length; j++) {
      if (typeof ar[j] === "number") {
        console.log(ar[i] + "+" + ar[j] + "=" + (ar[i] + ar[j]));
        console.log(ar[i] + "-" + ar[j] + "=" + (ar[i] - ar[j]));
        console.log(ar[i] + "/" + ar[j] + "=" + ar[i] / ar[j]);
        console.log(ar[i] + "*" + ar[j] + "=" + ar[i] * ar[j]);
        console.log(ar[i] + "%" + ar[j] + "=" + (ar[i] % ar[j]));
      }
    }
  }
}

console.log("el texto mas largo es: " + texto_mayor);

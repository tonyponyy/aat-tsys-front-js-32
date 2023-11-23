let factorial= (numero)=> {
    if (numero == 0 || numero == 1) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}
num = 5;
console.log("el factorial de "+num+" es "+factorial(num))
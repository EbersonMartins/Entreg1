function mdc(a, b) {

  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}


console.log("O MDC de " + a + " e " + b + " é: " + mdc(a, b));

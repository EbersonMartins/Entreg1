function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Exemplo de uso:
let num = 17;
if (isPrime(num)) {
  console.log(num + " é primo.");
} else {
  console.log(num + " não é primo.");
}

function somatorio(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Exemplo de uso:
let numeros = [1, 2, 3, 4, 5];
console.log("O somatório dos números é: " + somatorio(numeros));

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// Exemplo de uso:
let n = 8; // Gera os primeiros 8 termos da sequência de Fibonacci
console.log(
  "Os primeiros " +
    n +
    " termos da sequência de Fibonacci são: " +
    fibonacci(n).join(", ")
);

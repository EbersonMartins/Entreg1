function contarInteirosNoIntervalo(primeiro, N) {
  let contador = 0;
  for (let i = primeiro; i <= N; i++) {
    contador++;
  }
  return contador;
}


console.log(
  "Quantidade de valores inteiros no intervalo:",
  contarInteirosNoIntervalo(primeiro, N)
);

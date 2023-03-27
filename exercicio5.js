let numero = parseInt(prompt("Digite um número inteiro:"));
if (!isNaN(numero)) {
  alert(`Raiz quadrada: ${Math.sqrt(numero)}\nRaiz cúbica: ${Math.cbrt(numero)}\nPotência: ${numero ** 2}`);
} else {
  alert("Digite um número válido!");
}


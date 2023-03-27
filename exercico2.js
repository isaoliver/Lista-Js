let num = prompt("Escreva o número inteiro de 1 a 10:");
num = parseInt(num);
// Verifica se o número digitado é válido
if (num < 1 || num > 10 || isNaN(num)) {
  document.write("Número inválido. Por favor, digite um número inteiro de 1 a 10.");
} else {
  // Calcula e exibe a tabuada do número
  for (let i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num*i) + "<br>");
  }
}


console.log("Números ímpares menores que 100: ");
for (let i = 1; i < 100; i += 2) {
  if (i % 2 !== 0) {
    console.log(`Número ${i}: Ímpar`);
  } else {
    console.log(`Número ${i}: Par`);
  }
}


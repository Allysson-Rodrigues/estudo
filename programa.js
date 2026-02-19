//Importações do projeto
let teclado = require("prompt-sync")();

//Entrada de dados

let valor1 = teclado("Digite o primeiro valor:");
let valor2 = teclado("Digite o segundo valor:");

//Processamento de dados
let v1 = parseFloat(valor1);
let v2 = parseFloat(valor2);
let soma = v1 + v2;

// Saida de dados
//console.log('Você digitou o valor:', valor1);
//console.log(`Você digitou o valor: ${valor1}`);
console.log(`Resultado:${soma}`);

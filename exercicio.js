//Importações do projeto
var input = require("fs").readFileSync("entrada.txt", "utf8");
var lines = input.split("\n");

//Entrada de dados

let valor1 = lines.shift();
let valor2 = lines.shift();

//Processamento de dados
let v1 = parseInt(valor1);
let v2 = parseInt(valor2);
let soma = v1 + v2;

// Saida de dados
//console.log('Você digitou o valor:', valor1);
//console.log(`Você digitou o valor: ${valor1}`);
console.log(`Resultado:x = ${soma}`);


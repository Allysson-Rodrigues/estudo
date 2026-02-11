let input = require("fs").readFileSync("entrada.txt", "utf8");

let lines = input.split(" "); //3 2

let codigo = +lines[0];
let quantidade = +lines[1];
let total = 0;

switch (codigo) {
  case 1:
    total = quantidade * 4.0;
    break;
  case 2:
    total = quantidade * 4.5;
    break;
  case 3:
    total = quantidade * 5.0;
    break;
  case 4:
    total = quantidade * 2.0;
    break;
  case 5:
    total = quantidade * 1.5;
    break;

  default:
    break;
}

console.log(`Total: R$ ${total.toFixed(2)}`);

//var lines = input.split("\n");
//3
//2

//console.log("input :>>", input);
//console.log("lines :>>", lines);
//console.log("lines[1] :>>", lines[0]);

//let data = "23-06-1986";

//let partes = data.split("-");
//console.log(partes[0]);

//let nome = "Angelo Gonçalves da Luz";
//console.log(nome.split(" ")[0]);

/*
<
<=
>
>=
!=
Sempre retonar um booleano (True ou false)
||(Pelo menos um dos testes precisa ser verdade)
&& (todos os testes precisam ser verdadeiros)
*/

let idade = 17;

if (idade >= 18 && idade <= 80) {
  console.log("Acesso permitido!");
} else if (idade == 17) {
  console.log("Falta apenas um ano para você, relaxa!");
} else {
  console.log("Acesso negado!");
}

//Condicionar ternário (Teste ? se true : se false)
let mensagem =
  idade >= 18 && idade <= 80 ? "Acesso permitido!" : "Acesso negado!";
console.log(mensagem);

//Switch ...case
let mes = 3;

switch (mes) {
  case 1:
    console.log("janeiro");

    break;
  case 2:
    console.log("fevereiro");
    break;
  case 3:
    console.log("março");
    break;
  case 4:
    console.log("abril");
    break;
  default:
    console.log("Mês inválido!");
    break;
}

console.log("Encerrou!");

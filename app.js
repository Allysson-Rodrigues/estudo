//VAR LET e Const
//Proteção a sobrescrita
let name ="Allysson Rodrigues";
name = "Angelo Luz";

console.log('name :> ', name);

//Escopo
if(true){
  let company = 'Brainny';
  console.log('company :>>', company);
}

//Const primitivo
let address ='Rua1';
address = 'Rua 2';
console.log('adress :>>', address);
//Const referência
const person = {name: 'Allysson Rodrigues', company: 'Senac', address: 'Rua3'};
//const person = {name: 'Stefanie Mariano', company: 'Senac 2', address: 'Rua4'};
person.name ='Stefanie Mariano';
console.log('person :>>', person);

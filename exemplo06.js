import dados from "./dados/alunos.json" with { type: "json" };

let nome = dados[0].nome;
let turma = dados[0].turma;

//console.log(dados);
console.log(` ${nome} - ${turma}`);

import dados from "exemplo01.js" with { type: "json" };

let dados01 = exemplo01;

console.log(dados01);

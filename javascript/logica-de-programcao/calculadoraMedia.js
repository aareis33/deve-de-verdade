 // calcular a média de 3 notas escolares
 // imprimir se o aluno foi reprovado, recuperação ou aprovado

let nota1 = 8;
let nota2 = 7;
let nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  console.log("Aprovado");
} else if (media >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
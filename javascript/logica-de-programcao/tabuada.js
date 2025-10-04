let numero = 5;
//${...} é usado para interpolar variáveis dentro de strings
//Depois que o bloco de código é executado em cada 
//repetição, esta expressão incrementa o valor de i em 1 (i++ é o mesmo que i = i + 1)
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
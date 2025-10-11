// faça uma funçao que simula uma calculadora
// ela ira receber 2 numero e um sinal representando a operaçao
// deve retornar o valor

function calculadora(numeroA, numeroB, sinal){
    switch(sinal) {
        case "+":
            return numeroA + numeroB;
        case "-":
            return numeroA - numeroB;
        case "*":
            return numeroA * numeroB;
        case "/":
            return numeroA / numeroB;
        default:
            return "Operação inválida";
    }
}

let calculo = calculadora(2, 3, "+");
console.log(calculo)
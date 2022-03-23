const imprimeNoTerminal = (num1: number, num2: number) => {
const soma: number = num1 + num2;
const subtracao: number = num1 - num2;
const multiplicacao: number = num1 * num2;
let maiorNumero: any;
if (num1 > num2) {
    maiorNumero = num1
} else if (num1 < num2) {
    maiorNumero = num2
} else {
    maiorNumero = 'São iguais!'
}

console.log(`A soma é ${soma}, a subtração é ${subtracao}, a multiplicação é ${multiplicacao} e o maior número é ${maiorNumero}`)
}
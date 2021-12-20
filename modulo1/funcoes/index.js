/* Exercicios de Interpretação 
1. a)  function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) ----> 10
console.log(minhaFuncao(10)) ----> 50
b) Se o console.log fosse tirado a operação aconteceria, mas não
 imprimiria as duas operações.

2. let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a) A função colocaria todas as letras em minúsculo e verificaria se
cenoura está inclusa no texto escrito pelo usuário e o console.log imprimiria 
no console com essa alteração. E a função é não ter a necessidade de escrever mais 
linhas de codigos para cada vez que seja necessário imprimir isso no console
 b) i. eu gosto de cenoura true
    ii. cenoura é bom pra vista true
    iii. cenouras crescem na terra false
*/

// Exercicios de escrita
// 1. a)

// function mensagem(){
//    console.log("Eu sou Udimile, tenho 24 anos, moro em Salvador, sou estudante e amo animais")

// }
// mensagem()

// b)
// function informacoes(nome, idade, cidade, ocupacao){
//     return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}.`
// }
// console.log(informacoes("Udimile", 24, "Salvador", "Estudante"))

//2. a)

// function soma(num1, num2){
//     return num1 + num2
// }
// console.log(soma(3, 5))

//b)
// function booleano(num1, num2){
//     return num1 >= num2 
// }
// console.log(booleano(3, 4))

//c) 
// function parImpar(num1){
//  const resto = num1%2
//   return resto == 0   
// }

// //d) 
// function frase(mensagem){
//     const tamanho = mensagem.length
//     const fraseEmMaiusculo = mensagem.toUpperCase()
//     console.log(tamanho, fraseEmMaiusculo)
// }
// frase("Eu sou uma estudante")

//3.
// function soma(num1, num2){
//     return num1 + num2
// }
// function subtracao(num1, num2){
//     return num1 - num2
// }
// function multiplicacao(num1, num2){
//     return num1 * num2
// }
// function divisao(num1, num2){
//     return num1 / num2
// }

// const numero1 = Number(prompt("Digite um número."))
// const numero2 = Number(prompt("Digite outro número"))

// console.log("Números inseridos: ", numero1, numero2)
// console.log("Soma: ",(soma(numero1, numero2)))
// console.log("Diferença: ",(subtracao(numero1, numero2)))
// console.log("Multiplicação: ",(multiplicacao(numero1, numero2)))
// console.log("Divisão: ",(divisao(numero1, numero2)))

//Desafio
//1
//a)
// const imprimeNoConsole = (paramUm) => console.log(paramUm)
//b) 
// const doisValores = (num1, num2) => {
    // let soma = (num1 + num2)
    // return imprimeNoConsole(soma)
// }
//  doisValores(5,7)
//2
function teoremaDePitagoras(cateto1, cateto2){
    const hipotenusa = Math.sqrt(cateto1**2 + cateto2**2)
    return hipotenusa.toFixed(2)
}

console.log(teoremaDePitagoras(4,7))
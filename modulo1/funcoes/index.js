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

//function mensagem(){
//    "Eu sou Udimile, tenho 24 anos, moro em Salvador, sou estudante e amo animais"
//}
//console.Log(mensagem())
// b)
function informacoes(nome, idade, cidade, ocupacao){
    nome = "Udimile"
    idade = 24
    cidade = "Salvador"
    ocupacao = "Estudante";

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}.`)
}


//2. a)

//let num1 = prompt("Digite um número.")
//let num2 = prompt("Digite outro número.")
//function num(num1, num2){
//    num = num1 + num2 
//return num    
//}
//console.log(num)


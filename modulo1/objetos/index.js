// Exercicios de Interpretação de Código
/* 1. const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2]);

a) O console irá imprimir: Matheus Nachtergaele, Virginia Cavendish e 
Globo 14h.

2.const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
 
 a) console.log(cachorro) ---> Juca, 3, srd
    console.log(gato) -----> Juba, 3 , srd
    console.log(tartaruga)----> Jubo, 3, srd
 b) Os três pontos faz uma copia exata do objeto.

3. function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a) false
    undefined
b) O valor que foi impresso no console foi undefined pq o valor não foi definido no código.
*/
//Exercicio de escrita de código
//1.
// const pessoa = {
//     nome: "Udimile",
//     apelidos: ["Mile", "Udi", "UD"]
// }
// function frase(pessoa){
//     return `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
// }
// console.log(frase(pessoa))  

// const pessoa2 = {
//     ...pessoa,
//     apelidos: [
//         "Milinha", "Mimi", "Milemole"
//     ]
// }
// console.log(frase(pessoa2))
//2. 
// const pessoa3 = {
//     nome: "Ana Lúcia",
//     idade: 54,
//     profissao: "empresária" 
// }
// function informacoesPessoa3(pessoa3){ 
//     return[
//         pessoa3.nome,
//         pessoa3.nome.length,
//         pessoa3.idade,
//         pessoa3.profissao,
//         pessoa3.profissao.length
//     ]

// }
// console.log(informacoesPessoa3(pessoa3))
//3.
// const carrinho = []
// const fruta1 = {
//     nome :"goiaba",
//     disponivel : true
// }
// const fruta2 = {
//     nome : "uva",
//     disponivel : true
// }
// const fruta3 = {
//     nome : "banana",
//     disponivel : false

// }

// function colocandoNoCarrinho(fruta){
//     carrinho.push(fruta)
    
// }
// colocandoNoCarrinho(fruta1)
// colocandoNoCarrinho(fruta2)
// colocandoNoCarrinho(fruta3)

// console.log(carrinho)


//Desafio
//1.  
// function dadosDoUsuario (){
// const pessoa = {
// 	nome: prompt("Qual o seu nome?"),
// 	idade: Number(prompt("Qual a sua idade?")),
// 	profissao: prompt("Qual sua profissão?")
// }
// 	console.log(pessoa)
// 	console.log(typeof pessoa)
// }
// dadosDoUsuario()

//2.
//  function filmes(){
// 	 const filme1 = {
// 		 anoDeLancamento: 2004,
// 		 nome: "De repente 30"
// 	 }
// 	 const filme2 = {
// 		 anoDeLancamento: 2010,
// 		 nome: "Amor e outras drogas"
// 	 }
// 	 const antesDoSegundo = filme1.anoDeLancamento > filme2.anoDeLancamento
// 	 const mesmoAno = filme1.anoDeLancamento == filme2.anoDeLancamento

// 	 console.log(`O primeiro filme foi lançado antes do segundo? ${antesDoSegundo}`)
// 	 console.log(`O primeiro filme foi lançado no mesmo ano que o segundo? ${mesmoAno}`)
//  }

//  filmes()

//3.
// function controleDeEstoque(fruta){
// 	return {...fruta, disponivel: !fruta.disponivel}

// }
// console.log(controleDeEstoque(fruta1))


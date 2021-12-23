/*1. Leia o código abaixo:
    
    
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)
    
    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    ```
    
    a) Explique o que o código faz. Qual o teste que ele realiza? 

    - Se o número que o usuário digitou for par o console imprime Passou no teste, senão ele imprime que Não passou no teste.
    
    b) Para que tipos de números ele imprime no console "Passou no teste"? 
    
    - Números pares. 

    c) Para que tipos de números a mensagem é "Não passou no teste"?
    
    - Números impares.

    2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    ```
    
    a) Para que serve o código acima?
    
    - O código serve para dar preço aos intens. 

    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    
    - O preço da fruta, maçã é R$ 2,25
    
    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
    
    -  O preço da fruta, é R$ 5

3. Leia o código abaixo:
    

    const numero = Number(prompt("Digite o primeiro número."))
    
    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }
    
    console.log(mensagem)
    ```
    
    a) O que a primeira linha está fazendo?
    
    - Perguntando ao usuário o primeiro número e convertendo a string dada pelo prompt em number.
    
    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

    - undefined     
    
    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.


    
    */
// Exercicios de escrita de código
//1.
// let idade = Number(prompt("Qual a sua idade?"))
// if(idade >= 18){
//     console.log("Você pode dirigir")
// }  else{
//     console.log("Você não pode dirigir")
// }

// 2. 
// const turno = prompt("Em que turno você estuda? Digite M para matutino, V para vespertino ou N para noturno")
// const turnoEmMaiusculo = turno.toUpperCase()
// if (turnoEmMaiusculo === "M"){
//     console.log("Bom dia!")
// } else if(turnoEmMaiusculo === "V"){
//     console.log("Boa tarde!")
// } else if(turnoEmMaiusculo === "N"){
//     console.log("Boa noite!")
// } else{console.log("Tente novamente")}

// 3.
// const turno = prompt("Em que turno você estuda? Digite M para matutino, V para vespertino ou N para noturno")
// let turnoEmMaiusculo = turno.toUpperCase()
// let frase 

// switch (turnoEmMaiusculo) {
//     case "M":
//         frase = "Bom dia!"
//         break
//     case "V":
//         frase = "Boa tarde!"
//         break
//     case "N":
//         frase = "Boa Noite"
//         break
//     default:
//         frase = "Tente Novamente"
//         break        
// }
// console.log(frase)

// 4.
// const genero = prompt("Qual o gênero do filme que iremos assistir?")
// const generoMinusculo = genero.toLowerCase()
// const valor = Number(prompt("Qual o valor do ingresso."))
// if (generoMinusculo == "fantasia"){
//     if(valor <= 15){
//         console.log("Bom filme!")
//     } else{
//         console.log("Escolha outro filme :(")
//     }
// } else {
//     console.log("Escolha outro filme :(")
// }

// Desafio
//1.
// const genero = prompt("Qual o gênero do filme que iremos assistir?")
// const generoMinusculo = genero.toLowerCase()
// const valor = Number(prompt("Qual o valor do ingresso."))
// if (generoMinusculo == "fantasia"){
//     if(valor <= 15){
//       const lanchinho = prompt("Qual lanchinho você vai comprar?")
//         console.log("Bom filme!")
//       console.log(`Aproveite o seu ${lanchinho}!`)
//     } else{
//         console.log("Escolha outro filme :(")
//     }
// } else {
//     console.log("Escolha outro filme :(")
// } /

//2.
// const nomeCompleto = prompt("Qual o seu nome completo?")
// const tipoDeJogo = prompt("Qual o tipo de jogo. Sendo, DO - doméstico e IN - internacional").toUpperCase();
// const etapaDoJogo = prompt("Qual a etapa do jogo? Sendo, SF - Semifinal, DT - Decisão de terceiro lugar e FI - Final").toUpperCase();
// const categoria = Number(prompt("Qual a categoria. Sendo as opções 1, 2, 3 e 4"))
// const quantidadeDeIngressos = Number(prompt("Qual a quantidade de ingressos."))
// let valorDoIngresso;

// if(tipoDeJogo === "DO"){
//   if(etapaDoJogo === "SF"){
//     if(categoria === 1){
//       valorDoIngresso = 1320
//     } else if(categoria === 2){
//       valorDoIngresso = 880
//     } else if(categoria === 3){
//       valorDoIngresso = 550
//     } else if(categoria === 4) {
//       valorDoIngresso = 220
//     }
//   } else if(etapaDoJogo === "DT"){
//     if(categoria === 1){
//       valorDoIngresso = 660
//     } else if(categoria === 2){
//       valorDoIngresso = 440 
//     } else if(categoria === 3){
//       valorDoIngresso = 330
//     } else if(categoria === 4){
//       valorDoIngresso = 170
//     }
//   } else if(etapaDoJogo === "FI"){
//     if(categoria === 1){
//       valorDoIngresso = 1980
//     } else if(categoria === 2){
//       valorDoIngresso = 1320 
//     } else if(categoria === 3){
//       valorDoIngresso = 880
//     } else if(categoria === 4){
//       valorDoIngresso = 330
//     }
//   } 
// }
// else if(tipoDeJogo=== "IN"){
  
//     if(etapaDoJogo === "SF"){
//       if(categoria === 1){
//         valorDoIngresso = 1320 * 4.10
//       } else if(categoria === 2){
//         valorDoIngresso = 880 * 4.10
//       } else if(categoria === 3){
//         valorDoIngresso = 550 * 4.10
//       } else if(categoria === 4) {
//         valorDoIngresso = 220 * 4.10
//       }
//     } else if(etapaDoJogo === "DT"){
//       if(categoria === 1){
//         valorDoIngresso = 660 * 4.10
//       } else if(categoria === 2){
//         valorDoIngresso = 440 * 4.10 
//       } else if(categoria === 3){
//         valorDoIngresso = 330 * 4.10
//       } else if(categoria === 4){
//         valorDoIngresso = 170 * 4.10
//       }
//     } else if(etapaDoJogo === "FI"){
//       if(categoria === 1){
//         valorDoIngresso = 1980 * 4.10
//       } else if(categoria === 2){
//         valorDoIngresso = 1320 * 4.10 
//       } else if(categoria === 3){
//         valorDoIngresso = 880 * 4.10
//       } else if(categoria === 4){
//         valorDoIngresso = 330 * 4.10
//       }
//     }
// }
// let valorTotal = valorDoIngresso * quantidadeDeIngressos

// let textoTipo
// if(tipoDeJogo === "DO"){
//   textoTipo = "Nacional"
// } else if(tipoDeJogo === "IN"){
//   textoTipo = "Internacional"
// } else{
//   textoEtapa = "Erro"
// }

// let textoEtapa
// if(etapaDoJogo === "SF"){
//   textoEtapa = "Semifinal"
// } else if(etapaDoJogo === "DT"){
//   textoEtapa = "Decisão do 3° lugar"
// } else if (etapaDoJogo === "FI") {
//   textoEtapa = "Final"
// } else{
//   textoEtapa = "Erro"
// }

// console.log("--- Dados da compra ---")
// console.log(`Nome do cliente: ${nomeCompleto}`)
// console.log(`Tipo de jogo: ${textoTipo}`)
// console.log(`Etapa do jogo: ${textoEtapa}`)
// console.log(`Categoria: ${categoria}`)
// console.log(`Quantidade de ingressos: ${quantidadeDeIngressos} ingressos`)
// console.log("--- Valores ---")
// console.log(`Valor do ingresso:  ${valorDoIngresso}`)
// console.log(`Valor total: ${valorTotal} `)
  

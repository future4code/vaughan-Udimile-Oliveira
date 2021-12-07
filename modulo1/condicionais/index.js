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

//2. 
// const turno = prompt("Em que turno você estuda? Digite M para matutino, V para vespertino ou N para noturno")
// const turnoEmMaiusculo = turno.toUpperCase()
// if (turnoEmMaiusculo === "M"){
//     console.log("Bom dia!")
// } else if(turnoEmMaiusculo === "V"){
//     console.log("Boa tarde!")
// } else if(turnoEmMaiusculo === "N"){
//     console.log("Boa noite!")
// } else{console.log("Tente novamente")}

//3.
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

//4.
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


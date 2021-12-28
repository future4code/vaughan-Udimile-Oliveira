/**
 Exercicios de interpretação de código
1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    
    
    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)
  
  -  0 1 2 3 4 
    
2. Leia o código abaixo:
    

    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
    		console.log(numero)
    	}
    }
 10 11 12 15
    
    a) O que vai ser impresso no console?
    
    10 11 12 15

    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
    
3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
    
   
    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    }

 */

// 1.
//  let quantidadeDePet = Number(prompt("Quantos animais de estimação você tem?"))
//  const arraysDeNomesDePet = []
//  if (quantidadeDePet === 0){
//     console.log("Que pena! Você pode adotar um pet!")
//  }else{
//     let i = 0
//     while (i < quantidadeDePet){
//         arraysDeNomesDePet.push(prompt("Qual o nome do seu pet?"))
//         i++
//      }
//      } console.log(arraysDeNomesDePet)
//  2.
// const arrayOriginal = [10, 30, 12, 16, 25, 70, 55, 21]
// let tamanhoDoArray = arrayOriginal.length
// a)
// function imprimeCadaValorDoArrayOriginal(arrayOriginal){
//   for(let i = 0; i <= tamanhoDoArray-1; i++){
//     console.log(arrayOriginal[i])
//   }
// }
// imprimeCadaValorDoArrayOriginal(arrayOriginal)
// // b)
// function imprimeCadaValorDoArrayOriginalDividido(arrayOriginal){
//   for(let i = 0; i <= tamanhoDoArray-1; i++){
//     console.log(arrayOriginal[i]/10)
//   }
// }
// imprimeCadaValorDoArrayOriginalDividido(arrayOriginal)

// //c)
// function imprimeNumerosPares(arrayOriginal){
// let arrayDeNumerosPares = [] 
//  for (let i = 0; i <= tamanhoDoArray-1 ; i++){
//    if(arrayOriginal[i] % 2 === 0){
//      arrayDeNumerosPares.push(arrayOriginal[i])
//    }
//  }
// console.log(arrayDeNumerosPares)
// }
// imprimeNumerosPares(arrayOriginal)

// d) 
// function imprimeStrings(arrayOriginal){
//   let arrayDeStrings = []
//   for (let i = 0; i <= tamanhoDoArray-1; i++){
//     arrayDeStrings.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
//   }
//   console.log(arrayDeStrings)
// }
// imprimeStrings(arrayOriginal)

// e)
// let valorMaximo = -Infinity
// let valorMinimo = Infinity

// function maiorNumero(arrayOriginal) {
//   for(let i = 0; i <= tamanhoDoArray-1; i++){
//     if(arrayOriginal[i]>= valorMaximo){
//        valorMaximo = arrayOriginal[i]
//     }
//     if(arrayOriginal[i]< valorMinimo){
//       valorMinimo = arrayOriginal[i]
//    }
//   }
//   console.log(`O maior valor é ${valorMaximo} e o menor é ${valorMinimo}`)
  
// }
// maiorNumero(arrayOriginal)

//Desafio
//1 e 2
console.log("Vamos Jogar")
// let primeiroNumero = Number(prompt("Primeiro jogador, qual é o seu número, de 1 a 100"))
let primeiroNumero = Math.floor(Math.random()*100)
let chute = Number(prompt("Qual o seu chute. De 0 a 100"))
let i = 1
while(primeiroNumero !== chute){
  console.log(`O número chutado foi: ${chute}`)
  if(primeiroNumero>chute){
    console.log("ERRRRRRRROU, é maior")
  } else if(primeiroNumero<chute){
    console.log("ERRRRRRRROU, é menor")
  }
  i++
  chute = Number(prompt("Qual o seu chute. De 0 a 100"))
}
console.log("Acertou!")
console.log(`O número de tentativas foi: ${i}`)
 
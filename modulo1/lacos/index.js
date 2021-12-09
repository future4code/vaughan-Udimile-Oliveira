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
 let quantidadeDePet = Number(prompt("Quantos animais de estimação você tem?"))
 const arraysDeNomesDePet = []
 if (quantidadeDePet === 0){
    console.log("Que pena! Você pode adotar um pet!")
 }else{
    let i = 0
    while (i < quantidadeDePet){
        arraysDeNomesDePet.push(prompt("Qual o nome do seu pet?"))
        i++
     }
     } console.log(arraysDeNomesDePet)
 
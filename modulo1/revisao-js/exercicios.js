// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   //return array.reverse()
   let arrayInvertido = array.map(function(elemento, i, array){
    return array[array.length - i - 1]
})
return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function compararNumeros(a, b) {
        return a - b;
      })

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter(function numerosPares(a){
        return (a % 2) === 0
    })
    
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    array = array.filter (function numerosPares(a){
        return (a % 2) === 0})
    array = array.map(function(a){
        return a**2
    })
        return array
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    array = array.sort(function compararNumeros(a, b) {
        return b - a;
      }) 

      return array[0]
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    function retornaObjetoEntreDoisNumeros(num1, num2) {
        function numeroMaior() {if (num1 > num2){
            return num1
        } else {return num2}}
        function numeroMenor(){
        if (num1 < num2){
            return num1
        } else {return num2}}
        const objeto = {
            maiorNumero: numeroMaior(),
            maiorDivisivelPorMenor: numeroMaior() % numeroMenor() === 0,
            diferenca: numeroMaior() - numeroMenor(),
        }
        return objeto
        }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const novoArray = []
    let i = 0
    while( novoArray.length < n){
        if(i % 2 === 0){
            novoArray.push(i)
        }
        i++
    }
    return novoArray
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let triangulo
    if(ladoA === ladoB && ladoB === ladoC){
     triangulo = "Equilátero"    
 } else if(ladoA !== ladoB && ladoB!== ladoC && ladoC !== ladoA){
    triangulo = "Escaleno" 
 } else{
     triangulo = "Isósceles"
 }
 return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array = array.sort(function compararNumeros(a, b) {
        return b - a;
      }) 
      novoArray = [array[1], array[array.length -2 ]]
    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let atoresComEspaco = ""
    for(let i=0; i < filme.atores.length; i++){
        if(i === filme.atores.length - 1){
            atoresComEspaco += filme.atores[i]
        } else{
            atoresComEspaco += filme.atores[i] + ", "
        }
    }
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresComEspaco}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const outraPessoa = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return outraPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let autorizadas = []
    for(const pessoa of pessoas){
        if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60){
            autorizadas.push(pessoa)
        }
        
    } return autorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const naoAutorizadas = []
    for(let pessoa of pessoas){
        if(pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60){
            naoAutorizadas.push(pessoa)
        }
        
    } return naoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
 
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const consultasOrdenadas = consultas.map(nome.sort())
        return consultasOrdenadas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
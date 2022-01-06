// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    
    return array.sort(function compararNumeros(a, b) {
        console.log(array.sort())
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

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`

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
    pessoa = pessoa.map(altura >= 1.5 || idade >= 14 || idade < 60)
            return pessoa
        
    
        
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
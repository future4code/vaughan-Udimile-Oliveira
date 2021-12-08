// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Qual é a altura do retângulo?"))
  const largura = Number(prompt("Qual é a largura do retângulo?"))
  console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Qual é o ano atual?"))
  const anoDeNascimento = Number(prompt("Qual é o ano em que você nasceu?"))
  console.log(anoAtual - anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const alturaAoQuadrado = altura * altura
  return peso / alturaAoQuadrado
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt("Qual o seu nome.")
  idade = Number(prompt("Qual sua idade."))
  email = prompt("Qual o seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const coresFavoritas = []
  const cor1 = prompt("Digite sua cor favorita.")
  const cor2 = prompt("Digite outra cor favorita.")
  const cor3 = prompt("Digite mais uma cor favorita.")
  coresFavoritas.push(cor1, cor2, cor3)
  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
   return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanhoString1 = string1.length
  const tamanhoString2 = string2.length
  return tamanhoString1 === tamanhoString2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const tamanhoDoArray = array.length
  return array[tamanhoDoArray - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const string1EmMaiusculo = string1.toUpperCase()
  const string2EmMaiusculo = string2.toUpperCase()
  return string1EmMaiusculo === string2EmMaiusculo
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
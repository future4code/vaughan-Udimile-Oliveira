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
  const ultimoElemento = array[array.length -1]
  const primeiroElemento = array[0]
  array[0] = ultimoElemento
  array[array.length -1]= primeiroElemento
  return array 

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
  const anoAtual = Number(prompt("Qual é o ano atual?"))
  const anoDeNascimento = Number(prompt("Qual é o ano em que você nasceu?"))
  const anoQueORGFoiEmitido = Number(prompt("Em que ano sua carteira de identidade foi emitida?"))
  
  const idade = (anoAtual - anoDeNascimento)
  const idadeDoRG = (anoAtual - anoQueORGFoiEmitido)
 
  const cond20 = idade <= 20 && idadeDoRG >= 5
  const cond20A50 = idade > 20 && idade <= 50 && idadeDoRG >= 10
  const cond50Acima = idade > 50 && idadeDoRG >= 15

  console.log(cond20 || cond20A50 || cond50Acima)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
 const cond1 = (ano % 400) === 0;
 const cond2 = (ano % 4 === 0) && (ano % 100 !== 0) 
 
 return cond1 || cond2
  
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
const maisDe18 = prompt("Você tem mais de 18 anos?")
const ensinoMedioCompleto = prompt("Você tem o ensino médio completo?")
const disponibilidade = prompt("Você tem disponibilidade exclusiva durante os horários do curso?")

console.log(maisDe18 === "sim" && ensinoMedioCompleto === "sim" && disponibilidade === "sim")

}
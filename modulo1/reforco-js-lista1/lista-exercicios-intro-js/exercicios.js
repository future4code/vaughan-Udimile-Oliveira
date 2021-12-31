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
 let altura = Number(prompt("Qual a altura do retângulo?"))
 let largura = Number(prompt("Qual a largura do retângulo?"))
 console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
 let anoAtual = Number(prompt("Qual o ano atual?"))
 let anoDeNascimento = Number(prompt("Em que ano você nasceu?"))
 console.log(anoAtual - anoDeNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
let IMC = peso / (altura*altura)
  return IMC.toFixed(2)


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual o seu nome?")
  const idade = Number(prompt("Qual a sua idade."))
  const email = prompt("Qual o seu email?")
  console.log( `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let i = 0
  const arrayDeCores = []
  while(i < 3){
  arrayDeCores.push(prompt(`Qual a cor`))
  i++
  } 
console.log (arrayDeCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.ToUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length-1]
  array[0] = ultimoElemento
  array[array.length-1]= primeiroElemento
 return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
 return string1.toLowerCase() == string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
const anoAtual = Number(prompt("Qual o ano atual?"))
const anoDeNascimento = Number(prompt("Qual o ano de nascimento."))
const anoDeEmissaoRG = Number(prompt("Em que ano foi emitido o RG."))

const idade = anoAtual - anoDeNascimento
const tempoDeEmissaoRG = anoAtual - anoDeEmissaoRG

const condicao1 = idade <= 20 && tempoDeEmissaoRG >= 5 
const condicao2 = idade > 20 && idade <= 50 && tempoDeEmissaoRG >= 10
const condicao3 = idade > 50 && tempoDeEmissaoRG >= 15 

console.log( condicao1 || condicao2 || condicao3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
 const condicao1 = ano % 400 ===  0
 const condicao2 = ano % 4 === 0 && ano % 100 !== 0 
    return condicao1 || condicao2
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
const idade = prompt("Você tem mais de 18 anos?")
const ensinoMedio = prompt("Você tem ensino médio completo?")
const disponibilidade = prompt("Você tem disponibilidade?")
console.log(idade === "sim" && ensinoMedio === "sim" && disponibilidade === "sim")
}
// 1. console.log (a, b) ----> a = 10 e b = 5
// 2. console.log (a, b, c) ---> a= 10 , b= 10 e c= 10
// 3.  let p = prompt("Quantas horas você trabalha por dia?")
//let t = prompt("Quanto você recebe por dia?")
//alert(`Voce recebe ${t/p} por hora`) 
// Resposta aqui: t= horasPorDia p= recebePorDia

// 1. 
let nome;
let idade;

console.log (typeof nome);
console.log (typeof idade);

// Houve essa resposta por que a variavel não foi atribuida.

nome = prompt("Qual o seu nome?")
idade = prompt("Qual sua idade?")

console.log (typeof nome)
console.log (typeof idade)

// O prompt recebe tudo que é do usuário como string
//2. 

console.log("Olá", nome,", você tem ", idade ," anos." );

perguntaUm = prompt ("Você é estudante?")
perguntaDois = prompt ("Você é destro?") 
perguntaTres = prompt ("Está chovendo?")

console.log("Você é estundante? - ", perguntaUm)
console.log("Você é destro? - ", perguntaDois)
console.log("Está chovendo? - ", perguntaTres)

//3.

let a = 10
let b = 25

c = a 
a = b
b = c 

console.log ("O novo valor de a é", a)
console.log ("O novo valor de b é", b)

// Desafio 

let numeroUm = prompt("Me dê um número.");
let numeroDois = prompt("Me dê outro número."); 
numeroUm = Number(numeroUm); 
numeroDois = Number(numeroDois);
console.log(numeroUm + numeroDois);
console.log(numeroUm * numeroDois);
//Exercicio de interpretação
//1.a. indefinido
// b. null
// c. 11
// d. 3
// e. [3, 19, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9
// 2.Console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// SUBI NUM ÔNIBUS EM MIRROCOS 27 


// Exercicio de escrita
/*/1.

let nomeDoUsuario = prompt("Qual o seu nome?")
let emailDoUsuario = prompt("Qual seu email?")

 
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario} !`);
*/
/*/ 2.
let comidasPreferidas = [ 'strogonoff', 'batata frita', 'hamburger', 'sequilhos', 'lasanha']
console.log(comidasPreferidas)
const mensagem = "Essas são as minhas comidas preferidas: "
console.log(mensagem, comidasPreferidas[0],'\n', mensagem, comidasPreferidas[1],'\n', mensagem, comidasPreferidas[2],'\n', mensagem, comidasPreferidas[3],'\n', mensagem, comidasPreferidas[4])

let comidaUsuario = prompt("Qual a sua comida preferida?")

comidasPreferidas.splice(1, 1, comidaUsuario)

console.log(comidasPreferidas)    

// 3. 
let listaDeTarefas = []
listaDeTarefas.push(
    prompt("Digite uma tarefa diária"),
    prompt("Digite mais uma tarefa diária"),
    prompt("Digite mais uma tarefa diária")
    )
console.log(listaDeTarefas)
let tarefaRealizada = prompt("Digite o índice das suas tarefas realizadas: 0, 1 ou 2")
listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)*/


//desafio/
//1.
const string = "Gostaria que essa frase fosse um array"
const stringToArray = string.split(" ");
console.log(stringToArray)
//2.
const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
console.log(`Abacaxi está no índice ${array.indexOf("Abacaxi")} e ${array.length} é o tamanho do Array`)



/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de Blackjack.")
    if (confirm("Quer iniciar uma nova rodada?")){
      let cartaUsuario1 = comprarCarta()
      let cartaUsuario2 = comprarCarta()
      let cartaComputador1 = comprarCarta()
      let cartaComputador2 = comprarCarta()
      
      pontuacaoDoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
      pontuacaoDoComputador= cartaComputador2.valor + cartaComputador1.valor
      console.log(pontuacaoDoComputador, pontuacaoDoUsuario)
      console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${pontuacaoDoUsuario}`)
      console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${pontuacaoDoComputador}`)
    if (pontuacaoDoUsuario > pontuacaoDoComputador){
       console.log("O usuário ganhou!")
    } else if(pontuacaoDoComputador > pontuacaoDoUsuario){
       console.log("O computador ganhou!")  
    } else {
       console.log("Empate!")
    }
    } else {
      console.log("O jogo acabou")
    }
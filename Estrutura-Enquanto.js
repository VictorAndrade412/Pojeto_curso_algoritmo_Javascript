/*
    nome: caractere
    idade, contador, limite: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreva ("Digite a quantidade de vezes que vai ser verificado: ")
    leia (limite)
    
    contador := 0
    enquanto (contador < limite) faça
        escreva ("Digite o nome da pessoa: ")
        leia (nome)
        escreva ("Digite a idade de ", nome, ": ")
        leia (idade)
        se (idade >= 18) entao
            escreval (nome, " Você é maior de idade.")
        senao
            escreval (nome, " Você é menor de idade.")
        FimSe
        contador := contador + 1
        escreval ("===============================================")
    FimEnquanto
*/

var nome, idade, contador, limite
function acaoBotao() {
    limite = prompt("Digite a quantidade de vezes que vai ser verificado a idade: ")
    contador = 0
    while (contador < limite) {
        nome = prompt ("Digite o nome da pessoa: ")
        idade = prompt ("Digite a idade de " + nome + ": ")
        if (idade >= 18) 
            document.getElementById("paragrafo").innerText = nome + " Você é maior de idade!"
        else
            document.getElementById("paragrafo").innerText = nome + " Você é menor de idade."
        contador++
        escreval ("===============================================")   
    }
}

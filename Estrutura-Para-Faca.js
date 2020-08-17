/*
// Seção de Declarações das variáveis 
   numero, fatorial, contador: Inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva ("Digite um número para calcular a fatorial: ")
   Leia (numero)
   
   fatorial := 1
   para contador de 1 até numero faca
      fatorial := fatorial * contador
   FimPara
   
   escreva ("o fatorial de ", numero, " é: ",fatorial)
*/

function acaoBotao() {
    var numero, fatorial
 
    numero = prompt("Digite um número para calcular o fatorial: ")
    
    fatorial = 1
    for (var contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador
        
    }
    
    document.getElementById("paragrafo").innerText = "o fatorial de " + numero + " é: " + fatorial
}
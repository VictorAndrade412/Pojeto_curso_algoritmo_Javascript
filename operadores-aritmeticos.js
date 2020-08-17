/*
Var
// Seção de Declarações das variáveis 
   resultado, valor1, valor2, valor3: Real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

// Digitação dos valores a serem calculados
   Escreva ("Digite o primeiro valor: ")
   Leia (valor1)
   Escreva ("Digite o segundo valor: ")
   Leia (valor2)
   Escreva ("Digite o terceiro valor: ")
   Leia (valor3)

// Calculo dos valores digitados
   resultado := ((valor1 + valor2 + valor2) / valor3) % 2
   Escreval ("Resultado:", resultado)
*/

// Seção de Declarações das variáveis 
var  resultado, valor1, valor2, valor3;

// Digitação dos valores a serem calculados
valor1 = prompt ("Digite o primeiro valor: ")
valor2 = prompt ("Digite o segundo valor: ")
valor3 = prompt ("Digite o terceiro valor: ")

// Calculo dos valores digitados
resultado = ((valor1 + valor2) / valor3)
alert ("Resultado:" + resultado)

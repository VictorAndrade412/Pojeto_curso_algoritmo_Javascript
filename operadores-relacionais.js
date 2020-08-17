/*
Var
// Seção de Declarações das variáveis 
   nota1, nota2: Real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva ("Digite o primeiro número: ")
   Leia (nota1)
   Escreva ("Digite o segundo número: ")
   Leia (nota2)
   
   se (nota1 <> nota2) então
      Escreval ("nota1 é diferente")
   senão
      Escreval ("nota1 é igual")
   fimse
*/

var nota1, nota2;

nota1 = prompt ("Digite o primeiro numero: ")
nota2 = prompt ("Digite o segundo numero: ")

if (nota1 >= nota2) 
   alert ("nota1 e maior")
else
   alert ("nota1 e menor")
fimse

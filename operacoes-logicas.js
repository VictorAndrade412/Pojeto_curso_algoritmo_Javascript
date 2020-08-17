/*
   passou := falso
   Escreval ("Digite o nome do aluno: ")
   Leia (nome)
   Escreval ("Digite a primeira nota: ")
   Leia (nota1)
   Escreval ("Digite a segunda nota: ")
   Leia (nota2)

   media := (nota1 + nota2) / 2

   se media >= 50 então
      passou := verdadeiro
   FimSe

   se (passou ) && ( media >= 50 || media <= 70) então
      EscrevaL (nome, ", aprovado!")
   senao
      EscrevaL (nome, ", reprovado!")
   FimSe 
*/

var nota1, nota2, nome, passou;

passou = false

nome = prompt("Digite o nome do aluno: ")
nota1 = prompt("Digite a primeira nota: ")
nota2 = prompt("Digite a segunda nota: ")

media = (parseInt(nota1) + parseInt(nota2)) / 2;

if (media >= 5) 
    passou = true;

if (passou && (media >= 70 && media <= 90)) 
    alert(nome + ", aprovado!")
else 
    alert(nome + ", reprovado!")
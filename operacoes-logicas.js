

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
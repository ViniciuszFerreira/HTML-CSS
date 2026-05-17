let nota1 = parseFloat(prompt("Informe a Nota 1:"));
let nota2 = parseFloat(prompt("Informe a Nota 2:"));

let media = (nota1 + nota2) / 2;

if (media >= 7)
    alert ( " O aluno foi aprovado com media " + media);
else if (media >= 4)
    alert ("O aluno foi para exame " + media);
else
    alert ("O aluno foi reprovado " + media);

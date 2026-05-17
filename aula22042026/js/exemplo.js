let nota1 = parseFloat(prompt("Infome a nota 1:"));
let nota2 = parseFloat(prompt("Infome a nota 2:"));

let media = (nota1 + nota2) / 2;

if (media >= 7)
    alert("O aluno foi aprovado com média " + media);
else if (media >= 4)
    alert("O aluno foi para a exame final " + media);
else
    alert("O aluno foi reprovado " + media);


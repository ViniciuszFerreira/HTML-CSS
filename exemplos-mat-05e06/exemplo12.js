var pessoa = ["Rodrigo", "Martins", 41];

document.getElementById("demo").innerHTML = pessoa;

var pessoa2 = {
    primeiroNome: "Rodrigo",
    ultimoNome: "Martins",
    idade: 44
}

document.getElementById("demo2").innerHTML = "Idade: " + pessoa2["primeiroNome"] +
    " Idade: " + pessoa2["idade"];

document.getElementById("demo3").innerHTML = pessoa.length;

var frutas, texto, qtdEl, i;

frutas = ["Banana", "Laranja", "Maça", "Manga"];
qtdEl = frutas.length;

texto = "<ul>";

for(i= 0; i < qtdEl; i++){
    texto += "<li>" + frutas[i] + "</li>";
}

texto += "</ul>";

document.getElementById("demo4").innerHTML=  texto;

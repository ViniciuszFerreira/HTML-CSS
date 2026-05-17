function calcular(){
    var nome = document.getElementById('nome').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);

    var media = (nota1+nota2) /2;

    if (media>=7){
        document.write("<h1>Nome do aluno:" +nome+"</h1>");
        document.write("<h1>Nota 1:" +nota1+"</h1>");
        document.write("<h1>Nota 2:" +nota2+"</h1>");
        document.write("<h1>Media:" +media+"</h1>");
        document.write("<h1>Aluno Aprovado</h1>");
    }
    else if (media>=4){
        document.write("<h1>Nome do aluno:" +nome+"</h1>");
        document.write("<h1>Nota 1:" +nota1+"</h1>");
        document.write("<h1>Nota 2:" +nota2+"</h1>");
        document.write("<h1>Media:" +media+"</h1>");
        document.write("<h1>Aluno de Exame</h1>");
    }
    else{
        document.write("<h1>Nome do aluno:" +nome+"</h1>");
        document.write("<h1>Nota 1:" +nota1+"</h1>");
        document.write("<h1>Nota 2:" +nota2+"</h1>");
        document.write("<h1>Media:" +media+"</h1>");
        document.write("<h1>Aluno Reprovado</h1>");
    }
    }
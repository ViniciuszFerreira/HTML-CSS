function calcular(){
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);

    var media = (nota1+nota2) /2;

    if (media>=7){
        document.writeln("<h1>Nota 1:" +nota1+"</h1><br>");
        document.writeln("<h1>Nota 2:" +nota2+"</h1><br>");
        document.writeln("<h1>Media:" +media+"</h1><br>");
        document.write("<h1>Aluno Aprovado</h1>");
    }
    else{
        document.writeln("<h1>Nota 1:" +nota1+"</h1><br>");
        document.writeln("<h1>Nota 2:" +nota2+"</h1><br>");
        document.writeln("<h1>Media:" +media+"</h1><br>");
        document.write("<h1>Aluno Reprovado</h1>");
    }
    }
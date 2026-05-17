function receber(){
    var n1 = quadrado(parseInt(document.getElementById('txtNum1').value));
    document.write("<h1>Resultado:</h1>" + "<h2>"+ n1 + "</h2");
}

/*var quadrado = function(numero){
    return numero * numero;
}*/

var quadrado = (numero) =>{
    return numero * numero;
}
function receber() {
    var num1 = parseFloat(document.getElementById('txtNum1').value);
    var num2 = parseFloat(document.getElementById('txtNum2').value);
    var op = document.getElementById('op').value;

    document.write("<h1>Resultado:</h1>");

    document.write("<h2>" + somar(num1, num2, op) + "</h2>");

}

function somar(num1, num2, op) {
    if (op == "/" || op == "%") {
        if (num2 == 0) {
            document.write("<h2>Divisão por zero</h2>");
        }
    }
    return eval(`${num1} ${op} ${num2}`)

}
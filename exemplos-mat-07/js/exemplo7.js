var x = document.getElementsByClassName('intro');
document.getElementById('demo').innerHTML = 
"O texto do primeiro parágrafo (índice 0) é: " + x[0].innerHTML;

x = document.getElementsByClassName('intro');
document.getElementById('demo1').innerHTML = 
"O texto do segundo parágrafo (índice 1) é: " + x[1].innerHTML;



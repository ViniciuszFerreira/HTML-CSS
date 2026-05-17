var x = document.getElementsByTagName('p');
document.getElementById('demo').innerHTML = 
"O texto do primeiro parágrafo (índice 0) é: " + x[0].innerHTML;

x = document.getElementsByTagName('p');
document.getElementById('demo1').innerHTML = 
"O texto do primeiro parágrafo (índice 1) é: " + x[1].innerHTML;

x = document.getElementsByTagName('p');
document.getElementById('demo2').innerHTML = 
"O texto do primeiro parágrafo (índice 2) é: " + x[2].innerHTML;

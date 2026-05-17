var carros = ["Onix", "Polo", "Argos"];

document.getElementById("demo").innerHTML = carros;

var carros2 = [
    "Fusca",
    "Brasília",
    "Passat"
];

document.getElementById("demo1").innerHTML = carros2;

var carros3 = new Array("HRV", "Renegade","Creta");
document.getElementById("demo2").innerHTML = carros3;

document.getElementById("demo3").innerHTML = carros3[0];

carros3[0] = "BMW X1";
document.getElementById("demo4").innerHTML = carros3[0];
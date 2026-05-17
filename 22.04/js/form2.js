function mostrar(){
    let placa = parseInt(document.getElementById("placa"));

    switch(placa){
        case 1:
        case 2:
            alert("Rodizio - segunda-feira");
        break;

        case 3:
        case 4:
            alert("Rodizio - terça-feira");
        break;

        case 5:
        case 6:
            alert("Rodizio - quarta-feira");
        break;

        case 7:
        case 8:
            alert("Rodizio - quinta-feira");
        break;

        case 9:
        case 0:
            alert("Rodizio - sexta-feira");
        break;
    }
}
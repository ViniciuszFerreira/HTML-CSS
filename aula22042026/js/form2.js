function mostrar(){
    let placa = parseInt(document.getElementById("placa").value);

    switch(placa){
        case 1:
        case 2:
            alert("Rodízio - segunda-feira");
        break;
        case 3:
        case 4:
            alert("Rodízio - terça-feira");
        break;
        case 5:
        case 6:
            alert("Rodízio - quarta-feira");
        break;
        case 7:
        case 8:
            alert("Rodízio - quinta-feira");
        break;
        case 0:
        case 9:
            alert("Rodízio - sexta-feira");
        break;
        default:
            alert("Valor inválido");

    }
}
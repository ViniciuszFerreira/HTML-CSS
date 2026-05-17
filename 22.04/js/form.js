function calcular(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);


    let delta = b*b - 4*a*c;
    
    if (delta == 0){
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        alert( "Deelta igual a 0 \n. Somente uma raiz: "+x1);
    }


    else if(delta > 0){
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert("Delta maior que 0. \nDuas raizes: "+  x1.toFixed(2)+" "+ x2.toFixed(2));

    }
    else
    {
        alert("Não existe raizes reais");

    }
}
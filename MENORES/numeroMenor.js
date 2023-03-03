    // recibe tres numero
const numeroMenor = (num1, num2, num3) => {

        if (num1 === undefined || num2 === undefined || num3 === undefined){
            console.log('Debes ingresar tres numeros')
        } else {
            console.log(Math.min(num1, num2, num3));
        }

}

numeroMenor(1, 5, -5);
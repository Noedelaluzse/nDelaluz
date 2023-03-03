const calcMes = (mes) => {
    if(mes) {
        if (mes <= 0 || mes > 12) {
            console.log('Debes ingresar un numero de mes valido (1-12)');
        } else {

            if (mes === 2) {
                console.log("Febrero tiene 28 días, o 29 en años bisiestos.");
              } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
                console.log("El mes " + mes + " tiene 30 días.");
              } else {
                console.log("El mes " + mes + " tiene 31 días.");
              }
        }

    } else {
        console.log('Debes ingresar un numero de mes')
    }
}

calcMes(4);
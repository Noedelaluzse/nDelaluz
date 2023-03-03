    // EL codigo para vino tinto debe empezar con VT-
    // EL codigo ve vino blanco debe emopezar con VB-
    // Debe recibir el precio del vino
const vinosDescuentio = (codigo, precio) => {

    if (codigo) {
        const iniciales = codigo.split('-')[0];
        
        switch(iniciales) {

            case 'VB':
                console.log(precio - (precio * 0.05));
                break;
            case 'VT':
                console.log(precio - (precio * 0.1));
                break;
        }
            
    } else {
        console.log('Debes ingresar un codigo');
    }
}


vinosDescuentio("VT-03", 100);
vinosDescuentio("VB-01", 100);



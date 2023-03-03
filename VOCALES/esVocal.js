const esVocal = (caracter) => {
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    if (caracter === undefined) {
        console.log('Debes ingresar un caracter')
    } else {
        console.log(vocales.includes(caracter));
    }


}
esVocal('c');
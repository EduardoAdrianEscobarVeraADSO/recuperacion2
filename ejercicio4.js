function encontrarPalabraMasLarga(...palabras) {
    let palabramaslarga = '';

    for (let palabra of palabras) {
        if (palabra.length > palabramaslarga.length) {
            palabramaslarga = palabra;
        }
    }

    return palabramaslarga;
}

let cantidadpalabras = parseInt(prompt('Ingrese la cantidad de palabras:'));

let palabras = [];
for (let i = 0; i < cantidadpalabras; i++) {
    let palabra = prompt(`Ingrese la palabra ${i + 1}:`);
    palabras.push(palabra);
}

let palabralarga = encontrarPalabraMasLarga(...palabras);
alert(`La palabra más larga es: ${palabralarga}`);
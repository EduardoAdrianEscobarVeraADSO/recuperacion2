function ordenarNumeros(...numeros) {
    return numeros.sort((a, b) => b - a);
}


function mostrarTablaNumeros(numeros) {
    let tabla = [];
    for (let i = 0; i < numeros.length; i++) {
        tabla.push({ Posicion: i + 1, Numero: numeros[i] });
    }
    console.table(tabla);
}



function main() {
    let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números que desea ingresar:"));
    let numeros = [];

    for (let i = 0; i < cantidadNumeros; i++) {
        let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(numero);
    }

  
    let numerosOrdenados = ordenarNumeros(...numeros);

 
    mostrarTablaNumeros(numerosOrdenados);
}
main();
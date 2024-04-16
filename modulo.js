export function validarTarjeta(numeroTarjeta) {

  // Expresiónes regulares para validar las tarjetas
    let visaregex = /^[\d\.]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/
    let masterregex = /^[\d\.]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/
    let discoregex = /^[\d\.]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/
    let dinersregex = /^[\d\.]{4}-[0-9]{4}-[0-9]{4}-[0-9]{2}$/
    let ameriregex = /^[\d\.]{4}-[0-9]{4}-[0-9]{4}-[0-9]{3}$/
   
     if (visaregex.test(numeroTarjeta) === true && numeroTarjeta.startsWith("4")) {
      return "visa";
    }
    else if (masterregex.test(numeroTarjeta) === true && numeroTarjeta.startsWith("51") || numeroTarjeta.startsWith("55")) {
      return "mastercard" ;
    }
    else if (discoregex.test(numeroTarjeta) === true && numeroTarjeta.startsWith("6011")) {
      return "Discover" ;
    }
    else if (dinersregex.test(numeroTarjeta) === true && numeroTarjeta.startsWith("300") || numeroTarjeta.startsWith("305") || numeroTarjeta.startsWith("36") || numeroTarjeta.startsWith("38")) {
      return "Diners Club" ;
    }
    else if (ameriregex.test(numeroTarjeta) === true && numeroTarjeta.startsWith("34") || numeroTarjeta.startsWith("37")) {
      return "american express" ;
    }
    else if (numeroTarjeta < 0) {
      return "no pueden ser numeros negativos"
    }
    else {
        return "No se pudo determinar la compañía de la tarjeta";
    }
}
   


    
// ejercicio 2

function sumarNumeros(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

function contarNumerosPrimos(numeros) {
    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (esPrimo(numeros[i])) {
            contador++;
        }
    }
    return contador;
}

function esPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function contarNumerosPares(numeros) {
    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            contador++;
        }
    }
    return contador;
}

function calcularPromedio(numeros) {
    if (numeros.length === 0) return 0;
    
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}

export function ejecutarOperaciones() {
    let numeros = [];
    let opcion;
    let entrada = prompt("Ingrese la cantidad de numeros:");
    let i = 1;
while (true) {
    let num = parseFloat(prompt(`Ingrese el número ${i}:`));
    
    if (!isNaN(num)) {
        numeros.push(num);
        i++;
    } else {
        alert('Entrada no válida. Por favor, ingrese un número válido.');
        continue;
    }

    if (i > entrada) {
        break;
    }
}


    opcion = prompt(`Elija una operación:
    a. Sumar los números
    b. Contar los números primos
    c. Contar los números pares
    d. Calcular el promedio de los números primos
    e. Calcular el promedio de números pares`).toLowerCase();

    let resultado;

    if (opcion === 'a') {
        resultado = `La suma de los números es: ${sumarNumeros(numeros)}`;
    } else if (opcion === 'b') {
        resultado = `Hay ${contarNumerosPrimos(numeros)} números primos.`;
    } else if (opcion === 'c') {
        resultado = `Hay ${contarNumerosPares(numeros)} números pares.`;
    } else if (opcion === 'd') {
        resultado = `El promedio de los números primos es: ${calcularPromedio(numeros.filter(num => esPrimo(num)))}`;
    } else if (opcion === 'e') {
        resultado = `El promedio de los números pares es: ${calcularPromedio(numeros.filter(num => num % 2 === 0))}`;
    } else {
        resultado = 'Opción no válida.';
}

alert(resultado);

}



// // // ejercicio 5





export class Calculadora {
    suma(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Ambos valores deben ser números');
        }
        return a + b;
    }

    resta(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Ambos valores deben ser números');
        }
        return a - b;
    }

    multiplicacion(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Ambos valores deben ser números');
        }
        return a * b;
    }

    division(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Ambos valores deben ser números');
        }
        if (b === 0) {
            throw new Error('No se puede dividir por cero');
        }
        return a / b;
    }
}

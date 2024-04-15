export function validarTarjeta(numeroTarjeta) {
    // Expresiones regulares para cada tipo de tarjeta con números separados por guiones
    let visaRegex = /^4[0-9]{3}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/; // Visa: 16 dígitos, comienza con 4
    let masterRegex = /^5[1-5][0-9]{2}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/; // Mastercard: 16 dígitos, comienza con 51-55
    let discoverRegex = /^6011-[0-9]{4}-[0-9]{4}-[0-9]{4}$/; // Discover: 16 dígitos, comienza con 6011
    let dinersRegex = /^((3000|3050)-[0-9]{4}-[0-9]{4}-[0-9]{2})$/; // Diners Club: 14 dígitos, comienza con 3000 o 3050
    let amexRegex = /^(34|37)[0-9]{2}-[0-9]{6}-[0-9]{5}$/; // American Express: 15 dígitos, comienza con 34 o 37

    // Validación para cada tipo de tarjeta
    if (visaRegex.test(numeroTarjeta)) {
        return "Visa";
    } else if (masterRegex.test(numeroTarjeta)) {
        return "Mastercard";
    } else if (discoverRegex.test(numeroTarjeta)) {
        return "Discover";
    } else if (dinersRegex.test(numeroTarjeta)) {
        return "Diners Club";
    } else if (amexRegex.test(numeroTarjeta)) {
        return "American Express";
    } else {
        return "No se pudo determinar la compañía de la tarjeta";
    }
}

  
  
  
  export function sumaNumerosPares(numero, opcion) {
    if (opcion === "a") {
      let suma = 0;
      for (let i = 0; i <= numero; i += 1) {
          suma += i;
      }
      return "en total da " + suma;
    }
    else if (opcion === "b") {
      let esPrimo = true;
      let suma = 0;
      if (numero <= 1) {
          esPrimo = false;
      } else {
          for (let i = 2; i <= Math.sqrt(i); i++) {
              if (i % i === 0) {
                  esPrimo = false;
                  suma += 1;
                  break;
              }
          }
      }return suma
    }
    else if (opcion === "c") {
      let suma = 0;
      for (let i = 0; i <= numero; i += 2) {
          suma += 1;
      }
      return "en total hay " + suma-1 + " numeros pares";
    }
    else if (opcion === "d") {
      let esPrimo = true;
      let suma = 0;
      let resultado
      if (numero <= 1) {
          esPrimo = false;
      } else {
          for (let i = 2; i <= Math.sqrt(numero); i++) {
              if (numero % i === 0) {
                  esPrimo = false;
                  suma += i;
                  resultado = suma/i
                  break;
              }
          }
      }return resultado
    }
    else if (opcion === "e") {
      let suma = 0;
      let resultado = 0;
      let contador = -1;
      for (let i = 0; i <= numero; i += 2) {
        suma += i;
        contador += 1;
        resultado = suma / contador;
      }
      return "el promedio de los pares es " + resultado ;
    }
     
  }
  
  
  
  export function sumar(a, b) {
    return a+b
  }
  export function restar(a, b) {
    return a-b
  }
  export function multiplicar(a, b) {
    return a*b
  }
  export function dividir(a, b) {
    return a / b
  }
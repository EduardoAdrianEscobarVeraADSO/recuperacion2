// Diseñar un programa que permita validar el tipo de tarjeta de crédito que
// registra el operador, para ello debemos tener en cuenta que las diferentes
// tarjetas tienen diferentes nomenclaturas:
// • American Express: 15 dígitos y empieza por (34 – 37)
// • Diners Club: tiene 14 dígitos y empieza por (300 – 305 o 36 - 38)
// • Discover: tiene 16 dígitos y empieza por (6011)
// • Mastercard: tiene 16 dígitos y empieza por (51 – 55)
// • Visa: tiene: 16 dígitos y empieza por (4)

// import { validarTarjeta } from "./modulo.js";

// while (true) {
//     let numeroTarjeta = prompt("Ingrese el número de su tarjeta de crédito:");
    
//     if (numeroTarjeta.toLowerCase() === "salir") {
//         break;
//     }
    
//     let resultado = validarTarjeta(numeroTarjeta);
//     alert(resultado);
// }

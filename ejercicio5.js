// 5. Diseñar un modulo llamado calculadora, en este módulo debe exportar una
// clase con los siguientes metodos:
// a. Suma
// b. Resta
// c. Multiplicación
// d. División
// Al momento de realizar cada operación el sistema debe validar que no se
// presenten errores, si al momento de su ejecución se presenta algún error, el
// sistema debe enviar un mensaje personalizado indicando el tipo de error
// para que el usuario lo solucione y continue realizando los cálculos básicos
// de las matemáticas.

// import { Calculadora } from "./modulo.js";

// let calc = new Calculadora();
// while (true) {
//   try {
//     let a = parseFloat(prompt("introduzca el primer numero: "));
//     let b = parseFloat(prompt("introduzca el segnudo numero: "));
//     alert("resultado de la suma " + calc.suma(a, b));        
//     console.log(calc.resta(a, b));       
//     console.log(calc.multiplicacion(a, b)); 
//     console.log(calc.division(a, b));     
  
//   } catch (error) {
//     alert(error.message);
//     continue
//   }
//   break
// }
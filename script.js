//inicio del primer ejercicio del script

console.log("que tal");

let Nombre = "Positivo";
console.log(Nombre);

const edad = 0;
console.log(edad);

if (Nombre === "Positivo") {
  console.log("El numero es positivo");
} else {
  console.log("El numero es negativo");
}

if (edad === 0) {
  console.log("El numero es positivo");
} else {
  console.log("El numero es negativo");
}

switch (edad) {
  case 0:
    console.log("El numero es positivo");
    break;
  case -1:
    console.log("El numero es negativo");
    break;
  default:
    console.log("El numero no es reconocido");
    break;
}

for (let positivo = 0; positivo > 0; positivo++) {
  console.log("El valor de positivo es: " + positivo);
}

for (let negativo = 0; negativo < 0; negativo--) {
  console.log("El valor de negativo es: " + negativo);
}

let positivo = 0;
while (positivo >= 0) {
  console.log("El valor del numero es: " + positivo);
  positivo++;
}

let negativo = 0;
while (negativo <= 0) {
  console.log("El valor del numero es: " + negativo);
  negativo--;

//fin del primer ejercicio del script

//inicio del segundo ejercicio del script


function saludar(franco) {
  return "Hola " + franco;
}

const suma = function (a, b) {
  return a + b;
}
console.log(suma(10, 5));

const resta = (c, d) => c - d;
console.log(resta(10, 5));

//fin del segundo ejercicio del script
}
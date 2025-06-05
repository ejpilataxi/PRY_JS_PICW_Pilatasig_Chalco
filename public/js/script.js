//Definimos las variables iniciales
let Numero1 = "";
let Numero2 = "";
let operacion = "";
let isSegundoNumero = false; 

// Obtenemos las referencias a los elementos del DOM para mostrar los datos
const pantalla = document.getElementById("pantalla");

// Creamos una función para leer  los números que ingresa el usuario
function Numero(num) {
  if (!isSegundoNumero) {
    Numero1 += num;
    pantalla.value = Numero1;
  } else {
    Numero2 += num;
    pantalla.value = Numero2;
  }
}

// Función que identifica la operación seleccionada
function leerOperacion(op) {
  if (Numero1 === "") return;

  operacion = op;
  isSegundoNumero = true;


  let tipoOperacion = "";
  switch (op) {
    case '+': tipoOperacion = "+"; break;
    case '-': tipoOperacion = "-"; break;
    case '*': tipoOperacion = "*"; break;
    case '/': tipoOperacion = "/"; break;
  }
  //Mostramos el tipo de operación

  pantalla.value = `Selecciono ${tipoOperacion}`;

  setTimeout(() => {
    display.value = "";
  }, 1000);
}

// Función para la logica de la calculadora
function calcular() {
  if (Numero1 === "" || Numero2 === "") return;

  const a = parseFloat(Numero1);
  const b = parseFloat(Numero2);
  let result;


  // Validación para que no se pueda dividir para 0

  if (operacion === '/' && b === 0) {
    alert("No se puede dividir para 0");
    limpiarPantalla();
    return;
  }

  switch (operacion) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = a / b; break;
  }

    // Mostramos el resultado en pantalla

  pantalla.value = "El resultado es:"+ result;
  // mensajePantalla.textContent = "El resultado es:";
  Numero1 = result.toString();
  Numero2 = "";
  isSegundoNumero = false;
  operacion = "";
}

// Función para reiniciar la calculadora
function limpiarPantalla() {
  Numero1 = "";
  Numero2 = "";
  operacion = "";
  isSegundoNumero = false;
  pantalla.value = "";
  mensajePantalla.textContent = "";
}

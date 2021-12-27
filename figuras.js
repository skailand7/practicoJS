//Cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();

//Triangulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

//Circulo

console.group("Circulo");

function diametro(radio) {
  return radio * 2;
}
function perimetroCirculo(radio) {
  this.radio = radio;
  const diametro = diametro(this.radio);
  return diametro * Math.PI;
}
function areaCirculo(radio) {
  return radio * radio * Math.PI;
}
console.groupEnd();

function calcularPerimetroCuadrado() {
  let input = document.getElementById("inputCuadrado");
  let value = input.value;

  const perimetro = perimetroCuadrado(value);

  alert(perimetro);
}
function calcularAreaCuadrado() {
  let input = document.getElementById("inputCuadrado");
  let value = input.value;

  const area = areaCuadrado(value);

  alert(area);
}
function calcularPerimetroTriangulo() {
  let input1 = document.getElementById("inputLadoT1");
  let value1 = Number(input1.value);
  let input2 = document.getElementById("inputLadoT2");
  let value2 = Number(input2.value);
  let input3 = document.getElementById("inputBaseT");
  let value3 = Number(input3.value);

  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro);
}
function calcularAreaTriangulo() {
  let input1 = document.getElementById("inputBaseT");
  let value1 = input1.value;
  let input2 = document.getElementById("inputAlturaT");
  let value2 = input2.value;

  const area = areaTriangulo(value1, value2);
  alert(area);
}
function calcularHTriangulo() {
  let lado1 = document.getElementById("inputTI1");
  let value1 = lado1.value;
  let lado2 = document.getElementById("inputTI2");
  let value2 = lado2.value;
  let base = document.getElementById("inputTIB");
  let value3 = base.value;

  if (value1 === value2) {
    let resultado = Math.sqrt(value1 * value1 - (value3 * value3) / 4);
    alert(resultado);
  } else {
    alert("No es Isosceles!");
  }
}

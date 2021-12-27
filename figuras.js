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
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// console.log(
//   "Los lados del triangulo miden: " +
//     ladoTriangulo1 +
//     ", " +
//     ladoTriangulo2 +
//     " y " +
//     baseTriangulo
// );
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo);

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areaTriangulo);

console.groupEnd();

//Circulo

console.group("Circulo");

// const radioCirculo = 4;
// const diametro = radioCirculo * 2;
// const pi = Math.PI;
// const circunferencia = diametro * pi;
// const areaCirculo = radioCirculo * radioCirculo * pi;

// console.log("Radio del circulo: " + radioCirculo);
// console.log("Diametro del circulo: " + diametro);
// console.log("El perimetro del circulo: " + circunferencia);
// console.log("El area del circulo es: " + areaCirculo);

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

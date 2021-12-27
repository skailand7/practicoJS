//Cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " cm2");
console.groupEnd();

//Triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
  "Los lados del triangulo miden: " +
    ladoTriangulo1 +
    ", " +
    ladoTriangulo2 +
    " y " +
    baseTriangulo
);
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo);

console.groupEnd();

//Circulo

console.group("Circulo");

const radioCirculo = 4;
const diametro = radioCirculo * 2;
const pi = Math.PI;
const circunferencia = diametro * pi;
const areaCirculo = radioCirculo * radioCirculo * pi;

console.log("Radio del circulo: " + radioCirculo);
console.log("Diametro del circulo: " + diametro);
console.log("El perimetro del circulo: " + circunferencia);
console.log("El area del circulo es: " + areaCirculo);
console.groupEnd();

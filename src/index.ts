import "./styles.css";
// Calcular area de un rectangulo - Alumno: David Rodriguez
let base: number = 0;
let altura: number = 0;

const inputBase = document.getElementById("inputBase");
const inputAltura = document.getElementById("inputAltura");
const btnCalc = document.getElementById("btnCalc");
const resultadoPara = document.getElementById("resultado");

btnCalc?.addEventListener("click", function () {
  base = Number(inputBase.value);
  altura = Number(inputAltura.value);
  let area: number = base * altura;
  resultadoPara.innerHTML += area;
});

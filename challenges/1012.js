var input = JSON.parse(require('fs').readFileSync('data.json', 'utf-8'));
input = String(input['1012']);
var lines = input.split(' ');

// Your code down here
lines = lines.map(Number);

function Calculos(a, b, c){
  let triangulo = (a * c) / 2;
  let circulo = 3.14159 * Math.pow(c, 2);
  let trapezio = ((a + b) * c) / 2;
  let quadrado = Math.pow(b, 2);
  let retangulo = a * b;
  return `TRIANGULO: ${triangulo.toFixed(3)}\nCIRCULO: ${circulo.toFixed(3)}\nTRAPEZIO: ${trapezio.toFixed(3)}\nQUADRADO: ${quadrado.toFixed(3)}\nRETANGULO: ${retangulo.toFixed(3)}`;
}

console.log(Calculos(lines[0], lines[1], lines[2]));
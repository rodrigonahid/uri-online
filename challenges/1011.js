var input = JSON.parse(require('fs').readFileSync('data.json', 'utf-8'));
input = String(input['1011']);
var lines = input.split(' ');

// Your code down here

function CalcularVolume(){
  let formula = (4/3) * 3.14159 * Math.pow(Number(lines), 3);
  return `VOLUME = ${formula.toFixed(3)}`;
}

console.log(CalcularVolume());
var input = JSON.parse(require('fs').readFileSync('data.json', 'utf-8'));
input = String(input['1008']);
var lines = input.split(' ')


function Salario(num, horas, valor){
  horas = Number(horas);
  valor = parseFloat(valor).toFixed(2);
  let salario = horas * valor;
  return (
    `NUMBER = ${num}\nSALARY = U$ ${salario.toFixed(2)}`
  )
}

console.log(Salario(lines[0], lines[1], lines[2]))
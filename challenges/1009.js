var input = JSON.parse(require('fs').readFileSync('data.json', 'utf-8'));
input = String(input['1009']);
var lines = input.split(' ')

function BonusSalary(){
  let total = parseFloat(lines[1]) + ((parseFloat(lines[2]))*0.15)
  return(
    `TOTAL = R$ ${total.toFixed(2)}`
  )
}
console.log(BonusSalary())
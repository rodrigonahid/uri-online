var input = JSON.parse(require('fs').readFileSync('data.json', 'utf-8'));
input = String(input['1007']);
var lines = input.split(' ')

function Diferenca(lines){
   var ints = lines.map(Number)
   
    var grupo1 = ints[0] * ints[1];
    var grupo2 = ints[2] * ints[3];
    return `DIFERENCA = ${grupo1 - grupo2}`;
}
console.log(Diferenca(lines))
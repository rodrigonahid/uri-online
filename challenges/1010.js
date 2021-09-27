var input = JSON.parse(require('fs').readFileSync('data.json', 'utf-8'));
input = String(input['1010']);
var lines = input.split('\n')

let piece1 = lines[0].split(' ');
let piece2 = lines[1].split(' ');

function ValorTotal(){
  let produto1 = Number(piece1[1]) * parseFloat(piece1[2])
  let produto2 = Number(piece2[1]) * parseFloat(piece2[2])
  return (
    `VALOR A PAGAR: R$ ${(produto1 + produto2).toFixed(2)}`
  )
}
console.log(ValorTotal())
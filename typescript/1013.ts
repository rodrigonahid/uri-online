var input = JSON.parse(require('fs').readFileSync('data.json', 'utf-8'));
input = String(input['1013']);
var lines = input.split('\n');

// Your code down here
lines = lines[0].split(` `);
console.log(lines);

type MaiorType = (a: number, b: number, c: number) => number;

const Maior: MaiorType = (a, b, c) => {
  let theBiggest = a;
  if(b < theBiggest){
    theBiggest = b
  }
  if(c < theBiggest){
    theBiggest = c
  }
  return theBiggest;
}

console.log(Maior(lines[0],lines[1],lines[2]))

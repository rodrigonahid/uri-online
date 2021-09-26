var input = JSON.parse(require('fs').readFileSync('data.json', 'utf-8'));
input = String(input['1005']);
var lines = input.split(' ');
let value1 = parseFloat(lines[0]);
let value2 = parseFloat(lines[1]);

function CalcularMedia(value1, value2){
    let media = value1 + value2;
    return media/2;
}
console.log(CalcularMedia(value1, value2))
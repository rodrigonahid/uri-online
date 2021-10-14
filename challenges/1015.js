"use strict";
const Plano = {
    p1: [1.0, 7.0],
    p2: [5.0, 9.0],
    calcular() {
        let soma1 = Math.pow((this.p2[0] - this.p1[0]), 2);
        let soma2 = Math.pow((this.p2[1] - this.p1[1]), 2);
        let raiz = Math.sqrt(soma1 + soma2);
        return raiz.toFixed(4);
    }
};
console.log(Plano.calcular());

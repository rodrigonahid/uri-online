"use strict";
class Automovel {
    constructor(distancia, combustivel) {
        this.distancia = distancia;
        this.combustivel = combustivel;
    }
    consumo() {
        const media = (this.distancia / this.combustivel).toFixed(3);
        console.log(`${media} km/l`);
    }
}
const carroUm = new Automovel(500, 35.0);
const carroDois = new Automovel(2254, 124.4);
carroUm.consumo();
carroDois.consumo();

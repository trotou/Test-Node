"use strict";

export const Carro = /** @class */ (function () {
  class Carro {
    constructor(modelo, ano, portas, marca) {
      this.modelo = modelo;
      this.ano = ano;
      this.portas = portas;
      this.marca = marca;
    }
  }
  return Carro;
})();

export const Moto = /** @class */ (function () {
  class Moto {
    constructor(modelo, ano, marca, passageiros) {
      this.modelo = modelo;
      this.ano = ano;
      this.marca = marca;
      this.passageiros = passageiros;
      this.rodas = 2;
    }
  }
  return Moto;
})();

import { Carro } from "./vehicle.service.js";
import { Moto } from "./vehicle.service.js";

export const createMoto = function (modelo, ano, marca, passageiros) {
  let myVeiculo = new Moto(modelo, ano, marca, passageiros);
  return myVeiculo;
};

export const createCar = function (modelo, ano, portas, marca) {
  let myVeiculo = new Carro(modelo, ano, portas, marca);
  return myVeiculo;
};

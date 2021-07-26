type motoRange = 1 | 2;
type carRange = 2 | 3 | 4;

interface Veiculo {
  modelo: String;
  ano: String;
  portas?: Number;
  marca: String;
}

class Carro implements Veiculo {
  modelo: String;
  ano: String;
  portas: carRange;
  marca: String;

  constructor(modelo: String, ano: String, portas: carRange, marca: String) {
    this.modelo = modelo;
    this.ano = ano;
    this.portas = portas;
    this.marca = marca;
  }
}

class Moto implements Veiculo {
  modelo: String;
  ano: String;
  marca: String;
  rodas: Number;
  passageiros: motoRange;

  constructor(
    modelo: String,
    ano: String,
    marca: String,
    passageiros: motoRange
  ) {
    this.modelo = modelo;
    this.ano = ano;
    this.marca = marca;
    this.passageiros = passageiros;
    this.rodas = 2;
  }
}

export const createMoto = (
  modelo: string,
  ano: string,
  marca: string,
  passageiros: motoRange
) => {
  let myVeiculo: Veiculo = new Moto(modelo, ano, marca, passageiros);
  return myVeiculo;
};

export const createCar = (
  modelo: string,
  ano: string,
  portas: carRange,
  marca: string
) => {
  let myVeiculo: Veiculo = new Carro(modelo, ano, portas, marca);
  return myVeiculo;
};

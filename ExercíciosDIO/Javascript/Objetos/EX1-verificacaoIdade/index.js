class Carro {
marca;
cor;
gastoMedioPorKm;
  
constructor(marca,cor,gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
}
calcularGastoDePercurso(distancia,precoCombustivel) {
    return (distancia * this.gastoMedioPorKm) * precoCombustivel
}
}

const uno = new Carro('fiat', 'Preto',1/12);
const palio = new Carro('fiat','preto',1/10)

console.log(uno.calcularGastoDePercurso(70,5))
console.log(palio.calcularGastoDePercurso(70,5))
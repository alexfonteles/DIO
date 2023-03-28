let altura = 1.75;
let peso = 75;

const imc = peso / (altura * altura)

console.log(imc);

if(imc <= 18.5){
    console.log("Abaixodo peso");
} else if(imc > 18.5 && imc <= 25){
  console.log("Peso normal");
} else if(imc > 25 && imc <= 40){
  console.log("Acima do peso");
} else {
  console.log("Obesidade grave");
}
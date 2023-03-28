let valorCompra = 199.90;
let compraDébito = valorCompra - ((valorCompra/100)*10);
let compraAVistaOuPix = valorCompra - ((valorCompra/100)*15);
let compra2Vezes = valorCompra / 2;
let compraMaisVezes = valorCompra + ((valorCompra/100)*15);
let tipoDeCompra = compra2Vezes;

if(compraDébito){
  console.log(compraDébito)
} else if(compraAVistaOuPix){
  console.log(compraAVistaOuPix)
} else if(compra2Vezes){
  console.log("Sua compra será parcelada em 2x de R$" + (2/compra2Vezes) + "que totaliza o valor de R$" + valorCompra)
} else if(compraMaisVezes){
  console.log(compraMaisVezes)
} else {
  console.log("Escolha uma forma de pagamento");
}
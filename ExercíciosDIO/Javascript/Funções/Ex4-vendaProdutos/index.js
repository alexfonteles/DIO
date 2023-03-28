function verificarNome(nome){
  console.log("Olá, " + verificarNome());
  console.log("Escolha a forma de pagamento: /n 1- Débito /n 2- À vista ou PIX /n 3- Parcelado em 2x /n parcelado em mais vezes")
}

function escolherFormaPagamento(formaPagamento){
  if(1){
    console.log(compraDébito)
  } else if(2){
    console.log(compraAVistaOuPix)
  } else if(3){
    console.log("Sua compra será parcelada em 2x de R$" + (2/compra2Vezes) + "que totaliza o valor de R$" + valorCompra)
  } else if(4){
    console.log(compraMaisVezes)
  } else {
    console.log("Escolha uma forma de pagamento");
  }
}

function Aplicardesconto(){

}

let valorCompra = 199.90;
let compraDébito = valorCompra - ((valorCompra/100)*10);
let compraAVistaOuPix = valorCompra - ((valorCompra/100)*15);
let compra2Vezes = valorCompra / 2;
let compraMaisVezes = valorCompra + ((valorCompra/100)*15);
let tipoDeCompra = compra2Vezes;


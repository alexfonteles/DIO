const nota1 = 1.9;
const nota2 = .3;
const nota3 = 9.6;

const média = (nota1 + nota2 + nota3)/3

if(média < 5){
  console.log("Reprovado")
} else if(média > 5 && média < 7){
  console.log("Recuperação")
} else {
  console.log("Aprovado")
}
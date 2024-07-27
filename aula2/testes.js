
/*let porcentagemDesconto = 0;

if(quantidadeMilhas > 5000){
    porcentagemDesconto = porcentagemDesconto + 10;
}

if(quantidadeMilhas >= 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
} else {
    porcentagemDesconto = 0;
}
O if que verifica se a quantidade de milhas é maior ou igual a 30.000 estava sendo executado antes do 
if que verifica se a quantidade de milhas é maior que 5.000. Isso causava o desconto errado para clientes com mais de 30.000 milhas.

A solução é usar um if dentro do else do primeiro if. Isso garante que o desconto de 
10% seja aplicado apenas para clientes com mais de 5.000 milhas e menos de 30.000 milhas.

alert('Boas vindas ao jogo do número secreto');

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);

let numeroSecreto = 4;

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

if (chute == numeroSecreto) {
    alert('Acertou');
} else {
    // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
    console.log('Valor do número secreto:', numeroSecreto);
    alert('O número secreto era ' + numeroSecreto);
}
/*


testes 2
## Desafio 1 -
-> Crie um array com alguns cargos de uma empresa (por exemplo, "fullstack", "frontend", "backend", "mobile") 

-> Você precisa remover o cargo "backend" da lista de cargos pois esse cargo não está mais disponivel na empresa.*/
//1 passo- montar a lista 2passo- encontrar onde está o backend na lista
//3 passo remover da lista


//se souber a posição
//const cargos = ["fullstack", "frontend", "backend", "mobile"];
//cargos.splice (2,1) //posição e quantidade 
//console.log(cargos);

//const cargos = ["fullstack", "frontend", "backend", "mobile"];
//const posicaoBeckend = cargos.indexOf("backend");

//if(posicaoBeckend !== -1){
  //cargos.splice(posicaoBeckend,1);
  //console.log(cargos);
 // return;
//}
/*
## Desafio 2 - 
-> Crie um array com os nomes abaixo:
["Alice", "Lucas", "Carol", "David"];

-> Você está procurando por um nome chamado Henrique caso o nome esteja na lista mostre no console
qual a posição em que esse nome está na sua lista.
-> Caso não encontre esse nome mostre no console o nome procurado e fale que não foi encontrado na lista
` `´ coloca texto mais variaveis

criar lista
const Nomes = ["Alice", "Lucas", "Carol", "David"];  //procurar includes ou 
const nomeBuscado = "Henrique";
//procurar na lista um nome henrique
const posicaoNome = Nomes.indexOf(nomeBuscado);
//caso o nome esteja na lista mostre no console qual a posição em que esse nome está na sua lista. 
if (posicaoNome !== -1) {
  console.log(`O nome henrique está na posição ${posicaoNome}`)
  } else {
  console.log(`O nome Henrique não foi encontrado na lista.`)
}

/*
## Desafio 3
Crie um array com esses numeros: [5, 15, 23, 2 ]

- Você deve devolver qual é a soma de todos esses numeros usando foreach

const numeros = [5, 15, 23, 2 ]
let somaTotal=0

numeros.forEach((numero) => {
  somaTotal = somaTotal + numero
})
 console.log(`A soma total da lista é ${somaTotal}`)



## Desafio 4
Crie um array com esses numeros: [6, 12, 5, 9, 14, 27]

- Você deve devolver um array com todos os numeros que são multiplos de 3

// 1 - fazer um array vazio
const numeros = [6, 12, 5, 9, 14, 27];

const numerosMultiplos = [];

numeros.forEach =((numero) => {
  if(numero % 3 === 0){
    numerosMultiplos.push(numero)  // adiciona o numero a um novo array
  }

})

console.log(`lista de numeros multiplos de 3 ${numerosMultiplos}`)
/*
## Desafio 5
Filtrar Palavras com Mais de 5 Letras usando foreach
const palavras = ["gato", "cachorro", "elefante", "peixe", "leão"];

- Você deve devolver um array com todas palavras que possuem mais de 5 letras
 
const palavras = ["gato", "cachorro", "elefante", "peixe", "leão", "canetinha"];
const palavrasMaiores = [];

palavras.forEach((palavra) => {
  if (palavra.length > 5) {
    palavrasMaiores.push(palavra);
  }
  
})
console.log("palavras maiores que 5 letras são:" + palavrasMaiores)










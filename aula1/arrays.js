//array coleção de valores onde vc pode armazenar mutiplos itens


//               0      1        2
//const nomes= ["Igor","Rafa", "bruna"]

//console.log(nomes[0]);  //index empre começa na posição zero - quantidade
//console.log (nomes.length) //tamanho - saber quantos itens tem dentro

//manipular ARRAYS 
//push adiciona itens no final do array
//pop remove o ultimo elemento
//unshift adiciona elemnto na posição inicial
//shift remove o primeiro item
//constante atribui um valor e não muda após dua atribuição

//const numeros = [1, 2, 3, 4, 20];
//numeros.push(30);
//numeros.pop(4)
//console.log(numeros); //adicionar um novo elemento ao final do array


//splice
//index - indice- a posição no array onde a operação começará
//quantidade- o numero de elementos a serem removidos a partir daquela posição
//elementos que deseja adicionar naquele index (opcional)
//



//               0   1  2  3
//const numeros = [1, 5, 5, 7];
//numeros.splice(1,2); //posição e quantidade
//console.log (numeros);

//const nomes =["lucas", "joao", "Ricardo"]

//nomes.unshift("Bruna"); //adicionar no inicio do array

//console.log(nomes )


///join -juntar uma matriz 
//const nomes = ["mateus", "jose", "mel"];
//console.log(nomes);

//const listaNomes = nomes.join("-")

//console.log(listaNomes); //junta todos os elementos do array em uma string separados por virgula

//indexof
//const posiçãoItem = nomes.indexOf("jose")

//console.log(posiçãoItem); //retorna a primeira posição do item no array

//includes e verifica se existe o item no array e devolve verdadeiro ou falso

//const verificaNome = nomes.includes ("jose")

//console.log(verificaNome);

//filter devolve true or false

//forech
//const alunos = ["mateus", "jose", "mel"];
//funcao anomima (() =>{}
//alunos.forEach(function () {
  ///console.log("bem vindo");
//});

//alunos.forEach ((nome) => {
 // console.log(`Bem vindo ${nome} `);
//});

//filter devolve toda a lista pedida
//const numeros = [1, 5, 10, 30, 230];

//const numerosFiltrados = numeros.filter((numero) => {
  //return numero > 10

//})
//console.log (numeros);
//console.log("======")
//console.log(numerosFiltrados)     indexOf devolve a posição do item

//find buscar dentro de uma lista -  devolve o primeiro que encontrar 
//const alunos = ["jose", "lucas", "rui"]
//const buscaNome = alunos.find((aluno) => {
//if(aluno === "lucas"){
 // return aluno;
//}
//})
//console.log(buscaNome);
//const buscaAluno = alunos.findIndex((aluno) => {
 // return aluno === "lucas";
  
//console.log(buscaAluno);
//finIndexprocura a posição do item


//Map devolve uma nova array com
/*const alunos = ["jose", "lucas", "rui","vitor"]
const resultado = alunos.map((aluno) => {
  return aluno + "online"
})
console.log(resultado);

const numeros = [1, 5, 10];

const valoresDobrados = numeros.map((numero) => {
  return numero * 2
})

console.log(valoresDobrados);


Array de Objetos

const alunos = [
  { 
    nome: "jose",
     idade: 19,
  },

  { 
    nome: "lucas", 
    idade: 17,
   },
  { 
    nome: "rui", 
    idade: 20,
   },
  {
     nome: "vitor", 
     idade: 18,
     }
]

console.log(alunos);*/


//crie um carrinho de compras com lista de produtos onde cada produto tem um um nome e preço:
//calculando o total do carrinho

const carrinho = [
  {
    nome: "caneta",
    preco: 1.50
  },
  {
    nome: "lapis",
    preco: 3 
  },
  {
    nome: "borracha",
    preco: 0.50
  },
  {
    nome: "chave",
    preco: 3.00
  },

]
/*let totalCarrinho = 0;

carrinho.forEach((produto) => {
  totalCarrinho += produto.preco;
})

console.log(`O total do seu carrinho é: ${totalCarrinho}`)*/

function caucularTotalCarrinho(carrinho) {
  let totalCarrinho = 0;

  carrinho.forEach((produto) => {
    totalCarrinho += produto.preco;
  })
  return `O total do seu carrinho é: ${totalCarrinho}`  //retornando a string com o total do carrinho
}
function caucularTotalCarrinho (carrinho: any)
caucularTotalCarrinho(carrinho)





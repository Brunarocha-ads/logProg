//objetos - estruturas com propriedades, chave e valor
// { } - objetos -- nome idade.. sao os valores
/*const aluno= {
  nome: 'Bruna',
  idade: 25,
  endereco: {
    rua: 'Av. Paulista',
    numero: 123
  }
}


const pessoa = {
  nome: "Bruna",
  idade: 28,
  cargo: "empresaria",
  saudacao: function () {
    console.log("Olá, meu nome é Bruna!")
  }
}
//console.log(pessoa)
/*const calculos = {
  soma: function (a, b) {
    return a + b;
  },
  subtracao: function (a, b) {
    return a - b;
  },
  multiplicacao: function (a, b) {
    return a * b;
  },
  divisao: function (a, b) {
    if (b!= 0) {
      return a / b;
    } else {
      return "Não é possível dividir por zero!";
    }
  }
}
  console.log(calculos.soma(10, 5))
  console.log(calculos.subtracao(10, 5))
  console.log(calculos.multiplicacao(10, 5))
  console.log(calculos.divisao(10, 5))
  console.log(calculos.divisao(10, 0))

objetos com propriedades aninhadas


const pessoa = {
  nome: "Bruna",
  idade: 28,
  endereco: {
    rua: "Av. Paulista",
    numero: 123,
    bairro: "Jardim Paulista",
    cidade: "São Paulo"
  },
  saudacao: function () {
    console.log(pe)
  },
  calcularImc: function () {
    const peso = 80;
    const altura = 1.70;
    const imc = peso / (altura * altura);
    return imc;
  }
}
  
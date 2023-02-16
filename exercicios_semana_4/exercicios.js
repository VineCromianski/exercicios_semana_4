//Exercício 01

// Classe 1
class Carro {
  constructor(modelo, marca, ano) {
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
  }

  informacoes() {
    return `Modelo: ${this.modelo}, Marca: ${this.marca}, Ano: ${this.ano}`;
  }
}

const carro1 = new Carro("Fusca", "Volkswagen", 1979);

console.log(carro1.informacoes());

// Classe 2
class Celular {
  constructor(marca, modelo, memoria) {
    this.marca = marca;
    this.modelo = modelo;
    this.memoria = memoria;
  }

  informacoes() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Memória: ${this.memoria}`;
  }
}

const meuCelular = new Celular("Nokia", "N 95", "12GB");
console.log(meuCelular.informacoes());

// Classe 3

class Peixe {
  constructor(tipo, tamanho) {
    this.tipo = tipo;
    this.tamanho = tamanho;
  }

  falar() {
    console.log(`Eu sou um ${this.tipo} e tenho ${this.tamanho} centímetros!`);
  }
}

let peixe1 = new Peixe("salmão", 20);
let peixe2 = new Peixe("baiacu", 40);

peixe1.falar();
peixe2.falar();

//Exercício 02

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa("João");
p1.falar();

//Exercício 03

class Carro2 {
  constructor(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;
  }

  static som() {
    console.log("Vrum, vrum!");
  }

  imprimir() {
    console.log(this.modelo, this.ano);
  }
}

let carro2 = new Carro2("Fiat", 2018);
carro2.imprimir();
Carro2.som();

//Exercício 04

const promisseExample = new Promise((resolve, reject) => {
  let response = true;
  if (response) {
    resolve("Tudo certo!");
  } else {
    reject("Algo deu errado!");
  }
});

promisseExample
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

//Exercício 05

async function tarefa() {
  console.log("Início da tarefa");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("Fim da tarefa");
}

tarefa();

//Exercício 06

async function mostrarResultado() {
  let resultado = await somarDoisNumeros(2, 3);
  console.log("O resultado da soma é: " + resultado);
}

mostrarResultado();

function somarDoisNumeros(a, b) {
  return a + b;
}

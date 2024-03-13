// Criar uma classe Aluno em JavaScript que represente um aluno em uma instituição de ensino.
// A classe deve receber informações do aluno, calcular sua idade e apresentar-se como métodos.

// Requisitos:
// A classe Aluno deve ter os seguintes atributos:
// ra: Número de Registro do Aluno (string)
// nome: Nome completo do aluno (string)
// dataNascimento: Data de nascimento do aluno (data)
// curso: Curso do aluno (string)

// A classe Aluno deve ter os seguintes métodos:
// calcularIdade(): Calcula e retorna a idade do aluno em anos.
// apresentar(): Exibe as informações do aluno no formato:

class Aluno {
  constructor(ra, nome, anoNascimento, curso) {
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.ra = ra;
    this.curso = curso;
  }

  calcularIdade() {
    return 2024 - this.anoNascimento;
  }

  apresentar() {
    console.log(
      `Olá meu nome é ${
        this.nome
      } e tenho ${this.calcularIdade()} anos . Estou cursando o ${this.curso}`
    );
  }
}
const aluno1 = new Aluno(3788, "Ítalo", 2008, "Desenvolvimento de sistemas");
aluno1.apresentar();

console.log(
  `-------------------------------------------------------------------`
);

// Crie e utilize uma classe "Sorvete" contendo as propriedades : sabor, preço e tamanho (P | M | G)
// Crie um sorvete de morango grande
// Crie um sorvete de chocolate pequeno
// Crie um sorvete de melancia medio
// Altere o preço do sorvete de morango para R$10,51

class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }

  getPreco() {
    return this.preco;
  }

  setPreco(novopreco) {
    this.preco = novopreco;
  }

  pedido() {
    console.log(
      `O sorvete escolhido foi ${
        this.sabor
      }, no valor de R$ ${this.getPreco()} no tamanho ${this.tamanho}`
    );
  }
}

const morango = new Sorvete("morango", 9, "G");
const chocolate = new Sorvete("Chocolate", 9, "P");
const melancia = new Sorvete("Melancia", 9, "M");

morango.pedido();
chocolate.pedido();
melancia.pedido();

morango.setPreco(10.51);
morango.pedido();

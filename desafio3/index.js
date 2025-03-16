/*# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis ok 
- Operadores 
- Laços de repetição
- Estruturas de decisões ok
- Funções ok 
- Classes e Objetos ok

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e 
que possua as seguintes propriedades:

*/
class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        if (this.tipo === "Mago") {
            let ataque = "magia";
            console.log(`o ${this.tipo} atacou usando ${ataque}`);

        } else if (this.tipo === "Guerreiro") {
            let ataque = "espada";
            console.log(`o ${this.tipo} atacou usando ${ataque}`);

        } else if (this.tipo === "Monge") {
            let ataque = "artes marciais";
            console.log(`o ${this.tipo} atacou usando ${ataque}`);

        } else {
            let ataque = "shuriken";
            console.log(`o ${this.tipo} atacou usando ${ataque}`);
        }
    }
}

let mago = new heroi("Oogway", 125, "Mago");
let guerreiro = new heroi("Po", 27, "Guerreiro");
let monge = new heroi("Shifu", 87, "Monge");
let ninja = new heroi("Tigress", 30, "Ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();


/*
- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
  
*/
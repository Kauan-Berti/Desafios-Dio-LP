/*
Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

 
*/
let nomeDoHeroi = "jogador1";
let quantidadeDeXp = 0;
let nivel = "";

for (let BonusDeXp = 1000; quantidadeDeXp <= 11000; quantidadeDeXp += BonusDeXp) {// bonus de xp para o Heroi

    if (quantidadeDeXp < 1000) {//Se XP for menor do que 1.000 = Ferro
        nivel = "Ferro";
    } else if (quantidadeDeXp >= 1001 && quantidadeDeXp <= 2000) {//Se XP for entre 1.001 e 2.000 = Bronze
        nivel = "Bronze";
    } else if (quantidadeDeXp >= 2001 && quantidadeDeXp <= 5000) {//Se XP for entre 2.001 e 5.000 = Prata
        nivel = "Prata";
    } else if (quantidadeDeXp >= 5001 && quantidadeDeXp <= 7000) {//Se XP for entre 5.001 e 7.000 = Ouro
        nivel = "Ouro";
    } else if (quantidadeDeXp >= 7001 && quantidadeDeXp <= 8000) {//Se XP for entre 7.001 e 8.000 = Platina
        nivel = "Platina";
    } else if (quantidadeDeXp >= 8001 && quantidadeDeXp <= 9000) {//Se XP for entre 8.001 e 9.000 = Ascendente
        nivel = "Ascendente";
    } else if (quantidadeDeXp >= 9001 && quantidadeDeXp <= 10000) {//Se XP for entre 9.001 e 10.000= Imortal
        nivel = "Imortal";
    } else {// Se XP for maior ou igual a 10.001 = Radiante
        nivel = "Radiante";
    }
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel);
};



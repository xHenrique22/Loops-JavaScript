/*
* Solicitar a idade de várias pessoas e imprimir: 
* Total de pessoas com menos de 21 anos. Total de 
* pessoas com mais de 50 anos. O programa termina quando idade for =-99. (WHILE)
*/

const prompt = require('prompt-sync')();

let idade=0, Menor21=0, Maior50=0;

while(idade != -99){
    console.log('Digite -99 para finalizar o programa.\n')
    idade = Number(prompt(`Digite sua idade: `));
    if(idade < 21 && idade != -99){
        Menor21++;
    }
    else if(idade > 50){
        Maior50++;
    }
}

console.log(`\nO total de pessoas com menos de 21 anos: ${Menor21}`);
console.log(`O total de pessoas com mais de 50 anos : ${Maior50}`)




/*
* Crie um programa que leia um número do teclado até que encontre um 
* número igual a zero. No final, mostre a soma dos números digitados.(DO...WHILE)
*/

const prompt = require('prompt-sync')();

let numero=0, soma=0;

do{
    console.log('Digite 0 para finalizar o programa.')
    numero = Number(prompt('Digite um número: '));
    soma += numero;
}while(numero != 0);

console.log(`\nA soma de todos os números: ${soma}`);
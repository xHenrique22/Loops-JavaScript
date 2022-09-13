/*
* Escrever um programa que receba vários números inteiros no teclado.
* E no final imprimir a média dos números múltiplos de 3. Para sair digitar 0(zero).(DO...WHILE)
*/

const prompt = require('prompt-sync')();

let numero, numeroTotal=0, multiplos=0;

do{
    console.log('Digite 0 para finalizar o programa.')
    numero = Number(prompt('Digite um número: '));
    
    if(numero % 3 == 0 && numero != 0){
        multiplos += numero;
        numeroTotal++;
    }
}while(numero != 0);

const media = multiplos / numeroTotal;

console.log(`\nA média de números multiplos de 3 é: ${media.toFixed(1)}`);
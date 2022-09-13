const prompt = require('prompt-sync')()

let par = 0;

for(let contador1 = 0; contador1 < 10; contador1++){ // contador
    const contador = parseInt(prompt('Insira o número: ')); // leitura do contador
    
    if (contador%2===0) { //verificando se é par

        par++; //se for par faz a contagem
        }
        
        }
        
        console.log('Pares: ', par) //informa o numero de pares
        
        console.log('Impares: ', 10-par) //faz a conta dos impares e informa
        
        console.log('\n')
        
            




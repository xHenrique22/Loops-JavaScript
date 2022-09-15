const prompt = require('prompt-sync')();

let i = 0;
let qtdCalmas = 0;
let qtdMNervosas = 0;
let qtdHAgressivos = 0;
let qtdOCalmos = 0;
let qtdNerv40 = 0;
let qtdC18 = 0;

while (i < 150){
    const idadeText = prompt('\nDigite a idade: ')
    const idade = Number(idadeText);

    console.log('Escolha o sexo entre: \n\n');
    console.log('1 - Homem');
    console.log('2 - Mulher');
    console.log('3 - Outros');
    const sexoText = prompt('Escolha a opção do sexo: ')
    const sexo = Number(sexoText)

    console.log('Escolha um humor entre: \n\n');
    console.log('1 - Calmo(a)');
    console.log('2 - Nervoso(a)');
    console.log('3 - Agressivo(a)');
    const humorText = prompt('Escolha a opção do humor: ');
    const humor = Number(humorText);

    if (humor == 1) {
        qtdCalmas++;
      }
    if (sexo == 2 && humor == 2) {
        qtdMNervosas++;
      }
    
      if (sexo == 1 && humor == 3) {
        qtdHAgressivos++;
      }
    
      if (sexo == 3 && humor == 1) {
        qtdOCalmos++;
      }
    
      if (humor == 2 && idade > 40) {
        qtdNerv40++;
      }
    
      if (humor == 1 && idade < 18) {
        qtdC18++;
      }
    
      i++;
    }
    
    console.log(`\nO total de pessoas calmas: ${qtdCalmas}`);
    console.log(`\nO total de mulheres nervosas: ${qtdMNervosas}`);
    console.log(`\nO total de homens agressivos: ${qtdHAgressivos}`);
    console.log(`\nO total de outros calmos: ${qtdOCalmos}`);
    console.log(`\nO total de nervosos com mais de 40 anos: ${qtdNerv40}`);
    console.log(`\nO total de calmos até 18 anos: ${qtdC18}`);


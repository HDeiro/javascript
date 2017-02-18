/**
    Os arrays podem ser especificados
    com valores diretos em índices ou 
    direto na sua atribuição
 */

//Valores em índices
var meu_array_1 = new Array(); //Você poderia usar []
meu_array_1[0] = 'javascript';
meu_array_1[1] = 'é';
meu_array_1[2] = 'lindo';
meu_array_1[4] = '!';
console.log(meu_array_1);

//Valores diretos no arrays
var meu_array_2 = ['JavaScript', 2, true, , undefined, null];
console.log(meu_array_2);

/**
    Já que estamos falando de arrays, 
    por que não falar logo de índices
    referenciados por strings (chave x valor)
 */

var skillSet = [];

skillSet['abc'] = 'Valor 1';
skillSet['12a'] = 'Valor 2';
skillSet['22b_'] = 'Valor 3';

console.log(skillSet);
console.log(skillSet['22b_']);

var skillSet2 = {
    'abc' : 'Valor 1',
    '12a' : 'Valor 2',
    '22b_': 'Valor 3'
};

console.log(skillSet);
console.log(skillSet['22b_']);
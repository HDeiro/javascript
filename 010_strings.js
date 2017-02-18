/*
    Existem diversas funções do javascript
    para tratamento de strings

    Strings em JavaScript são imutáveis. Ou seja,
    quaisquer operações como replace, lower/upperCase
    e afins demandam reatribuição à string. Se você
    só chamar a função, ela retornará uma string, mas 
    não irá alterar o estado da string utilizada para chamar
    a função
*/

var string = "JavaScript vai dominar o mundo!";

//Capturando o tamanho da string
console.log(string.length);

//Capturando uma substring
console.log(string.substring(0, 10));

//Retorna a posição de uma substring
console.log(string.indexOf("mundo"));

//Retorna a última posição de uma substring
console.log(string.indexOf("m"));

//Coloca todos os textos em caixa alta
console.log(string.toUpperCase());

//Coloca todos os textos em caixa baixa
console.log(string.toLowerCase());

//Altera todas partes da string que forem equivalentes ao valor desejado
console.log(string.replace("mundo", "universo"));

//Divide a string em um array de substrings
console.log(string.split('mundo'));

//Verifica se a string inicia com um certo nome
console.log(string.startsWith('JavaScript'));

//Verifica se a string termina com um certo nome
console.log(string.endsWith('mundo!'));

//Retorna uma nova string com X cópias da string já existente
console.log(string.repeat(3));
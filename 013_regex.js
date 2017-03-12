/**
    Expressões regulares (Regular Expressions / Regex) definem 
    padrões a serem seguidos. Elas são bastante úteis quando 
    precisa-se validar algum determinado padrão como, 
    por exemplo, uma máscara de CPF,
    CNPJ, CEP, Telefone, entre várias outras.

    Além disso, é possível também extrair dados utilizando
    Regex.
 */

//Em JavaScript, pode-se definir regex das seguintes formas
var regex = /MinhaRegex/;
regex = new RegExp("MinhaRegex");

/**
    A API da Regexp provê as seguintes funções:

    - Exec : executa a expressão retornando detalhes;
    - Test : Testa a expressão retornando true ou false
 */
regex = /9999-9999/;
console.log('Início Exec:', regex.exec('9999-9999'));
console.log('Início Test:', regex.test('9999-9999'));

//Caracteres especiais demandam o caracter de scape

regex = /\(71\) 9999-9999/;
console.log('Scape:', regex.test('(71) 9999-9999'));

//O Regex busca o padrão em toda a string, não é necessariamente no começo

regex = /\(71\) 9999-9999/;
console.log('Long String:', regex.test('O número do telefone é (71) 9999-9999'));

//O Regex pode detectar se o valor começa (^) ou termina ($) com o padrão

regex = /^\(71\) 9999-9999/;
console.log('Start String:', regex.test('(71) 9999-9999'));

regex = /\(71\) 9999-9999$/;
console.log('End String:', regex.test('(71) 9999-9999'));

//Pode ser recebido qualquer letra
regex = /[a-z]/; //range de a até z
console.log('Any letter:', regex.test('n'));

//Pode ser recebido qualquer número
regex = /[0-9]/; //range de 0 até 9
console.log('Any number:', regex.test('3'));

//Pode ser recebido qualquer coisa que não seja uma letra
regex = /[^a-z]/;
console.log('Anything beside letter:', regex.test('n'));

//Pode ser recebido qualquer coisa que não seja um número
regex = /[^0-9]/;
console.log('Anything beside number:', regex.test('3'));

/*Pode ser recebidos caracteres agrupando-os por quantificadores

    {n} - Quantifica uma quantidade específica
    {n,} - Quantifica um número mínimo
    {n, m} - Quantifica um número mínimo e um número máximo

    ? - Zero ou um
    * - Zero ou mais
    + - Um ou mais
*/
regex = /\([0-9]{2}\) ?[0-9]{4,5}-?[0-9]{4}/;
console.log('Telephone check (Quantificators):', regex.test('(71)9123-9968'));

/**
    Boa parte dos grupos de caracteres podem ser substituídos por metacaracteres

    . - Representa qualquer caracter
    \w - Representa o conjunto  [a-zA-Z0-9_]
    \W - Representa o conjunto  [^a-zA-Z0-9_]
    \d - Representa o conjunto [0-9]
    \D - Representa o conjunto [^0-9]
    \s - Representa espaço em branco
    \S - Representa tudo que não seja espaço em branco
    \n - Representa quebra de linha
    \t - Representa Tab
 */

regex = /\w*/;
console.log('Checking metacaracteres:', regex.test('Opa, estamos trabalhando com regex!'));

/**
    A String API provê algumas funções próprias para 
    trabalhar com Regex

    Modificadores

    i - Case-insensitive
    g - Global matching (percorrer tudo)
    m - multiline (Percorrer todas as linhas)
 */
//Match
console.log("Checking String global Match", "Regex".match(/\w/g));
console.log("Checking String case insensitive Match", "Regex".match(/regex/i));

//Split
console.log("Checking split by regex", "Tenho,uma,string,cheia,de,virgula".split(/\W/));

//Replace
console.log("Checking replace by regex", "Tenho,uma,string,cheia,de,virgula".replace(/,/g, " "));

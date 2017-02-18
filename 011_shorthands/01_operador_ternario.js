/**
    Shorthands são atalhos ou macetes
    que a estrutura da linguagem permite
    utilizar para facilitar a realização
    de determinadas tarefas.

    Dentre os que serão apresentados, o 
    primeiro deles é, provavelmente, o 
    mais corriqueiro: o operador ternário.
    
    A estrutura de operador ternário permite
    substituir um par if/else em apenas uma
    expressão.

    Referência:https://www.sitepoint.com/shorthand-javascript-techniques/
 */

//Recupera um número aleatório de 1 a 10
var x = Math.floor((Math.random() * 10) + 1);

//Com IF/else
if(x % 2 === 0) //Se for par
    console.log('PAR');
else
    console.log('ÍMPAR');

//Com operador ternário => verificacao ? se_true : se false
console.log(x % 2 === 0 ? 'PAR' : 'ÍMPAR');
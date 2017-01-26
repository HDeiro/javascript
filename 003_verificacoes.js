/*
    É comum verificar a igualdade ou desigualdade de valores
    em grande parte das linguagens de programação. Em JavaScript
    isso não é diferente.

    Para verificar igualdade pode-se utilizar:

    == ou ===

    A diferença está no fato de que "==" verifica valor enquanto o "==="
    verifica tipo e valor. É indicado que sempre seja utilizado o "==="
    para evitar problemas com tipo. 

    A desigualdade é verificada por:

    != ou !==

    Segue as mesmas regras da igualdade.
*/

console.log('==== Testes OK ====');
console.log(10 == 10);      //Dez é igual a dez?
console.log(10 % 2 === 0);  //Dez é par? (Verifica se o resto da divisão inteira de 10 por 2 é 0)
console.log(10 != "11");    //Dez é diferente de onze?

console.log('==== Testes que vão bugar sua mente ====');
console.log(10 == "10");    //Dez (inteiro) é igual a Dez (String)?
console.log(1 == true);     //1 (inteiro) equivale a verdadeiro (boolean)?
console.log('' == false);   //String vazia é false?

console.log('==== Testes vão lhe fazer entender a importância de "===" ====');
console.log(10 === "10");    //Dez (inteiro) é igual a Dez (String)?
console.log(1 === true);     //1 (inteiro) equivale a verdadeiro (boolean)?
console.log('' === false);   //String vazia é false?


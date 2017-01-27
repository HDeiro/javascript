/*
    É possível bloquear o acontecimento de coisas "estranhas"
    como o hoisting a partir da utilização de uma diretiva 
    que surgiu no EcmaScript 5 chamada 'use strict' (com aspas mesmo).
*/

'use strict';

//Erro um: Utilização de variável não declarada
//console.log(minhaVariavel);
//var minhaVariavel;

//Erro dois: chamando função não declarada
//myFunction();
//function myFunction() {
//    console.log('não imprimi porque dei erro!');
//}

/*
    O Use strict faz efeito a partir de sua declaração. Ou seja,
    antes de declarar ele você está em uma "terra quase sem lei".

    Outras coisas que o modo restrito bloqueia é:

        - deleção de objetos/variáveis
        - deleção de funções
        - Números Octais não são permitidos
        - Escrita sobre propriedades "read-only" não podem ser sobrescritas
        - E muito mais que você pode consultar em vários lugares como: http://www.w3schools.com/js/js_strict.asp
*/
/*
    Um dos recursos muito utilizados das linguagens de programação são os arrays.

    Com eles você pode armazenar sobre um mesmo identificador diversos valores, variando-os
    a partir do índice que identifica sua posição.
*/

//Declaração
var array = [1, 2, 3, 4, 5];
console.log(array);

//Adicionando valores
array.push(6);
console.log(array);

//Removendo valores
array.pop();
console.log(array);

//Removendo valores específicos
array.splice(0, 1); //splice(indixe, quantidade a remover)
console.log(array);

//Adicionando outros em posições intermediárias
array.splice(2, 0, "add 1", "add 2");
console.log(array);

//Invertendo array
array.reverse();
console.log(array);

//Concatenando arrays
array = array.concat([9, "abc", true]);
console.log(array);
/*
    Um dos recursos muito utilizados das linguagens de programação são os arrays.

    Antes de qualquer coisa, convém ressaltar que os arrays na prática são objetos
    referenciados por atributos numéricos (que seriam seus índices) por padrão 
    (mas nada impede um índice string, visto que é um objeto). 
    
    Se quiser confirmar, teste: typeof []

    Com eles você pode armazenar sobre um mesmo identificador diversos valores, 
    variando-os a partir do índice que identifica sua posição.
*/

//Declaração
var array = [1, 2, 3, 4, 5];
console.log(array, '\n');

var array2 = new Array(10); //Ele não tem um tamanho limitado, você só está iniciando com 10 elementos null
console.log('Array 2 = ', array2, '\n');

var array3 = [];
array3[0] = 'Primeira Posição';
array3[1] = 'Segunda Posição';
array3[3] = 'Quarta Posição'; //Se você "pula" uma posição, aquela posição ficará undefined
array3.push("Quinta Posição");
array3["Index"] = 'Index Posição'; //Se você "pula" uma posição, aquela posição ficará undefined
console.log("Array 3 = ", array3, '\n');

//Adicionando valores
array.push(6);
console.log('Push', array);

//Removendo valores
array.pop();
console.log('Pop', array);

//Removendo valores específicos
array.splice(0, 1); //splice(indixe, quantidade a remover)
console.log('Splice', array);

//Adicionando outros em posições intermediárias
array.splice(2, 0, "add 1", "add 2");
console.log('Splice para adicionar em posições intermediárias', array);

//Invertendo array
array.reverse();
console.log('Reverse', array);

//Concatenando arrays
array = array.concat([9, "abc", true]);
console.log('Concat', array);

//Convertendo o array para string
console.log('ToString', array.toString());

//Consultando os elementos do array
console.log('ValueOf', array.valueOf());

//Consultando a quantidade de elementos
console.log('Length', array.length);

//Adicionar um elemento no início do array
array.unshift("Início");
console.log('Unshift', array);

//Remover um elemento no início do array
array.shift("Início");
console.log('Shift', array);

//Checar o índice de um elemento especifico
console.log('IndexOF', array.indexOf('add 2'));

//É possível filtrar elementos com a função filter
var array_inteiros = [1, 2, 3, 4, 5];
var pares = array_inteiros.filter(function(element) { 
    return element % 2 === 0;
});
console.log('Filter Origin', array_inteiros, '\n', 'Filtered Elements', pares);

//É possível verificar se todos elementos atendem a uma regra
var response = array_inteiros.every(function(element) {
    return element % 2 === 0;
});

console.log('Every', response);

//É possível verificar se algum dos elementos atendem a uma regra
response = array_inteiros.some(function(element) {
    return element % 2 === 0;
});

console.log('Some', response);

//É possível verificar mapear um array para retornar uma propriedade específica ou operar seus elementos para obter um resultado
response = array_inteiros.map(function(element) {
    return element = element * element; //Eleva ao quadrado
});

console.log('Map', response);

//É possível reduzir o contexto do array a fim de obter uma determinada operação, como o somatório de elementos por exemplo
response = array_inteiros.reduce(function(valor_anterior, valor_atual) {
    return valor_anterior + valor_atual;
}, 0); //o ,0 indica o início da função. É como se fosse o inicializador do acumulador

console.log('Reduce', response);

//Pode-se ordenar um array utilizando a função Sort. OBS: Ela muda a estrutura do array original
array_inteiros.sort(function(element_1, element_2) {
    if(element_1 < element_2)
        return 1; //Elemento 2 vem primeiro
    else if(element_1 > element_2)
        return -1; //Elemento 1 vem primeiro
    else return 0; //Mantém a ordem
});

console.log('Sort', response);

//É possível unificar um array como uma string com a função join
console.log('Join sem parâmetro', array_inteiros.join());
console.log('Join com parâmetro', array_inteiros.join(' ¯\_(ツ)_/¯ '));
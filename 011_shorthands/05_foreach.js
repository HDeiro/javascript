/**
    É possível utilizar o for 
    iterando-o por cada elemento
 */

var array = [1, 2, 3, 4, 5];

//Forma antiga
for(var i = 0; i < array.length; i++) {
    console.log('(for) array[' + i + '] = ' + array[i]);
}

//Forma um pouco mais nova
for(var i in array) {
    console.log('(for-in) array[' + i + '] = ' + array[i]);
}

//Foreach
array.forEach((element, index, array) => {
    console.log('(for-each) array[' + index + '] = ' + array[index]);
});
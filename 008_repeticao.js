/*
    Assim como o JS tem estruturas de decisão, ele também
    tem estrturas de repetição. São supotadas as estruturas:
    for, foreach, while, do while
*/

var meu_array = [1, 2, 3, 4, 5];

//For
for(var i = 0; i < meu_array.length; i++) {
    console.log('for - ' + meu_array[i]);
}

//While
i = 0;
while(i < meu_array.length) {
    console.log('while - ' + meu_array[i++]);
}

//For each
meu_array.forEach(function(element, index) {
    console.log('foreach ' + element + ' (índice ' + index + ')');
});

//do while
i = 0;
do {
    console.log('do while - ' + meu_array[i++]);
} while(i < meu_array.length);
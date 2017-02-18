a = 3;

if(a === 1 || a === 3 || a == 7)
    console.log('Oh Yeah!');

/**
 * Se o índice do valor desejado existir,
 * isso implica que ele é válido dentro das 
 * opções desejadas
 */
if([1, 3, 3].indexOf(a) !== -1)
    console.log('Hell Yeah!');
/*
    É possível verificar se
    uma determinada variável
    ou objeto é válido (no 
    contexto de existir) apenas
    colocando-o dentro de um if
 */

var x = 10;

if(x !== undefined && x !== null)
    console.log('X existe!');

if(x)
    console.log('X existe aqui também!');

//Para verificar se não existe, basta negar o valor

var y;

if(!y)
    console.log('Mas Y não existe :p');

/** Se a existência de um determinado 
 * valor é determinante para a chamada 
 * de uma função pode-se fazer o seguinte:
 */

var k = 10;
function w() {
    console.log('chamou w');
}

//Caso original
if(k) w();

//Caso reduzido
k && w();
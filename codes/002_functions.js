/*
    Javascript possui suporte a funções.
    Seu funcionamento básico é bastante
    similar ao de outras linguagens de
    programação.
*/

function primeiraFuncao() {
    console.log('Hey, você executou a primeira função!');
}

primeiraFuncao();

/*
    As funções podem receber parâmetros,
    assim como as funções/métodos de outras
    linguagens de programação
*/

function segundaFuncao(parametro) {
    console.log('Hey, você executou a segunda função! ', parametro);
}

segundaFuncao(10);             //Recebendo Inteiro
segundaFuncao('String');       //Recebendo String
segundaFuncao(true);           //Recebendo Boolean
segundaFuncao({});             //Recebendo Objeto
segundaFuncao(primeiraFuncao); //Recebendo Função

/*
    Você deve ter percebido que uma função
    pode receber outras funções como parâmetros.
    Portanto, podemos chamá-las de "callbacks".

    Callbacks são funções que são executadas dentro
    de uma outra função. À grossíssimo modo, podemos
    verificar uma certa similaridade com o padrão de
    projeto Decorator.
*/

function funcaoCallback() {
    console.log('Você executou um callback!');
}

function funcaoRecebeCallback(callback) {
    console.log('Você executou esse conteúdo!');

    if(typeof callback === "function") //Se houver algum callback, execute-o! 
        callback();
}

funcaoCallback();
funcaoRecebeCallback(funcaoCallback);
funcaoRecebeCallback(10);
funcaoRecebeCallback(function() {
    console.log('Você executou uma função de callback declarada dentro do parâmetro');
});

/*
    Se você quiser, podes declarar
    uma função atribuindo a uma variável
*/

var minhaFuncao = function() {
    console.log('Você executou uma função chamada a partir de uma variável!');
}

minhaFuncao();

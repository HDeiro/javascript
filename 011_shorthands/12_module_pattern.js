/**
    Um padrão bastante utilizado pela comunidade para a 
    geração de módulos em JavaScript é o Revealing Module Pattern,
    onde você oculta um escopo dentro de uma IIFE e revela apenas as 
    funções ou atributos desejados.
 */

var counter_module = (function() {
    var _value = 0; //Convenciona-se utilizar _ como prefixo de tudo que é privado
    var _add = function() {
        return ++value;
    }
    var _reset = function() {
        return value = 0;
    }

    return {
        add: _add, //Você pode alterar o nome da função/atributo
        reset: _reset
    }
})();

console.log(counter_module.add_value());
console.log(counter_module.add_value());
console.log(counter_module.reset());
console.log(counter_module.add_value());
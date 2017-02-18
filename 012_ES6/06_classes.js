/**
 * As classes nos dão uma sintaxe
 * simplificada para gerenciar o
 * comportamento de objetos a partir
 * das abstrações feitas
 * 
 * A classe, em JavaScript, é um conceito
 * que foi introduzido no ES6. De forma geral,
 * é um tipo de função que não
 * pode ser invocada, apenas "instanciada".
 * Ou seja, utilizando o new.
 * 
 * Um fato importante é que as Classes NÃO sofrem
 * Hoisting. Ou seja, estaria errado algo tipo: 
 * 
 * function funcaoQueUsaClasse() {
 *  new ClasseUsadaPorFuncao();
 * }
 * 
 * funcaoQueUsaClasse(); //Erro de Referência
 * class ClasseUsadaPorFuncao() {}
 * funcaoQueUsaClasse(); //OK
 * 
 * Leia mais em: http://exploringjs.com/es6/ch_classes.html
 */

class Animal {
    constructor(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    } 
}

const animal = new Animal('Ornitorrinco');
console.log(animal.getName());
animal.setName('Macaco Prego');
console.log(animal.getName());

//Com açúcar sintático

class Animal2 {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    } 
}

const animal2 = new Animal2('Ornitorrinco');
console.log(animal2.name);
animal2.name = 'Macaco Prego';
console.log(animal2.name);

console.log(typeof Animal);
//Animal(); //Erro, não pode ser invocada sem new
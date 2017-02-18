/**
 * Com JavaScript é possível utilizar
 * herança de forma fácil. 
 * 
 * Antigamente, o que era feito com prototype
 * atualmente pode ser resolvido com um simples
 * extends
 */

class Animal {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    speak() {
        console.log(this.name + ' está fazendo barulho');
    }
}

class Dog extends Animal {
    speak() {
        console.log(super.name + ' está latindo!');
    }
}

class Ornitorrinco extends Animal {}

const dog = new Dog('Adagoberto');
dog.speak();

const ornitorrinco = new Ornitorrinco('Perry');
ornitorrinco.speak();
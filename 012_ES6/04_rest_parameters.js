/**
 * Os rest parameters permitem que uma
 * função receba qualquer quantidade de 
 * parâmetros sobre um mesmo identificador
 * 
 * Existe uma opção no ES5 para fazer isso,
 * que é o arguments. Contudo, com o rest isso
 * aparentemente cairá em desuso pos no caso
 * do arguments o que é recebido é um objeto
 * parecido com um array mas que não é exatamente um
 */

const sum = function() {
    let result = 0;
    
    for (let i=0; i < arguments.length; i++) {
        result += arguments[i];
    }

    console.log(result);
}   
sum(1, 2, 3);

const sumRest = (...parameters)  => {
    let result = 0;

    parameters.forEach(number => result += number);

    console.log(result);
}
sumRest(1, 2, 3);
/**
  Switch case é útil em alguns 
  casos, mas, em casos recorrentes
  pode-se utilizar outras alternativas
 */

var x = 1;

function action1() {
    console.log('action 1');
}
function action2() {
    console.log('action 2');
}
function action3() {
    console.log('action 3');
}
function actiondefault() {
    console.log('default');
}

//opção switch/case
switch(x) {
    case 1 : action1(); break;
    case 2 : action2(); break;
    case 3 : action3(); break;
    default : actiondefault(); break;
}

//Opção array/objeto
var cases = {
    1: action1,
    2: action2,
    3: action3,
};

if(cases[x]) {
    cases[x]();
} else {
    actiondefault();
}
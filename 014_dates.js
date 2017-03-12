/**
    As datas, em computação, não são representadas por valores como
    29/01/1992, mas sim como um número que representa a quantidade de
    milissegundos até a data/hora correntes. 

    Este padrão foi definido a partir do Unix Epoch, que tem como início
    o dia 1 de Janeiro de 1970 às 0 horas, 0 minutos e 0 segundos, relativo
    ao UTC (Referência a partir da qual se calculam os fusos-horários do mundo).
    Este padrão do Unix é utilizado por grande parte das linguagens de programação.
 
    Existem quatro maneiras de se criar uma data, todas oficialmente 
    definidas por RFC 2822 (/WeekDay Month Day Year Time[h:m:s] Timezone/, por exemplo: Sat Mar 11 2017 23:22:13 GMT-0300 (Hora oficial do Brasil))
    e ISO 8601 (/Ano-Mes-DiaTimezoneTimeZ/, por exemplo: 1992-01-29T18:00:00.000Z - O Z representa Zulu Time)
 */

//Maneira um
console.log(new Date());

//Maneira dois
console.log(new Date(1489284988987));

//Maneira três
console.log(new Date("1992/01/29 15:00")); //Sempre no formato AMD ou AMD hh:ss

//Maneira quatro (ano, mes, dia, hora, minuto, segundo)
console.log(new Date(1992, 00, 29, 15, 0, 0)); //Meses, aqui, vão de 0 a 11.

//É possível obter o timestamp a partir da função now ou getTime
console.log(Date.now());
console.log(new Date().getTime());

//Funções da Date API
var date = new Date();

//Get year (retorna na notação de 99 para 1999, hoje não é mais viável, pois para 2000 retorna 100)
console.log("getYear: ", date.getYear());

//getFullYear retorna o ano completo
console.log("getFullYear: ", date.getFullYear());

//getMonth retorna o ano completo (de 0 a 11)
console.log("getMonth: ", date.getMonth());

//getDay retorna o dia da semana (iniciando de 0, a partir do domingo)
console.log("getDay: ", date.getDay());

//getDate retorna o dia do mês
console.log("getDate: ", date.getDate());

//toString recupera a data como uma string
console.log("toString: ", date.toString());

//toLocaleString recupera a data como uma string da localização em que você está
console.log("toLocaleString: ", date.toLocaleString());
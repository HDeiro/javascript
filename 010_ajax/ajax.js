/*
    Para utilizar o Ajax, instale um servidor local. Sugiro utilizar o http-server, que pode ser 
    baixado facilmente com o Node Package Manager (NPM)  a partir do comando:

    npm install -g http-server

    Após instalar, basta entrar na pasta do projeto via terminal e digitar "http-server"

    Referência: http://stackoverflow.com/questions/18586921/how-to-launch-html-using-chrome-at-allow-file-access-from-files-mode
    Download do Node (Inclui NPM): https://nodejs.org/en/
*/

//Instancio um objeto XMLHttpRequest
var xhttp = new XMLHttpRequest();

//Declaro que o tipo aguardado é um Json
xhttp.overrideMimeType("application/json");

//Realizo uma requisição GET -> Os parâmetros representam: Verbo HTTP, URL da fonte desejada, Se deve executar asincronamente
xhttp.open("GET", "data.json", true);

//Ao obter uma resposta da requisição
xhttp.onreadystatechange = function() {
    //Verifico o estado da requisição e seu status (200 indica que foi tudo OK)
    if(xhttp.readyState == 4 && xhttp.status == "200") {
        var container = document.querySelector("#container");
        var responseText = xhttp.responseText;
        var responseObj = JSON.parse(responseText);

        container.innerHTML = responseText;
    }
}
//Realiza a requisição
xhttp.send();
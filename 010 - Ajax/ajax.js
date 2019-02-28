//Instantiate an XMLHttpRequest object (Demands render engine that implements it, normally all browsers has it)
let xhttp = new XMLHttpRequest();

// Specify the Multi-purpose Internet Mail Extensions type (MIME Type)
// MIME type has two parts, the type and subtype and it's the standart way to classify file types in the internet
xhttp.overrideMimeType("application/json"); // application is the type and json is the subtype

// Specify the HTTP-Verb to be used, the URL and if it should be executed asynchronously
xhttp.open("GET", "data.json", true);

// When the response is obtained
xhttp.onreadystatechange = function() {
    // Check the ready state (4 is done) and status (200 indicates success)
    // More info on readystates = https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest/readyState
    // More info on http statuses = https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
    if(xhttp.readyState == 4 && xhttp.status == "200") {
        let responseText = xhttp.responseText;
        document.querySelector("#container").innerText = responseText;
    }
}
//Send the request
xhttp.send();
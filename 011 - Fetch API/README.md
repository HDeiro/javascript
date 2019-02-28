## Fetch API

The Fetch API is the evolution of the conventional XMLHttpRequest that allows to handle asynchronous HTTP requests.

The Fetch API provides a global method called ```fetch()``` that can be used to execute HTTP Requests. This method can take two parameters:

- _Input_: the resource to be fetched. This resource can be represented as a URL for the resource (http://myresource.com) or a [Request](https://developer.mozilla.org/pt-BR/docs/Web/API/Request) object.

- _Init_: This init is an object that contains options that can be customized to different options, like:
    - _method_: HTTP Method. E.g. GET, POST, PUT, PATCH, DELETE etc.
    - _headers_: Any header can be added as a [Header](https://developer.mozilla.org/pt-BR/docs/Web/API/Headers) object.
    - _body_: Any valid body that can be sent to the request. E.g. ```Blob```, ```BufferSource```, ```FormData```, ```URLSearchParameters``` etc.
    - _mode_: The mode to be used in the request. Can have three values: ```cors```, ```no-cors``` and ```same-origin```. 
    
        Other information can be found in [Fetch API Documentation](https://github.com/github/fetch#installation).

The ```fetch()``` method returns a Promise (we'll talk better about it soon) to deal with the asynchronous response.
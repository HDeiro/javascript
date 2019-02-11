## AJAX

Ajax is the acronym of **Asynchronous JavaScript and XML**, it refers to a set of techniques that permits to send and receive data from another systems and update your view without reloading and/or blocking the rendering, what is very important for the user experience (UX).

#### How does things works without Ajax?

![Without Ajax](https://github.com/HDeiro/javascript/blob/v2/009%20-%20Ajax/assets/img/non-ajax.jpg?raw=true)

Without Ajax, as shown in the picture, when an HTTP-Request is sent to the back-end, it's neessary to wait for this request to be processed an returned with the requested data. 

The main problem with this approach is that it blocks the process because of external processing (from the web server). Besides that, you become dependent on the performance of the back-end and the network during the processing.

#### How does things work with Ajax?

![With Ajax](https://github.com/HDeiro/javascript/blob/v2/009%20-%20Ajax/assets/img/ajax.jpg?raw=true)

When we use Ajax the process shown before changes a little bit, as you can see in the image above.

We have now one more layer, the "Ajax Engine", that acts as a middleware between the UI and web server. In this case, when some data has to be requested to the back-end, the user interface layer will send a JavaScript call to the Ajax Engine. The Engine will request this data and deal with the HTTP Response. After this, the response is parsed and sent to the user interface layer. The most important fact here is that it happens **asynchronously**. So, the process is transparent to the user.

#### How do I use Ajax?

Asynchronous loading is one of the best performance improvements that can be done to basically any website. One good improvement to the import of JavaScripts in an HTML page is to asynchronously load all the non-critic files (those that are mandatory to load the page). You can import those files like:

```html
<script src="script.js" async></script>
```

In order to send programatic requests and handle the responses you may use JavaScript as shown in the example.

#### Cross-Origin Resource Sharing (CORS)

It's a mechanism that uses additoinal headers to control if the browser should let an web application consume data from different origins. In that cases, the web application executes a cross origin HTTP request when the requested resource is in a different origin (in terms of domain, protocol or/and port) than its own origin.

An example of a cross-origin request is when ```https://requiror.com``` sends a request via XMLHttpRequest or Fetch API (we'll talk about it soon) to ```https://requested.com/payload.json```. For security reasons, the browsers restricts this cross-origin HTTP requests initiated from scripts. This means that a web application can only conclude this kind of request when the HTTP response includes the correct headers, otherwise it'll be blocked.

A very used approach defines a preflight request that uses a "OPTIONS" verb to send a "pre-request" to the endpoint and fetch the access control options, as show in next image.

![CORS](https://github.com/HDeiro/javascript/blob/v2/009%20-%20Ajax/assets/img/cors.png?raw=true)

This image is originally from [MDN Docs - Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

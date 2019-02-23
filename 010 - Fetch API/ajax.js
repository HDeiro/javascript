fetch("data.json").then(response => {
    if(response.status !== 200) {
        console.log(`There was a problem on the request, Status ${response.status} (${response.statusText})`, response);
        return;
    }

    response.json().then(responseData => document.querySelector("#container").innerText = JSON.stringify(responseData));
});
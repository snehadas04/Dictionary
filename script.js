var btn = document.querySelector("#search");
var inputtext = document.querySelector("#word");
var resultP = document.querySelector("p");

btn.addEventListener("click", function () {
    var text = inputtext.value;
    url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    finalURL = url + text;


    fetch(finalURL).then(response => {
        return response.json();
    }).then(data => {
        var resultFinal = data[0]["meanings"][0]["definitions"][0]["definition"];
        resultP.innerHTML = resultFinal;

    })

})

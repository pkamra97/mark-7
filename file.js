const input=document.querySelector("#txta1");
const output=document.querySelector("#txta2");
const buttonTranslate=document.querySelector(".btn");
var url="https://api.funtranslations.com/translate/yoda.json";

function getURL(text){
    return url+"?text="+text;
}
function errorHandler(error)
{
    console.log(error);
    alert(error);
}
function yoda()
{
    // wire checking
//     console.log(input.value);
//     console.log("everything is connected now");
//     output.innerText="Yoda is alive";
    fetch(getURL(input.value))
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        output.innerText=translatedText;
    }) 
    .catch(errorHandler)
}

buttonTranslate.addEventListener('click',yoda)
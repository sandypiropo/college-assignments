let paragrafo = document.querySelector("#para1");

paragrafo.addEventListener("mouseover", trocaTexto);
paragrafo.addEventListener("mouseout", voltaCor);

function trocaTexto(){
    paragrafo.style.background="green";
}

function voltaCor(){
    paragrafo.style.background="white";
}
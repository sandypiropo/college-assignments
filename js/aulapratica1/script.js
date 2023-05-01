let botao = document.querySelector("#botao");
botao.style.background="blue";
let estaQuebrado=false;
let contaClicks=0;
botao.addEventListener("mouseover",e =>{
    if(!estaQuebrado){
        botao.style.background="green";
        botao.style.color="white"
    }
});

botao.addEventListener("mouseout",e =>{
    if(!estaQuebrado){
        botao.style.background="blue";
        botao.style.color="black"
    }
});

botao.addEventListener("click",e =>{
    contaClicks++;

    if(contaClicks>=5){
        botao.style.background="red";
        botao.innerHTML="QUEBREI"
        estaQuebrado=true;
    }
})
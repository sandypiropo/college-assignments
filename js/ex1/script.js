// cria um elemento botão e define seu texto
let botao = document.createElement("button");
botao.textContent = "SUBSTITUIR";

// define o atributo onclick do botão
botao.onclick = function() {
  document.getElementById("botao").innerHTML = "O método <b>getElementById()</b> retorna uma referência para o objeto DOM (Document Object Model) que corresponde ao elemento HTML com o valor especificado do atributo id.";
};

// adiciona o botão ao DOM
document.body.appendChild(botao);


// Declaração de variáveis
let nome = "Visitante";
let pais = "Brasil";
let idade = 20;

// Verifica se a idade é maior ou igual a 18 e armazena o resultado em uma variável booleana
let maioridade = idade >= 18;

// Utiliza a declaração condicional "if...else" para imprimir uma mensagem de boas-vindas se a pessoa é maior de idade ou uma mensagem de acesso negado se não é.
if(maioridade){
    console.log("Seja bem vindo");
}
else{
    console.log("Acesso negado!");
}

// Imprime uma mensagem personalizada utilizando a interpolação de string
console.log(`Olá, ${nome}!. Sua país é ${pais}.`);

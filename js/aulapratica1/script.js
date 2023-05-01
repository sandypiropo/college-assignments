// Seleciona o botão com o id "botao" e o armazena na constante "botao"
const botao = document.querySelector("#botao");

// Define a cor de fundo inicial do botão como "blue"
botao.style.backgroundColor = "blue";

// Quando o mouse estiver sobre o botão
botao.addEventListener("mouseover", () => {
  // Verifica se o botão está quebrado
  if (!estaQuebrado) {
    // Se não estiver quebrado, muda a cor de fundo do botão para "green"
    botao.style.backgroundColor = "green";
  }
});

// Adiciona um ouvinte de evento para quando o botão for clicado
botao.addEventListener("click", () => {
  botao.style.backgroundColor = "red";
  botao.innerHTML = "QUEBREI";
  // Define a variável "estaQuebrado" como "true"
  estaQuebrado = true;
});

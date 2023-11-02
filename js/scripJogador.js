 // Função para ativar/desativar a edição das caixas de texto
 function toggleEdicao() {
    var caixasDeTexto = document.querySelectorAll(".abilityValues");
    var botaoEditar = document.getElementById("botaoEditar");
    var iconeEditar = document.getElementById("iconeEditar");

    if (caixasDeTexto[0].readOnly) {
        for (var i = 0; i < caixasDeTexto.length; i++) {
            caixasDeTexto[i].readOnly = false;
        }
        iconeEditar.src = "css/img/unlock-fill.svg";
    } else {
        for (var i = 0; i < caixasDeTexto.length; i++) {
            caixasDeTexto[i].readOnly = true;
        }
        iconeEditar.src = "css/img/lock-fill.svg";
        // Salvar os valores no localStorage
        for (var i = 0; i < caixasDeTexto.length; i++) {
            localStorage.setItem("abilityValues" + i, caixasDeTexto[i].value);
        }
    }
}

// Carregar os valores do localStorage ao recarregar a página
function carregarValores() {
    var caixasDeTexto = document.querySelectorAll(".abilityValues");
    for (var i = 0; i < caixasDeTexto.length; i++) {
        caixasDeTexto[i].value = localStorage.getItem("abilityValues" + i) || "";
    }
}

// Adiciona um evento de clique ao botão
document.getElementById("botaoEditar").addEventListener("click", toggleEdicao);

// Carregar os valores ao carregar a página
carregarValores();

// Função para gerar um valor aleatório entre 1 e um número específico
function rolarDado(maxValue, resultElement) {
    const resultado = Math.floor(Math.random() * maxValue) + 1;
    resultElement.textContent = resultado;
  }
  
  // Adiciona ouvintes de evento a todos os botões
  const dados = [
    { id: "rolarD20", maxValue: 20 },
    { id: "rolarD12", maxValue: 12 },
    { id: "rolarD10", maxValue: 10 },
    { id: "rolarD8", maxValue: 8 },
    { id: "rolarD6", maxValue: 6 },
    { id: "rolarD4", maxValue: 4 },
    { id: "rolarD100", maxValue: 100 }
  ];
  
  dados.forEach(dado => {
    const botao = document.getElementById(dado.id);
    const resultDice = document.querySelector("#resultRolagem");
  
    botao.addEventListener("click", function() {
      rolarDado(dado.maxValue, resultDice);
    });
  });
  
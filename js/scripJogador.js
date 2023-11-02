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
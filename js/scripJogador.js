var edicaoHabilitada = false;
var files = [
  document.getElementById("File1"),
  document.getElementById("File2"),
  document.getElementById("File3"),
  document.getElementById("File4"),
  document.getElementById("File5"),
  document.getElementById("File6"),
  document.getElementById("File7"),
  document.getElementById("File8"),
  document.getElementById("File9"),
  document.getElementById("File10"),
  document.getElementById("File11"),
  document.getElementById("File12"),
  document.getElementById("File13"),
  document.getElementById("File14"),
  document.getElementById("File15"),
  document.getElementById("File16"),
  document.getElementById("File17"),
  document.getElementById("File18"),
  document.getElementById("File19"),
  document.getElementById("File20"),
  document.getElementById("File21"),
  document.getElementById("File22"),
  document.getElementById("File23"),
  document.getElementById("File24"),
  document.getElementById("File25"),
  document.getElementById("File26"),
  document.getElementById("File27"),
  document.getElementById("File28"),
  document.getElementById("File29"),
  document.getElementById("File30"),
  document.getElementById("File31"),
  document.getElementById("File32"),
  document.getElementById("File33"),

];

// Carregar conteúdo do localStorage ao carregar a página
window.onload = function() {
  for (var i = 0; i < files.length; i++) {
    var conteudoSalvo = localStorage.getItem(files[i].id);
    if (conteudoSalvo) {
      files[i].value = conteudoSalvo;
    }
  }
};

// Salvar conteúdo no localStorage quando as caixas de texto perdem o foco
for (var i = 0; i < files.length; i++) {
  files[i].addEventListener("blur", function(e) {
    if (edicaoHabilitada) {
      localStorage.setItem(e.target.id, e.target.value);
    }
  });
}


function toggleEdicao() {
  edicaoHabilitada = !edicaoHabilitada;

  for (var i = 0; i < files.length; i++) {
    files[i].readOnly = !edicaoHabilitada;
  }

  var imagemBotao = document.getElementById("imagemBotao");
  if (edicaoHabilitada) {
    imagemBotao.src = "css/img/unlock-fill.svg";
    imagemBotao.alt = "Editar";
  } else {
    imagemBotao.src = "css/img/lock-fill.svg";
    imagemBotao.alt = "Desabilitar";
  }
}




//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//

/* Anotaçoes */

var caixaTexto = document.getElementById("notes");

        // Verifique se há conteúdo salvo localmente e restaure-o
        if (localStorage.getItem("textoSalvo")) {
            caixaTexto.value = localStorage.getItem("textoSalvo");
        }

        // Adicione um ouvinte de evento para salvar o conteúdo ao sair da caixa de texto
        caixaTexto.addEventListener("blur", function () {
            localStorage.setItem("textoSalvo", caixaTexto.value);
        });



//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//

// Função para gerar um valor aleatório entre 1 e um número específico
function rolarDado(maxValue, resultElement) {
    let resultado;
    if (maxValue === 100) {
      resultado = Math.floor(Math.random() * (maxValue + 1));
    } else {
      resultado = Math.floor(Math.random() * maxValue) + 1;
    }
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
  
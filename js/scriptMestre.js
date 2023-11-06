/*Biblioteca do mestre */
/*
function toggleFichas() {
  var fichasButton = document.getElementById("fichas-button");
  var fichasImage = document.getElementById("fichas-image");
  var botoesImagem = document.getElementById("botoes-imagem");

  if (botoesImagem.style.display === "none") {
      fichasImage.src = "css/img/icone-pasta-aberta.png"; // Altere o caminho da imagem ativa
      botoesImagem.style.display = "block";
  } else {
      fichasImage.src = "css/img/icone pasta.png"; // Altere o caminho da imagem inativa
      botoesImagem.style.display = "none";
  }
}

function trocarImagem(novaImagem) {
  var imageView = document.getElementById("image-view");
  imageView.src = novaImagem;
  imageView.alt = novaImagem;
}
*/
function toggleButtons(elementId) {
  var element = document.getElementById(elementId);

  // Alterna a visibilidade dos botões
  if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
  } else {
      element.classList.add("hidden");
  }
}

function trocarImagem(novaImagem, botao) {
  var imageView = document.getElementById("image-view");
  imageView.src = novaImagem;
  imageView.alt = novaImagem;

  // Altera a imagem do botão
  var button = document.getElementById(botao + "-button");
  if (button) {
      button.innerHTML = `<img src="icone_${botao}_ativo.png" alt="${botao}">`;
  }

}






/*-_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ -_-_ */

/*  Temporizador */ 
"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`
}
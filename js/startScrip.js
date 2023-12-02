

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var jogadores = ["Jogador1", "Jogador2", "Jogador3", "Jogador4"];

    if (jogadores.includes(username) && password === "Senha" + username.charAt(username.length - 1)) {
        // Armazena o jogador atual no localStorage
        localStorage.setItem("jogadorAtual", username);
        
        // Redireciona para a página do jogador correspondente
        window.location.href = "jogador.html";


    } else if (username === "Mestre" && password === "Mestre") {

        window.location.href = "mestre.html";


    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}

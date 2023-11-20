function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Jogador" && password === "Jogador") {
      
        window.location.href = "jogador.html";
    } else if (username === "Mestre" && password === "Mestre") {

        window.location.href = "mestre.html";
    } else {

        alert("Credenciais inválidas. Tente novamente.");
    }
}
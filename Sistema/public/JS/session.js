
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var senha = sessionStorage.SENHA_USUARIO;
    console.log(email + " " + nome);
    // o console está mostrando certo os dados
    var b_usuario = document.getElementById("b_usuario");
   
    if (email != null && nome != null && senha != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "indexLogin.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "indexHome.html";
}
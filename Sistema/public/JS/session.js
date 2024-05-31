
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var senha = sessionStorage.SENHA_USUARIO;
    console.log(email + " " + nome);
    // o console está mostrando certo os dados

    var b_usuario = document.getElementById("b_usuario");

    // no if estamos entendendo que não está nulo
    if (email != null && nome != null && senha != null) {
        b_usuario.innerHTML = nome;

        fetch("/Ususario/buscarNome", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: email,
                nomeServer: nome,
                senhaServer: senha  
            })
        }).then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                resposta.json().then(json => {
                    console.log(json);
                }).catch(function (erro) {
                    console.log("Erro ao converter resposta para JSON: ", erro);
                });
            } else {
                console.log("Erro na resposta do servidor: ", resposta.statusText);
            }
        }).catch(function (erro) {
            console.log("Erro na requisição: ", erro);
        });

    } else {
        window.location = "indexLogin.html";
    }
}


function limparSessao() {
    sessionStorage.clear();
    window.location = "../indexHome.html";
}
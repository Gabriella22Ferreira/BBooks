var usuarioModel = require("../models/usuarioModel");

function autenticar()
{
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) 
    {
        res.status(400).send("Seu email está undefined!");
    }
    else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    }
    else
    {
        usuarioModel.autenticar(email, senha).then(
            function(respostaAutenticacao){
                console.log(`Resultados encontrados: ${respostaAutentucacao.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                if(respostaAutenticacao.length == 1){
                    console.log(respostaAutenticar);

                    usuarioModel.buscarUsuario(respostaAutenticacao[0].idUsuario).then()
                }
        )          
}}
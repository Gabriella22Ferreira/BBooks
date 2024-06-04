var usuarioModel = require("../Models/UsuarioLeitorModel");

function listar(req, res) {
    usuarioModel.listar().then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    usuarioModel.cadastrar(nome, email, senha).then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function loginAutenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) 
    {
        res.status(400).send("Seu email está undefined!");
    }
    else if (senha == undefined)
    {
        res.status(400).send("Sua senha está indefinida!");
    }
    else
    {        
        usuarioModel.loginAutenticar(email, senha)
        .then(function (resultadoAutenticar) {
            if (resultadoAutenticar.length == 1) {
                const usuario = resultadoAutenticar[0];
                res.json({
                    idUsuario: usuario.idUsuario,
                    emailUsuario: usuario.email,
                    nomeUsuario: usuario.nome,
                    senhaUsuario: usuario.senha
                });
            } else if (resultadoAutenticar.length == 0) {
                res.status(403).send("Email e/ou senha inválido(s)");
            } else {
                res.status(403).send("Mais de um usuário com o mesmo login e senha!");
            }
        })
        .catch(function (erro) {
            console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
            res.status(500).json({ message: "Erro ao realizar o login", error: erro.sqlMessage });
        });
    }
}
module.exports = {
    listar,
    cadastrar,
    loginAutenticar
};

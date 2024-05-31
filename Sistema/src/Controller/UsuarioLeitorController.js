var usuarioModel = require("../Models/UsuarioModel");

function listar(req, res) {
    usuarioModel.listar().then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;

    usuarioModel.cadastrar(nome, email, senha).then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar,
    cadastrar
};

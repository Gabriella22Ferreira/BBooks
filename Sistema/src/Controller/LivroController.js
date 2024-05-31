var livroModel = require("../Models/LivroModal");

function listar(req, res) {
    livroModel.listar().then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrarLivro(req, res) {
    var titulo = req.body.titulo;
    var autor = req.body.autor;
    var usuario_id = req.body.usuario_id;

    livroModel.cadastrarLivro(titulo, autor, usuario_id).then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar,
    cadastrarLivro
};

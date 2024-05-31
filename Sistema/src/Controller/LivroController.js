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
    var genero = req.body.genero;
    var totalPaginas = req.body.totalPaginas;
    var usuario_id = req.body.usuario_id;

    livroModel.cadastrarLivro(titulo, autor, genero, totalPaginas, usuario_id).then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function apagarLivro(req, res){
    var livroId = req.params.id; // supondo que o id do livro seja passado pela URL
    livroModel.deletarLivro(livroId)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    listar,
    cadastrarLivro,
    apagarLivro
};

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
    var descricao = req.body.descricao;
    var totalPaginas = req.body.totalPaginas;
    var avaliacao = req.body.avaliacao;
    var status = req.body.status;

    livroModel.cadastrarLivro(titulo, autor, genero, descricao, totalPaginas, avaliacao, status).then(function (resultado) {
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

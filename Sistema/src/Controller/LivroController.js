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
    
    const fs = require('fs');
        // Extrair outros dados do corpo da requisição
    
        // Verificar se um arquivo de imagem foi enviado
        if (!req.file) {
            return res.status(400).json({ error: 'Nenhuma imagem foi enviada.' });
        }
        // Ler o conteúdo do arquivo de imagem
        fs.readFile(req.file.path, (err, data) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao ler o arquivo de imagem.' });
            }
            // Converter os dados binários em base64 para salvar no banco de dados
            const imageBase64 = data.toString('base64');
            // Salvar no banco de dados junto com os outros dados do livro
            livroModel.cadastrarLivro(titulo, autor, genero, descricao, totalPaginas, avaliacao, status, imageBase64)
                .then(function (resultado) {
                    // Remover o arquivo temporário após o upload
                    fs.unlinkSync(req.file.path);
                    res.json(resultado);
                }).catch(function (erro) {
                    res.status(500).json(erro.sqlMessage);
                });
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

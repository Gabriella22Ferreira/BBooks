var express = require("express");
var router = express.Router();
var livroController = require("../Controller/LivroController");

router.post("/cadastrarLivro", function (req, res) {
    livroController.cadastrarLivro(req, res);
});

// Rota para deletar um livro
router.delete('/deletar/:id', function (req, res) {
    livroController.apagarLivro(req, res);
});

module.exports = router;

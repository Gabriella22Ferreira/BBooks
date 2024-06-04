var express = require("express");
const upload = require('../Uploads/uploadConfig'); // Importando o uploadConfig
var router = express.Router();

var livroController = require("../Controller/LivroController");

router.post("/cadastrarLivro", upload.single('image'), function (req, res) {
    livroController.cadastrarLivro(req, res);
});

// Rota para deletar um livro
router.delete('/deletar/:id', livroController.apagarLivro);

module.exports = router;

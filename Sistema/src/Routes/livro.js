var express = require("express");
var router = express.Router();

var livroController = require("../Controllers/LivroController");

router.post("/cadastrar", function (req, res) {
    livroController.cadastrarLivro(req, res);
});


module.exports = router;

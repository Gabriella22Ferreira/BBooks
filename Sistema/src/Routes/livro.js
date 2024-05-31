var express = require("express");
var router = express.Router();

var livroController = require("../Controllers/LivroController");

router.get("/cadastrar", function (req, res) {
    livroController.cadastrarLivro(req, res);
});


module.exports = router;

var express = require("express");
var router = express.Router();

var livroController = require("../Controller/LivroController");

router.get("/cadastrarLivro", function (req, res) {
    livroController.cadastrarLivro(req, res);
});


module.exports = router;

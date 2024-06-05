var express = require("express");
var router = express.Router();

var usuarioController = require("../Controller/UsuarioLeitorController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/cadastrarLivro", function (req, res) {
    usuarioController.cadastrarLivro(req, res);
});


router.post("/loginAutenticar", function (req, res) {
    usuarioController.loginAutenticar(req, res);
});


module.exports = router;

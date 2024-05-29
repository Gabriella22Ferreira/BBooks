var express = require("express");
var router = express.Router();
var usuarioController = require("../Controllers/UsuarioController");

router.get("/", usuarioController.listar);
router.post("/cadastrar", usuarioController.cadastrar);

module.exports = router;

var express = require("express");
var router = express.Router();
var livroController = require("../Controllers/LivroController");

router.get("/", livroController.listar);
router.post("/cadastrar", livroController.cadastrar);

module.exports = router;

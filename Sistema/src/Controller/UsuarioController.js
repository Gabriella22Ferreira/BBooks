var usuarioModel = require("../models/usuarioModel");

function autenticar()
{
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) 
    {
        res.status(400).send("Seu email está undefined!");
    }
    else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    }
    else
    {
        
                 
}}
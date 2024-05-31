var database = require('../database/config');

function login(){
    var instrucao = ``;
}

function listar() {
    var instrucao = `
        SELECT * FROM usuario;
    `;
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha) {
    var instrucao = `
        INSERT INTO Usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    return database.executar(instrucao);
}

module.exports = {
    listar,
    cadastrar
};

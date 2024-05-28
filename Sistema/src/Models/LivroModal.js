var database = require('../database/config');

function listar() {
    var instrucao = `
        SELECT * FROM livro;
    `;
    return database.executar(instrucao);
}

function cadastrar(titulo, autor, usuario_id) {
    var instrucao = `
        INSERT INTO livro (titulo, autor, usuario_id) VALUES ('${titulo}', '${autor}', '${usuario_id}');
    `;
    return database.executar(instrucao);
}

module.exports = {
    listar,
    cadastrar
};

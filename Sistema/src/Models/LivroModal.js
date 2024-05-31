var database = require('../database/config');

function listar() {
    var instrucao = `
        SELECT * FROM Livro;
    `;
    return database.executar(instrucao);
}

function cadastrarLivro(titulo, autor, usuario_id) {
    var instrucao = `
        INSERT INTO Livro (titulo, autor, usuario_id) VALUES ('${titulo}', '${autor}', '${usuario_id}');
    `;
    return database.executar(instrucao);
}

module.exports = {
    listar,
    cadastrarLivro
};

var database = require('../database/config');

function listar() {
    var instrucao = `
        SELECT * FROM Livro;
    `;
    return database.executar(instrucao);
}

function cadastrarLivro(titulo, autor, genero, descricao, totalPaginas, avaliacao, status ) {
    var instrucao = `
        INSERT INTO Livro (titulo, autor, genero, descricao, totalPaginas, avaliacao, status)
        VALUES ('${titulo}', '${autor}', '${genero}', '${descricao}', '${totalPaginas}', '${avaliacao}', '${status}');
    `;
    return database.executar(instrucao);
}

function deletarLivro(){
    var instrucao = `
    DELETE FROM Livro WHERE id = ?
    `;
    return database.executar(instrucao);
}


module.exports = {
    listar,
    cadastrarLivro,
    deletarLivro
};

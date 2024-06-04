var database = require('../database/config');

function listar() {
    var instrucao = `
        SELECT * FROM Livro;
    `;
    return database.executar(instrucao);
}

function cadastrarLivro(titulo, autor, genero, descricao, totalPaginas, avaliacao, status, image ) {
    var instrucao = `
        INSERT INTO Livro (titulo, autor, genero, descricao, totalPaginas, avaliacao, status, image)
        VALUES (${titulo}, ${autor}, ${genero}, ${descricao}, ${totalPaginas}, ${avaliacao}, ${status}, ${image});
    `;
    return database.executar(instrucao, [titulo, autor, genero, descricao, totalPaginas, avaliacao, status, image]);
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

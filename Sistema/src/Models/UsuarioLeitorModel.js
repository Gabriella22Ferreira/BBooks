var database = require('../database/config');

function loginAutenticar(email, senha)
{
    var instrucao = `select idUsuario, nome, email, senha
                        from Usuario
                        WHERE email = '${email}' AND senha = '${senha}';
                        `;
    return database.executar(instrucao);
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
    cadastrar,
    loginAutenticar
};

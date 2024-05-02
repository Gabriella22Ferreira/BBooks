DROP DATABASE bdBluBooks;
CREATE DATABASE bdBluBooks;

USE bdBluBooks;

CREATE TABLE tbLivros
(
	idLivro INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(45) NOT NULL,
    descricao VARCHAR(200) NOT NULL,
    genero VARCHAR(45),
    dataLancamento DATETIME NOT NULL,
    totalPaginas INT NOT NULL,
	avaliacao INT,
    statusLeitura VARCHAR(11),
    CONSTRAINT statusLeitura CHECK(statusLeitura IN ("Não Lido", "Quero Ler", "Lendo", "Lido"))
);

CREATE TABLE tbPlanoLeitura
(
	idPlano INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    qntLivros INT NOT NULL,
    qntDias INT NOT NULL,
    avaliacaoLivro INT,
    fkLivro INT,
    CONSTRAINT fkLivro FOREIGN KEY (fkLivro) REFERENCES tbLivros(idLivro)
);

CREATE TABLE tbUsuario
(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nomeCompleto VARCHAR(45) NOT NULL,
    nomeUsuario VARCHAR(45) NOT NULL,
    dataNasc DATETIME NOT NULL,
    email VARCHAR(45) NOT NULL,
    senha CHAR(8) NOT NULL,
    fkPlanoLeitura INT,
    CONSTRAINT fkPlanoLeitura FOREIGN KEY (fkPlanoLeitura) REFERENCES tbPlanoLeitura(idPlano)
);

-- CREATE TABLE tbAvaliacao
-- (
-- 	idAvaliacao INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--   avaliacao INT,
--    fkLivro INT,
--    fkUsuario INT,
--    CONSTRAINT fkLivro FOREIGN KEY (fkLivro) REFERENCES tbLivros(idLivro),
--    CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario)  REFERENCES tbUsuario(idUsuario)
-- )



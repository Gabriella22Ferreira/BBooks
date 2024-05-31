DROP DATABASE BBooks;
CREATE DATABASE BBooks;

USE BBooks;

CREATE TABLE Livros
(
	idLivro INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(45) NOT NULL,
    descricao VARCHAR(200) NOT NULL,
    genero VARCHAR(45),
    totalPaginas INT NOT NULL,
	avaliacao INT,
    statusLeitura VARCHAR(11),
    CONSTRAINT statusLeitura CHECK(statusLeitura IN ("Não Lido", "Quero Ler", "Lendo", "Lido"))
);

CREATE TABLE PlanoLeitura
(
	idPlano INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    qntLivros INT NOT NULL,
    qntDias INT NOT NULL,
    fkLivro INT,
    CONSTRAINT fkLivro FOREIGN KEY (fkLivro) REFERENCES Livros(idLivro)
);

CREATE TABLE Usuario
(
	idUsu INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    senha CHAR(8) NOT NULL,
    fkPlanoLeitura INT,
    CONSTRAINT fkPlanoLeitura FOREIGN KEY (fkPlanoLeitura) REFERENCES PlanoLeitura(idPlano)
);


DROP DATABASE BBooks;
CREATE DATABASE BBooks;

USE BBooks;

CREATE TABLE Livros
(
	idLivro INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    titulo VARCHAR(45) NOT NULL,
    descricao VARCHAR(200) NOT NULL,
    genero VARCHAR(45),
    totalPaginas INT NOT NULL,
	avalicao INT,
    statusLeitura VARCHAR(5) CHECK(statusLeitura IN ("Lendo", "Lido"))
);

CREATE TABLE PlanoLeitura
(
	idPlano INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    qntLivros INT NOT NULL,
    qntDias INT NOT NULL,
    descricaoLeitura VARCHAR(1500),
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


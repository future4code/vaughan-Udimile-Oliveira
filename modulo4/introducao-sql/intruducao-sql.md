1. a) VARCHAR é uma "string"- são palavras. PRIMARY KEY é o identificador único.
b) SHOW DATABASES mostra informações sobre os schemas, SHOW TABLES mostra informações sobre a tabela. 
c) o DESCRIBE Actor descreve o que cada variável é na estrutura. 
2. b) ERROR CODE 1062 DUPLICATE ENTRY '002' FOR KEY 'PRIMARY' - CÓDIGO DE ERRO 1062 ENTRADA DUPLICADA '002' PARA A CHAVE 'PRIMARY'. Este erro é apresentado pq uma variável tipada como "PRIMARY" só pode ser usada uma vez. 
c) Error Code: 1136. Column count doesn't match value count at row 1 - Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1, Acontece pq existem colunas que não foram inseridas mas que são essenciais quando a tabela foi criada. 
d) Error Code: 1364. Field 'name' doesn't have a default value - Código de erro: 1364. O campo 'nome' não tem um valor padrão, O campo nome deve ser declarado. 
e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 - Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1, O formato da data está errado. 
3. c) Retornou uma tabela com todos os valores nulos, pq não há gênero "invalid". 

e) Error Code: 1054. Unknown column 'nome' in 'field list' - Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos', O nome da coluna está errado então ele espera name e não nome

Exercícios feitos no MySQL

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES ;

SHOW TABLES;

DESCRIBE Actor; 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"002",
"Amelie",
1200000,
"1963-08-23",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Alfred",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Wagner Moura",
  500000,
  "1976-06-27", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Bruna Marquezine",
  750000,
  "1995-08-04", 
  "female"
);

SELECT * FROM Actor;

SELECT id, salary from Actor;

SELECT id, name from Actor WHERE gender = "male";

SELECT * from Actor WHERE gender = "female";

SELECT salary from Actor WHERE name = "Tony Ramos";

SELECT * from Actor WHERE gender = "invalid";

SELECT id, name, salary from Actor WHERE salary < 500000 ;

SELECT id, nome from Actor WHERE id = "002";

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

SELECT * FROM Actor
WHERE (name NOT LIKE "%G%" OR name NOT LIKE"%g%");

SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;

segunda parte 

CREATE TABLE Movie (
    id INT PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    lancamento DATE NOT NULL,
    avaliacao FLOAT NOT NULL
);

INSERT INTO Movie (id, name, sinopse, lancamento, avaliacao)
VALUES(
 001,
 "Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
); 

INSERT INTO Movie (id, name, sinopse, lancamento, avaliacao)
VALUES(
 002,
 "Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela	",
"2012-12-27",
10
); 

INSERT INTO Movie (id, name, sinopse, lancamento, avaliacao)
VALUES(
 003,
 "Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
); 

INSERT INTO Movie (id, name, sinopse, lancamento, avaliacao)
VALUES(
 004,
 "O Auto da Compadecida",
"As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
"2000-09-15",
9
); 

SELECT id, name, avaliacao FROM Movie
WHERE id LIKE 001;

SELECT * FROM Movie
WHERE name LIKE "O Auto Da Compadecida";

SELECT * FROM Movie
WHERE avaliacao >= 7


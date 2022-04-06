1. a) Retira a coluna salary. 
b) está trocando gender por sex, deixando ele com o VARCHAR(6) e sem o NOT NULL
c) Esta trocando a quantidade máxima de caracteres para 255 
5. a) Essa query está contando quantos tem em cada grupo de genero. 


-- Exercicio de Aprofundamento 

SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "003";

SELECT * FROM Actor;

UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";

UPDATE Actor
SET 
name = "Giovanna Antonelli", 
birth_date = "1976-03-18",
salary = 1500000, 
gender = "female"
WHERE id = "005";

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor 
WHERE gender = "male" AND salary > 1000000;

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor
WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;
 
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id, name FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary ASC;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary) FROM Actor 
GROUP BY gender;


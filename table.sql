use test;
INSERT INTO users(first_name, last_name) VALUES ('Andew', 'Romanov');
SELECT * from users;
DROP TABLE users;
CREATE table users(
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100),
  password VARCHAR(120),
  img VARCHAR(120),
  PRIMARY KEY (id)
)ENGINE = InnDB

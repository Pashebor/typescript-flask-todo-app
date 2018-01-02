use todoapp;
INSERT INTO users(name, password) VALUES ('pashebor', '123456');
SELECT * from users;
DROP TABLE users;

CREATE table users(
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100),
  password VARCHAR(120),
  img VARCHAR(120),
  PRIMARY KEY (id)
)ENGINE = InnoDB;

CREATE table user_notes(
  id INT(11) NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(100),
  title VARCHAR(120),
  note TEXT,
  PRIMARY KEY (id)
)ENGINE = InnoDB;

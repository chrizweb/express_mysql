CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
  id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  salary INT(5) DEFAULT NULL
);

DESCRIBE employee

INSERT INTO employee VALUES
(1, 'Joe', 1000),
(2, 'Henry', 2000),
(3, 'Sam', 2500),
(4, 'Max', 1500)
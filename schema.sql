DROP DATABASE IF EXISTS deepfryd;

CREATE DATABASE deepfryd;

USE deepfryd;

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  review varchar(100) NOT NULL,
  rating int NOT NULL,
  product_id int NOT NULL,
  PRIMARY KEY (ID)
);